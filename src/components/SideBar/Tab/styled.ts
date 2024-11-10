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
    color: ${colors.textPriamry};
    background: ${colors.primary}28;

    /* TODO: Change to a better way */
    & div:first-of-type path {
      fill: ${colors.textPriamry};
    }

    & div:last-of-type path {
      fill: none;
      stroke: ${colors.textPriamry};
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
