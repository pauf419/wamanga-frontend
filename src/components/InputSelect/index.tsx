"use client";

import React, { useRef, useState } from "react";
import {
  DropdownWrapper,
  InputElement,
  InsideWrapper,
  Placeholder,
  PanelElement,
  SelectedName,
  Wrapper,
} from "./styled";

export interface InputSelectElement {
  index: number;
  value: string;
}

interface Props {
  placeholder: string;
  elements: InputSelectElement[];
}

const InputSelect = ({ placeholder, elements }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [selected, setSelected] = useState<InputSelectElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: InputSelectElement) => {
    setSelected(item);
    setFocus(false);
  };

  const isSelected = !!selected || focus;

  return (
    <Wrapper $focus={focus} $active={selected ? true : false} ref={wrapperRef}>
      <Placeholder
        $active={isSelected}
        htmlFor="inp"
        onClick={() => setFocus(true)}
      >
        {placeholder}
      </Placeholder>
      <InsideWrapper>
        <InputElement
          autoComplete="off"
          id="inp"
          value={selected?.value}
          autoFocus={focus}
          onFocus={() => setFocus(true)}
          readOnly
        />
        <DropdownWrapper $active={focus}>
          {elements.map((el) => (
            <PanelElement
              key={el.index}
              onClick={() => handleClick(el)}
              $selected={el.value === selected?.value}
            >
              <SelectedName>{el.value}</SelectedName>
            </PanelElement>
          ))}
        </DropdownWrapper>
      </InsideWrapper>
    </Wrapper>
  );
};

export default InputSelect;
