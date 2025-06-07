"use client";

import React, { useEffect, useState } from "react";
import {
  Blurer,
  DropdownHeader,
  DropdownPanel,
  DropdownWrapper,
  Icon,
  PanelElement,
  SearchInput,
  SelectedName,
} from "./styled";
import ArrowIcon from "@icons/svg/counter-arrow-bottom.svg";

interface DropdownItem {
  name: string;
  key: any;
}

interface Props {
  cb: (i: DropdownItem) => void;
  items: DropdownItem[];
  defaultIndex?: number;
  preset?: DropdownItem | null;
  search?: boolean;
  onSearch?: ((v: string) => void) | null;
  adaptive?: boolean;
}

export const Dropdown = ({
  cb,
  items,
  preset = null,
  defaultIndex = 0,
  search = false,
  onSearch = null,
  adaptive = false,
}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [timeoutId, setTimeoutId] = useState<any>();
  const [selected, setSelected] = useState<DropdownItem>(
    preset ? preset : items[defaultIndex]
  );

  const handleClick = (item: DropdownItem) => {
    cb(item);
    setSelected(item);
    setActive(false);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    if (timeoutId) clearTimeout(timeoutId);
    const tid = setTimeout(() => {
      if (onSearch) onSearch(searchValue);
    }, 1000);
    setTimeoutId(tid);
  }, [searchValue]);

  return (
    <>
      {active && (
        <Blurer
          onClick={() => {
            setActive(false);
          }}
        ></Blurer>
      )}
      <DropdownWrapper>
        <DropdownHeader onClick={() => setActive(!active)} $adaptive={adaptive}>
          {search ? (
            <SearchInput
              value={selected ? selected.name : searchValue}
              onChange={(e) => {
                setSelected({} as DropdownItem);
                setActive(true);
                setSearchValue(e.target.value);
              }}
              placeholder="Название команды"
            />
          ) : (
            <SelectedName>{selected.name}</SelectedName>
          )}
          <Icon as={ArrowIcon} $active={active} />
        </DropdownHeader>
        <DropdownPanel $active={active}>
          {items.map((el) => (
            <PanelElement
              key={el.name}
              onClick={() => handleClick(el)}
              $selected={selected ? el.name === selected.name : false}
            >
              <SelectedName>{el.name}</SelectedName>
            </PanelElement>
          ))}
        </DropdownPanel>
      </DropdownWrapper>
    </>
  );
};
