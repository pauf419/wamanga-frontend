"use client";

import { colors } from "@/styles";
import styled from "@emotion/styled";

export const SidebarTabSC = styled.div`
  height: 54px;
  display: flex;
  gap: 6px;
  flex-direction: column;
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
    color: ${colors.textPriamry};
    background: ${colors.primary}28;

    & svg path {
      fill: ${colors.textPriamry};
    }
  }
`;
