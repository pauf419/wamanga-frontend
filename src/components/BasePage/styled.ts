"use client";

import { colors, sizes } from "@/const";
import styled from "@emotion/styled";

export const BasePageSC = styled.div`
  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: relative;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  color: ${colors.text};
  background: ${colors.background};
  animation: opacity 0.2s ease-in-out;
`;

export const Content = styled.div<{ $isImageBehind: boolean }>``;
