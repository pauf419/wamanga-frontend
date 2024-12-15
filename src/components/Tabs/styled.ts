"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const TabsSC = styled.div<{
  $activeTabWidth: number;
  $marginLeft: number;
  $gap: number;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  gap: ${(props) => props.$gap}px;
  width: fit-content;
  height: 30px;
  isolation: isolate;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: ${(props) => props.$activeTabWidth}px;
    height: 2px;
    content: "";
    background: ${colors.primary};
    border-radius: inherit;
    transition: all 0.15s ease-in-out;
    transform: translateX(${(props) => props.$marginLeft}px);
  }
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  font-size: 13px;
  font-weight: 550;
  color: ${(props) => (props.$isActive ? colors.text : colors.iconColor)};
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;
