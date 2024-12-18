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

export const RouteSC = styled.a<{ $mobile: boolean }>`
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
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.2s all ease-in-out;

  ${(props) =>
    props.$mobile &&
    `
    max-height: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 12px;
    display: grid;
    align-items: center;
    grid-template-columns: 40px auto;
    border-radius: 8px;
  `}

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

export const Left = styled.div<{ $mobile: boolean }>`
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
    fill: ${colors.iconColor};
    transition: all 0.2s ease-in-out;
  }

  ${SidebarTabSC}:hover & path {
    fill: ${colors.text};
  }
`;

export const Right = styled.div<{ $active: boolean; $mobile: boolean }>`
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  align-items: center;
  height: 100%;
  ${(props) =>
    props.$mobile &&
    ` 
    svg {
      transition: .2s all ease-in-out;
      transform: ${props.$active ? "rotateZ(-90deg)" : "rotateZ(90deg)"};
    }
    `}

  ${SidebarTabSC} & path {
    stroke: ${colors.iconColor};
  }

  ${SidebarTabSC}:hover & path {
    stroke: ${colors.text};
  }
`;

export const Dropdown = styled.div<{ $active: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: ${(props) => (props.$active ? "0" : "-150%")};
  width: 100%;
  transition: 0.2s all ease-in-out;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  min-width: auto;
  height: 24px;
  margin-right: 16px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;

export const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: rgb(94 99 110);
  border-radius: 50%;
`;
export const AfterDotText = styled.div`
  display: block;
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5714;
  text-overflow: ellipsis;
  white-space: break-spaces;
  white-space: nowrap;
`;
