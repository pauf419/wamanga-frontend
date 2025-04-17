"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div<{ $active: boolean; $focus: boolean }>`
  position: relative;
  border: 1px solid rgba(143, 150, 163, 0.24);
  border-radius: 8px;
  display: grid;
  padding: 9px;
  transition: 0.2s all ease;
  width: 100%;

  ${(props) =>
    props.$active &&
    `
     ${Placeholder} {
      font-size: 12px;
      top: -8px;
     }
    `}
  ${(props) =>
    props.$focus &&
    `
    border-color: #fff;
    ${Placeholder} {
      font-size: 12px;
      top: -8px;
      color: #fff;
    }
    `}

  &:hover {
    border-color: #fff;
  }
`;

export const Placeholder = styled.label<{ $active: boolean }>`
  position: absolute;
  left: 13px;
  top: 13.5px;
  pointer-events: none;
  transition: 0.2s all ease;
  background: rgb(29, 30, 32);
  padding: 0 4px;
  color: rgb(94, 99, 110);

  ${(props) =>
    props.$active &&
    `
     font-size: 12px;
     top: -8px;
     color: #fff;
    `}
`;

export const InputElement = styled.input`
  display: inline;
  background: transparent;
  outline: none;
  padding: 7.5px 4px 7.5px 5px;
  border: none;
  color: #fff;
`;

export const InsideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DropdownWrapper = styled.div<{ $active: boolean }>`
  width: 260px;
  position: absolute;
  top: 100%;
  z-index: 20;
  left: 0;
  background-color: rgba(29, 30, 32, 0.8);
  backdrop-filter: blur(6px);
  padding: 8px 0px;
  border-radius: 12px;
  transform: scale(0);
  transition: 0.2s all ease;
  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;
  ${(props) =>
    props.$active &&
    `
            transform: scale(1)
        `};
`;

export const PanelElement = styled.div<{ $selected: boolean }>`
  cursor: pointer;
  transition: 0.2s all ease;

  ${(props) => props.$selected && "background: rgba(143, 150, 163, 0.16);"}

  &:hover {
    background: rgba(115, 118, 124, 0.16);
  }
`;

export const SelectedName = styled.div`
  padding-right: 32px;
  min-height: 1.4375em;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 8.5px 14px;
`;
