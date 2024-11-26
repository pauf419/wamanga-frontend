import { colors, sizes, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
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
  max-height: 100dvh;
  width: 100%;
  overflow: auto;
  animation: opacity 0.2s ease-in-out;
  color: ${colors.text};
  background: ${colors.background};
`;

export const Content = styled.div<{ $isImageBehind: boolean }>`
  margin-top: ${(props) => (props.$isImageBehind ? -sizes.headerHeight : 0)}px;
`;
