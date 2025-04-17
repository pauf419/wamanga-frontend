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

export const InputElement = styled.input`
  display: inline;
  background: transparent;
  outline: none;
  padding: 7.5px 4px 7.5px 5px;
  border: none;
  width: 100%;
  color: #fff;
`;

export const TextareaElement = styled.textarea`
  display: inline;
  background: transparent;
  outline: none;
  padding: 7.5px 4px 7.5px 5px;
  border: none;
  width: 100%;
  color: #fff;
  resize: none;
  height: 69px;
`;

export const InsideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
