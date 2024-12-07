"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const MainSectionSC = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 16px;
`;

export const Left = styled.div``;

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${colors.grayText};
  white-space: pre-wrap;
`;

export const Right = styled.div``;

export const InfoTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const InfoTagTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 550;
  color: ${colors.iconColor};
`;

export const InfoTagText = styled.span`
  font-size: 0.75rem;
  font-weight: 550;
  color: ${colors.text};
`;

export const InfoTagBadge = styled.span`
  width: fit-content;
  font-size: 0.75rem;
  font-weight: 550;
  color: ${colors.textPriamry};
  background: ${colors.textPriamry + convertOpacityToHex(10)};
  border-radius: 8px;
  padding: 6px;
  text-transform: uppercase;
`;
