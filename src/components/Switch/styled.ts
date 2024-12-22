import styled from "@emotion/styled";
import { colors } from "@/const";

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  display: flex;
  width: 33px;
  height: 20px;
  cursor: pointer;
  transition: 0.1s all ease;
`;

export const Slider = styled.span`
  position: absolute;
  inset: 0;
  cursor: pointer;
  background-color: ${colors.switchInactiveBackground};
  border-radius: 34px;
  transition: 0.1s all ease;

  &::before {
    position: absolute;
    bottom: 3px;
    left: 4px;
    width: 14px;
    height: 14px;
    content: "";
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

export const Checkbox = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${Slider} {
    background-color: ${colors.switchActiveBackground};
  }

  &:checked + ${Slider}::before {
    transform: translateX(11px);
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${colors.switchActiveBackground};
  }
`;

export const Placeholder = styled.div`
  margin-left: 45px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5714;
  user-select: none;
`;
