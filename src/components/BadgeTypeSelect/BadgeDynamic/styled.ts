"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 3px;
  max-width: calc(100% - 6px);
  background-color: rgba(143, 150, 163, 0.16);
  font-size: 0.8125rem;
  border-radius: 16px;
  white-space: nowrap;
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const WrapperContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 12px;
  padding-right: 12px;
  white-space: nowrap;
`;

export const WrapperButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
`;

export const Icon = styled.svg`
  -webkit-tap-highlight-color: transparent;
  fill: rgba(255, 255, 255, 0.26);
  font-size: 22px;
  cursor: pointer;
  margin: 0px 5px 0px -6px;
  width: 20px;
  height: 20px;
  display: block;
`;
