"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  InsideWrapper,
  InsideWrapperSelected,
  Placeholder,
  Wrapper,
} from "../styled";
import BadgeDynamic from "../BadgeDynamic";

export type BadgeTypeSelectType = "single" | "multiple";

interface Props {
  placeholder: string;
  onChange: (values: string[]) => void;
  preset?: string[];
}

export const BadgeTypeSelectManual = ({
  placeholder,
  onChange,
  preset = [],
}: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [placeholderPinned, setPlaceholderPinned] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(preset);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setPlaceholderPinned(selectedTypes.length > 0 || inputValue.length > 0);
    onChange(selectedTypes);
  }, [selectedTypes, inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const value = inputValue.trim();
      if (!selectedTypes.includes(value)) {
        setSelectedTypes((prev) => [...prev, value]);
      }
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleRemove = (value: string) => {
    setSelectedTypes((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Wrapper $active={focus || placeholderPinned} ref={wrapperRef}>
      <Placeholder htmlFor="inp" onClick={() => setFocus(true)}>
        {placeholder}
      </Placeholder>
      <InsideWrapper>
        <InsideWrapperSelected>
          {selectedTypes.map((el) => (
            <BadgeDynamic
              removeCallback={() => handleRemove(el)}
              value={el}
              key={el}
            />
          ))}
          <Input
            autoComplete="off"
            id="inp"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setFocus(true)}
            onKeyDown={handleKeyDown}
          />
        </InsideWrapperSelected>
      </InsideWrapper>
    </Wrapper>
  );
};
