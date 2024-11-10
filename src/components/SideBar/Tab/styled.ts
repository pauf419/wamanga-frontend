"use client";

import { colors } from "@/styles";
import styled from "@emotion/styled";

export const SidebarTabSC = styled.div`
  position: relative;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.iconColor};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.primary}28;
  }
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  ${SidebarTabSC}:hover & path {
    fill: ${colors.textPriamry};
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

  ${SidebarTabSC}:hover & path {
    stroke: ${colors.textPriamry};
  }
`;
