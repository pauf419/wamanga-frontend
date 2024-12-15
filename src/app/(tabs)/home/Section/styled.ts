"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Link from "next/link";

export const SectionSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 12px 24px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const SectionTitleText = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const MoreButton = styled(Link)`
  padding: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.primary};
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.primary + convertOpacityToHex(8)};
  }
`;
