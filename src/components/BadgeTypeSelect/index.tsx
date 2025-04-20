"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  DropdownSelect,
  DropdownWrapper,
  Input,
  InsideWrapper,
  InsideWrapperSelected,
  Placeholder,
  Wrapper,
} from "./styled";
import BadgeDynamic from "./BadgeDynamic";

export interface BadgeTypeSelectElement {
  index: any;
  value: string;
}

export type BadgeTypeSelectType = "default" | "input" | "single";

interface Props {
  elements: BadgeTypeSelectElement[];
  placeholder: string;
  type?: BadgeTypeSelectType;
  onSearch?: (v: string) => void;
  nested?: boolean;
  preset?: BadgeTypeSelectElement[];
  onChange?: (elements: BadgeTypeSelectElement[]) => void;
}

const BadgeTypeSelect = ({
  elements,
  placeholder,
  type = "default",
  onSearch,
  nested = false,
  preset = [],
  onChange,
}: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [placeholderPinned, setPlaceholderPinned] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedTypes, setSelectedTypes] =
    useState<BadgeTypeSelectElement[]>(preset);
  const [searchTimeoutId, setSearchTimeoutId] = useState<any>();
  const [search, setSearch] = useState<string>();

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      dropdownRef.current &&
      !wrapperRef.current.contains(event.target as Node) &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setFocus(false);
    }
  };

  useEffect(() => {
    if (focus) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [focus]);

  useEffect(() => {
    if (onChange) onChange(selectedTypes);
    if (selectedTypes.length > 0) setPlaceholderPinned(true);
    else setPlaceholderPinned(false);
  }, [selectedTypes]);

  useEffect(() => {
    if (searchTimeoutId) clearTimeout(searchTimeoutId);
    if (!onSearch) return;
    const tid = setTimeout(() => {
      if (search) onSearch(search);
    }, 1000);
    setSearchTimeoutId(tid);
  }, [search]);

  useEffect(() => {
    if (type !== "default") return;
    const updateDropdownPosition = () => {
      if (
        !wrapperRef.current ||
        !dropdownRef.current ||
        !selectedWrapperRef.current
      )
        return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const selectedRect = selectedWrapperRef.current.getBoundingClientRect();
      const dropdownElement = dropdownRef.current;

      const dropdownHeight = window.innerHeight / 3;
      dropdownElement.style.height = `${dropdownHeight}px`;
      dropdownElement.style.width = `${wrapperRect.width}px`;

      const spaceBelow = window.innerHeight - selectedRect.bottom;
      const spaceAbove = selectedRect.top;

      if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
        if (nested) {
          dropdownElement.style.position = "absolute";
          dropdownElement.style.top = `${wrapperRect.height}px`;
          //dropdownElement.style.top = `${(selectedRect.bottom + window.scrollY) / 2}px`;
        } else {
          dropdownElement.style.top = `${selectedRect.bottom + window.scrollY}px`;
        }
      } else if (nested) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.top = `${wrapperRect.height}px`;
        //dropdownElement.style.top = `${(selectedRect.top + window.scrollY - dropdownHeight) / 2}px`;
      } else {
        dropdownElement.style.top = `${selectedRect.top + window.scrollY - dropdownHeight}px`;
      }
    };

    if (focus && dropdownRef.current) {
      dropdownRef.current.style.display = "grid";
      updateDropdownPosition();
    } else if (dropdownRef.current) dropdownRef.current.style.display = "none";

    const observer = new ResizeObserver(updateDropdownPosition);
    if (selectedWrapperRef.current)
      observer.observe(selectedWrapperRef.current);

    return () => observer.disconnect();
  }, [focus, selectedTypes]);

  return (
    <Wrapper $active={focus || placeholderPinned} ref={wrapperRef}>
      <Placeholder htmlFor="inp" onClick={() => setFocus(true)}>
        {placeholder}
      </Placeholder>
      <InsideWrapper>
        <InsideWrapperSelected ref={selectedWrapperRef}>
          {selectedTypes.map((el) => (
            <BadgeDynamic
              removeCallback={() =>
                setSelectedTypes((prev) =>
                  prev.filter((item) => item.index !== el.index)
                )
              }
              value={el.value}
              key={el.index}
            />
          ))}
          <Input
            autoComplete="off"
            id="inp"
            autoFocus={focus}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={(e) => e.preventDefault()}
          />
        </InsideWrapperSelected>
      </InsideWrapper>
      <DropdownWrapper $active={focus} ref={dropdownRef}>
        {elements.length
          ? elements
              .filter((element) => {
                if (!search) return true;
                const tr = element.value.trim().toLocaleLowerCase();
                return tr.includes(search.trim().toLowerCase());
              })
              .map((el) => (
                <DropdownSelect
                  $selected={selectedTypes.some(
                    (item) => item.index === el.index
                  )}
                  key={el.index}
                  onClick={() =>
                    setSelectedTypes((prev) => {
                      if (selectedTypes.some((item) => item.index === el.index))
                        return prev.filter((item) => item.index !== el.index);
                      return [...prev, el];
                    })
                  }
                >
                  {el.value}
                </DropdownSelect>
              ))
          : "Начните поиск"}
      </DropdownWrapper>
    </Wrapper>
  );
};

export default BadgeTypeSelect;
