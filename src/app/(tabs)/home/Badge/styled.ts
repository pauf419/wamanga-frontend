"use client";

import styled from "@emotion/styled";

export const BadgeSC = styled.div<{ $bgColor: string; $textColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.$textColor};
  background: ${(props) => props.$bgColor};
  border-radius: 8px;
  height: 24px;
  width: auto;
  min-width: 22px;
  padding: 12px;
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;
