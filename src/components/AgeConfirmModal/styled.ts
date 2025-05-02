"use client";

import styled from "@emotion/styled";
import { ModalSC } from "../(auth)/Form/styled";

export const ModalSCBlurred = styled(ModalSC)`
  backdrop-filter: blur(12px);
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  justify-items: center;
  text-align: center;
`;

export const Title = styled.h2``;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

export const Main = styled.div`
  margin-top: 24px;
`;
