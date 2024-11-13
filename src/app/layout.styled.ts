"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const LayoutSC = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100dvh;
  background: ${colors.background};
`;
