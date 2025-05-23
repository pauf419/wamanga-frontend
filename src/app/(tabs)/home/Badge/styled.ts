"use client";

import styled from "@emotion/styled";

export const BadgeSC = styled.div<{ $bgColor: string; $textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 22px;
  height: 24px;
  padding: 12px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.$textColor};
  text-transform: uppercase;
  background: ${(props) => props.$bgColor};
  border-radius: 100px;
`;
