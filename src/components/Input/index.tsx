"use client";

import React, { useRef, useState } from "react";
import {
  InputElement,
  InsideWrapper,
  Placeholder,
  TextareaElement,
  Wrapper,
} from "./styled";
import { useEffect } from "react";

export interface BadgeTypeSelectElement {
  index: number;
  value: string;
}

interface Props {
  placeholder: string;
  type: "textarea" | "input";
  onChange: (_: string) => void;
  presetValue?: string;
}

const Input = ({
  placeholder,
  type = "input",
  onChange,
  presetValue = "",
}: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string | null>(
    presetValue ? presetValue : null
  );

  useEffect(() => {
    if (value) onChange(value);
    else if (value === "") onChange("");
  }, [value]);

  return (
    <Wrapper $focus={focus} $active={value ? true : false} ref={wrapperRef}>
      <Placeholder htmlFor="inp" onClick={() => setFocus(true)}>
        {placeholder}
      </Placeholder>
      <InsideWrapper>
        {type === "input" ? (
          <InputElement
            autoComplete="off"
            id="inp"
            autoFocus={focus}
            defaultValue={value ? value : ""}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        ) : (
          <TextareaElement
            autoComplete="off"
            id="inp"
            autoFocus={focus}
            defaultValue={value ? value : ""}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        )}
      </InsideWrapper>
    </Wrapper>
  );
};

export default Input;
