"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div<{ $active: boolean }>`
  position: relative;
  border: 1px solid rgb(94, 99, 110);
  border-radius: 8px;
  display: grid;
  padding: 9px;
  transition: 0.2s all ease;

  ${(props) =>
    props.$active &&
    `
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

export const Placeholder = styled.label`
  position: absolute;
  left: 13px;
  top: 13.5px;
  pointer-events: none;
  transition: 0.2s all ease;
  background: rgb(29, 30, 32);
  padding: 0 4px;
  color: rgb(94, 99, 110);
`;

export const Input = styled.input`
  display: inline;
  background: transparent;
  outline: none;
  padding: 7.5px 4px 7.5px 5px;
  border: none;
  color: #fff;
`;

export const DropdownWrapper = styled.div<{ $active: boolean }>`
  position: fixed;
  background: #1a1c1e;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.46) 0px 8px 16px 0px;
  padding: 9px;
  display: none;
  gap: 5px;
  overflow-y: auto;
  z-index: 99;
`;

export const InsideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InsideWrapperSelected = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DropdownSelect = styled.button<{ $selected: boolean }>`
  background: transparent;
  color: #fff;
  border: none;
  padding: 9px 12px;
  font-size: 1.0125rem;
  text-align: start;
  transition: 0.2s all ease;
  border-radius: 9px;

  ${(props) =>
    props.$selected &&
    `
      background: rgba(90, 94, 231, .2);
    `}
  &:hover {
    ${(props) =>
      props.$selected
        ? `
      background: rgba(90, 94, 231, .4);
    `
        : "background: rgba(143, 150, 163, 0.16);"}
  }
`;
