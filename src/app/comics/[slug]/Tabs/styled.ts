"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const TabsSC = styled.div<{
  $activeTab: number;
  $tabsCount: number;
  $activeTabWidth: number;
  $marginLeft: number;
  $gap: number;
}>`
  width: fit-content;
  position: relative;
  display: flex;
  box-sizing: border-box;
  isolation: isolate;
  height: 30px;
  gap: ${(props) => props.$gap}px;

  &::after {
    z-index: -1;
    border-radius: inherit;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => props.$activeTabWidth}px;
    height: 2px;
    transform: translateX(${(props) => props.$marginLeft}px);
    background: ${colors.primary};

    transition: all 0.15s ease-in-out;
  }
`;

export const Tab = styled.div<{ $isActive: boolean; $width: number }>`
  width: ${(props) => props.$width}px;
  height: 100%;
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: 550;
  color: ${(props) => (props.$isActive ? colors.text : colors.iconColor)};

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  user-select: none;
  -webkit-user-select: none;

  white-space: nowrap;
  text-align: center;
`;
