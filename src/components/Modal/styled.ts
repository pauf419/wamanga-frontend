"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { motion } from "motion/react";

export const ModalSC = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 60%);
`;

export const ModalContent = styled(motion.div)`
  overflow-y: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  max-height: 90dvh;
  padding: 24px;
  color: ${colors.text};
  background: ${colors.gray};
  border-radius: 16px;

  @media (max-width: 950px) {
    width: calc(100% - 42px);
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  height: 56px;
  padding: 16.5px 14px;
  font-size: 1rem;
  font-weight: 250;
  color: ${colors.text};
  background: none;
  border: 1px solid #8f96a352;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #5e636e;
  }
`;

export const CloseBlock = styled.div`
  margin-top: 12px;
  display: grid;
  width: 100%;
  justify-content: end;
`;

export const ModalAction = styled.div``;
