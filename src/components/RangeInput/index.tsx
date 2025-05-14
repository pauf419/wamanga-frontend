import React, { useState, useEffect } from "react";
import {
  RangeContainer,
  Slider,
  RangeTrack,
  RangeInput,
  Thumb,
} from "./styled";

interface Props {
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

const RangeSlider = ({ onMinChange, onMaxChange }: Props) => {
  const [min, setMin] = useState(1900);
  const [max, setMax] = useState(2025);
  const [minDebounced, setMinDebounced] = useState(min);
  const [maxDebounced, setMaxDebounced] = useState(max);

  const minLimit = 1900;
  const maxLimit = 2025;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - 1);
    setMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + 1);
    setMax(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMinDebounced(min);
      onMinChange(min);
    }, 300);

    return () => clearTimeout(timeout);
  }, [min]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMaxDebounced(max);
      onMaxChange(max);
    }, 300);

    return () => clearTimeout(timeout);
  }, [max]);

  const left = ((min - minLimit) / (maxLimit - minLimit)) * 100;
  const right = 100 - ((max - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <RangeContainer>
      <Slider>
        <RangeTrack left={left} right={right} />
        <RangeInput
          type="range"
          min={minLimit}
          max={maxLimit}
          value={min}
          onChange={handleMinChange}
        />
        <RangeInput
          type="range"
          min={minLimit}
          max={maxLimit}
          value={max}
          onChange={handleMaxChange}
        />
        <Thumb style={{ left: `calc(${left}% - 10px)` }}>{min}</Thumb>
        <Thumb style={{ left: `calc(${97 - right}% - 10px)` }}>{max}</Thumb>
      </Slider>
    </RangeContainer>
  );
};

export default RangeSlider;
