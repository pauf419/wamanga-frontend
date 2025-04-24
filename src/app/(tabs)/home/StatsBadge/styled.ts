"use client";

import { colors } from "@/const/colors";
import styled from "@emotion/styled";

export const BadgeSC = styled.div`
  display: flex;
  gap: 4px;
  place-content: center center;
  align-items: center;
  height: 25px;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  background: ${colors.statsBadgeBackground};
  border-radius: 16px;
`;
