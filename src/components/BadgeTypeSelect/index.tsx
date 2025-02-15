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
  index: number;
  value: string;
}

interface Props {
  elements: BadgeTypeSelectElement[];
  placeholder: string;
}

const BadgeTypeSelect = ({ elements, placeholder }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [placeholderPinned, setPlaceholderPinned] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedTypes, setSelectedTypes] = useState<BadgeTypeSelectElement[]>(
    []
  );

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
    if (selectedTypes.length > 0) setPlaceholderPinned(true);
    else setPlaceholderPinned(false);
  }, [selectedTypes]);

  useEffect(() => {
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
      //dropdownElement.style.left = `${wrapperRect.left + window.scrollX}px`;

      const spaceBelow = window.innerHeight - selectedRect.bottom;
      const spaceAbove = selectedRect.top;

      if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
        dropdownElement.style.top = `${selectedRect.bottom + window.scrollY}px`;
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
            onFocus={() => setFocus(true)}
            onBlur={(e) => e.preventDefault()}
          />
        </InsideWrapperSelected>
      </InsideWrapper>
      <DropdownWrapper $active={focus} ref={dropdownRef}>
        {elements.map((el) => (
          <DropdownSelect
            $selected={selectedTypes.some((item) => item.index === el.index)}
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
        ))}
      </DropdownWrapper>
    </Wrapper>
  );
};

export default BadgeTypeSelect;
