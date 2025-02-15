import styled from "@emotion/styled";

export const RangeContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 10px;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: #444;
  border-radius: 2px;
`;

export const RangeInput = styled.input`
  position: absolute;
  width: 100%;
  appearance: none;
  outline: none;
  background: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    appearance: none;
    position: relative;
    top: -6px;
    width: 16px;
    height: 16px;
    background: #625bff;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    transition: 0.2s all ease;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const Thumb = styled.div`
  position: absolute;
  top: -30px;
  background: #222;
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
`;

export const RangeTrack = styled.div<{ left: number; right: number }>`
  position: absolute;
  height: 2px;
  background: #625bff;
  border-radius: 2px;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
`;
