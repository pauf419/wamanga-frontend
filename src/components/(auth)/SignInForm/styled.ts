"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.span`
  color: ${colors.text};
  font-size: 0.75rem;
`;

export const Action = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  padding: 4px 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.primary + convertOpacityToHex(8)};
  }
`;

export const WithGoogle = styled.div`
  margin-top: 16px;
  height: 36px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.textPriamry + convertOpacityToHex(50)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.textPriamry + convertOpacityToHex(10)};
    border: 1px solid ${colors.textPriamry};
  }
`;

export const GoogleContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const GoogleIconSC = styled(Image)`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoogleText = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 550;
  color: ${colors.textPriamry};
  /* font-family: Arial, Helvetica, sans-serif; */
`;
