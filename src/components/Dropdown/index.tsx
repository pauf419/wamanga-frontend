"use client";

import React, { useState } from "react";
import {
  DropdownHeader,
  DropdownPanel,
  DropdownWrapper,
  Icon,
  PanelElement,
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
}

export const Dropdown = ({ cb, items, defaultIndex = 0 }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<DropdownItem>(items[defaultIndex]);

  const handleClick = (item: DropdownItem) => {
    cb(item);
    setSelected(item);
    setActive(false);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={() => setActive(!active)}>
        <SelectedName>{selected.name}</SelectedName>
        <Icon as={ArrowIcon} $active={active} />
      </DropdownHeader>
      <DropdownPanel $active={active}>
        {items.map((el) => (
          <PanelElement
            onClick={() => handleClick(el)}
            $selected={el.name === selected.name}
          >
            <SelectedName>{el.name}</SelectedName>
          </PanelElement>
        ))}
      </DropdownPanel>
    </DropdownWrapper>
  );
};
