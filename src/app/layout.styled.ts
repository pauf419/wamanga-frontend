"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const LayoutSC = styled.div`
  background: ${colors.background};
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
`;
