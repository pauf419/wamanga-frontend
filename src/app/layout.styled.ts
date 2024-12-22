"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const LayoutSC = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  background: ${colors.background};

  @media (max-width: 1200px) {
    grid-template-columns: auto;
  }
`;
