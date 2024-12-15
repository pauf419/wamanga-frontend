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

export const RouteSC = styled.a<{$mobile: boolean}>`
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
  transition: .2s all ease-in-out;

  ${(props) => props.$mobile && `
    max-height: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 12px;
    display: grid;
    align-items: center;
    grid-template-columns: 40px auto;
  `}

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

export const Left = styled.div<{$mobile: boolean}>`
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
    fill: ${colors.iconColor};
  }

  ${SidebarTabSC}:hover & path {
    fill: ${colors.text};
  }
`;

export const Right = styled.div<{$active:boolean, $mobile: boolean}>`
  position: absolute;
  top: 0;
  right: 12px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.$mobile && 
    ` 
    svg {
      transition: .2s all ease-in-out;
      transform: ${props.$active ? "rotateZ(-90deg)" : "rotateZ(90deg)"};
    }
    `
  }

  ${SidebarTabSC} & path {
    stroke: ${colors.iconColor};
  }

  ${SidebarTabSC}:hover & path {
    stroke: ${colors.text};
  }
`;

export const Dropdown = styled.div<{$active:boolean}>` 
  position: absolute;
  top: calc(100% + 4px);
  left: ${(props) => props.$active ? "0" : "-150%"};
  width: 100%;
  transition: .2s all ease-in-out;
`

export const DotHolder = styled.div` 
  min-width: auto;
  margin-right: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`

export const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: rgb(94, 99, 110);
  border-radius: 50%;
`
export const AfterDotText = styled.div`
  white-space: break-spaces;
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`
