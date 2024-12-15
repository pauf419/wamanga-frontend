"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const SidebarTabSC = styled.a<{ $isActive?: boolean; $mobile: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$mobile ? "48px" : "54px")};
  font-size: 12px;
  line-height: 16px;
  color: ${colors.iconColor};
  color: ${(props) => props.$isActive && colors.textPriamry};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: ${(props) =>
    props.$isActive && colors.primary + convertOpacityToHex(16)};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => (props.$isActive ? colors.textPriamry : colors.text)};
    background: ${(props) =>
      props.$isActive
        ? colors.primary + convertOpacityToHex(16)
        : colors.iconColor + convertOpacityToHex(16)};
  }
`;

export const Left = styled.div<{ $isActive?: boolean; $mobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  width: 100%;

  ${(props) =>
    props.$mobile &&
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
    `}

  ${SidebarTabSC} & path {
    fill: ${(props) => props.$isActive && colors.textPriamry};
    transition: all 0.2s ease-in-out;
  }

  ${SidebarTabSC}:hover & path {
    fill: ${(props) => (props.$isActive ? colors.textPriamry : colors.text)};
  }
`;

export const Right = styled.div<{ $isActive?: boolean }>`
  position: absolute;
  top: 0;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${SidebarTabSC} & path {
    stroke: ${(props) => props.$isActive && colors.textPriamry};
  }

  ${SidebarTabSC}:hover & path {
    stroke: ${(props) => (props.$isActive ? colors.textPriamry : colors.text)};
  }
`;
