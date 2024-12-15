"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const RoutesWrapper = styled.div`
  --sidebar-width: 83px;
  --sidebar-padding: 8px;

  width: 250px;
  padding: 6px;
  background: ${colors.background + convertOpacityToHex(60)};
  backdrop-filter: blur(6px);
  border-radius: 10px;
`;

export const RouteSC = styled.a`
  position: relative;
  display: block;
  max-height: 32px;
  padding: 8px;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${colors.iconColor};
  text-align: start;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    color: ${colors.text};
    background: ${colors.iconColor + convertOpacityToHex(15)};
  }
`;

export const SidebarTabSC = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.iconColor};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.text};
    background: ${colors.iconColor + convertOpacityToHex(16)};
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  width: 100%;

  ${SidebarTabSC} & path {
    fill: ${colors.iconColor};
  }

  ${SidebarTabSC}:hover & path {
    fill: ${colors.text};
  }
`;

export const Right = styled.div`
  position: absolute;
  top: 0;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${SidebarTabSC} & path {
    stroke: ${colors.iconColor};
  }

  ${SidebarTabSC}:hover & path {
    stroke: ${colors.text};
  }
`;
