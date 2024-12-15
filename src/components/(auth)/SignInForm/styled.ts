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
  gap: 4px;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 0.75rem;
  color: ${colors.text};
`;

export const Action = styled.button`
  padding: 4px 5px;
  color: ${colors.primary};
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 8px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.primary + convertOpacityToHex(8)};
  }
`;

export const WithGoogle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34px;
  margin-top: 16px;
  cursor: pointer;
  border: 1px solid ${colors.textPriamry + convertOpacityToHex(50)};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.textPriamry + convertOpacityToHex(10)};
    border: 1px solid ${colors.textPriamry};
  }
`;

export const GoogleContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const GoogleIconSC = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const GoogleText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 0.875rem;
  font-weight: 550;
  color: ${colors.textPriamry};

  /* font-family: Arial, Helvetica, sans-serif; */
`;
