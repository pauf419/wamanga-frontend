import React, { useState } from "react";
import {
  RangeContainer,
  Slider,
  RangeTrack,
  RangeInput,
  Thumb,
} from "../RangeInput/styled";

interface Props {
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

const RangeInputSingle = ({ min, max, defaultValue, onChange }: Props) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValue(value);
    if (value !== defaultValue) onChange(Number(e.target.value));
  };

  const position = ((value - min) / (max - min)) * 100;

  return (
    <RangeContainer>
      <Slider>
        <RangeTrack left={0} right={100 - position} />
        <RangeInput
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <Thumb style={{ left: `calc(${position}% - 10px)` }}>{value}</Thumb>
      </Slider>
    </RangeContainer>
  );
};

export default RangeInputSingle;
