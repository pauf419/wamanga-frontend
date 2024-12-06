"use client";

import BasePage from "@/components/BasePage";
import { colors } from "@/const";
import styled from "@emotion/styled";

export const ComicsPageSC = styled(BasePage)`
  position: relative;
  height: 100vh;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 8px;
  color: ${colors.text};
  transition: background 0.2s ease-in-out;
  padding: 6px 8px;
  cursor: pointer;

  &:hover {
    background: rgba(90, 94, 231, 0.08);
  }
`;

export const BackText = styled.span`
  font-size: 14px;
  font-weight: 550;
  line-height: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
`;
