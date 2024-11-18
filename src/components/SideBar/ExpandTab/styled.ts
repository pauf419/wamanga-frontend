"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const RoutesWrapper = styled.div`
  --sidebar-width: 83px;
  --sidebar-padding: 8px;

  width: 250px;

  background: ${colors.background + convertOpacityToHex(60)};
  border-radius: 10px;
  backdrop-filter: blur(6px);
  padding: 6px;
`;

export const RouteSC = styled.a`
  text-decoration: none;

  max-height: 32px;
  position: relative;
  display: block;
  font-family: sans-serif;
  color: ${colors.iconColor};
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px;
  font-weight: 300;
  text-align: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background: ${colors.iconColor + convertOpacityToHex(15)};
    color: ${colors.text};
  }
`;

export const SidebarTabSC = styled.div`
  text-decoration: none;
  position: relative;
  height: 54px;
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

  &:hover {
    color: ${colors.text};
    background: ${colors.iconColor + convertOpacityToHex(16)};
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${SidebarTabSC} & path {
    stroke: ${colors.iconColor};
  }

  ${SidebarTabSC}:hover & path {
    stroke: ${colors.text};
  }
`;
