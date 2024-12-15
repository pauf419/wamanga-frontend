"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const SidebarTabSC = styled.a<{ $isActive?: boolean, $mobile: boolean}>`
  text-decoration: none;
  position: relative;
  height: ${(props) => props.$mobile ? "48px": "54px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.iconColor};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  color: ${(props) => props.$isActive && colors.textPriamry};
  background: ${(props) =>
    props.$isActive && colors.primary + convertOpacityToHex(16)};

  &:hover {
    color: ${(props) => (props.$isActive ? colors.textPriamry : colors.text)};
    background: ${(props) =>
      props.$isActive
        ? colors.primary + convertOpacityToHex(16)
        : colors.iconColor + convertOpacityToHex(16)};
  }
`;

export const Left = styled.div<{ $isActive?: boolean,  $mobile: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  ${
    (props) => props.$mobile && 
    `
    flex-direction: row;
    gap: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 12px;
    font-weight: 600;
    line-height: 1.57143;
    font-size: 0.875rem;
    `
  }

  ${SidebarTabSC} & path {
    transition: all 0.2s ease-in-out;
    fill: ${(props) => props.$isActive && colors.textPriamry};
  }

  ${SidebarTabSC}:hover & path {
    fill: ${(props) => (props.$isActive ? colors.textPriamry : colors.text)};
  }
`;

export const Right = styled.div<{ $isActive?: boolean }>`
  position: absolute;
  top: 0;
  right: 4px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${SidebarTabSC} & path {
    stroke: ${(props) => props.$isActive && colors.textPriamry};
  }

  ${SidebarTabSC}:hover & path {
    stroke: ${(props) => (props.$isActive ? colors.textPriamry : colors.text)};
  }
`;
