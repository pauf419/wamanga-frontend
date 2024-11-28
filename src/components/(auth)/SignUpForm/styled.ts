"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { motion } from "motion/react";

export const ModalSC = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 500px;
  background: ${colors.gray};
  color: ${colors.text};
  border-radius: 16px;
  padding: 24px;
  width: 400px;
  height: 420px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 24px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  outline: none;
  height: 56px;
  padding: 16.5px 14px;
  border-radius: 8px;
  border: 1px solid #8f96a352;
  background: none;
  color: ${colors.text};
  font-size: 1rem;
  font-weight: 250;

  &::placeholder {
    color: #5e636e;
  }
`;
