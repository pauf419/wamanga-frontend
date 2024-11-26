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
  font-size: 1.125rem;
`;
