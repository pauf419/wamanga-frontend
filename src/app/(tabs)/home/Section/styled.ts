"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Link from "next/link";

export const SectionSC = styled.div`
  margin: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const SectionTitleText = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const MoreButton = styled(Link)`
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${colors.primary};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.primary + convertOpacityToHex(8)};
  }
`;
