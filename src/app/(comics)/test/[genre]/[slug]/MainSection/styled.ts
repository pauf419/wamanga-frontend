"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 16px;

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
`;

export const Main = styled.div`
  display: grid;
  gap: 12px;
  align-content: start;
`;

export const Description = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5714;
  color: ${colors.text};
  white-space: pre-wrap;
  word-break: break-word;
`;

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
  font-weight: 700;
  color: ${colors.iconColor};
`;

export const InfoTagText = styled.span`
  font-size: 0.75rem;
  font-weight: 50;
  color: ${colors.text};
`;

export const InfoTagBadge = styled.span`
  width: fit-content;
  padding: 6px 10px;
  margin-top: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${colors.textPriamry};
  text-transform: uppercase;
  background: ${colors.textPriamry + convertOpacityToHex(10)};
  border-radius: 100px;
`;

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const InfoTagBadgeDefault = styled(InfoTagBadge)`
  color: ${colors.badgeLightColor};
  text-transform: none;
  background: ${colors.badgeLightBackground};
  border-radius: 12px;
  font-weight: 500;
`;

export const InfoTagTextField = styled.div`
  display: flex;
`;

export const ChapterCountWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;

export const ChaptersAvailable = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: ${colors.text};
`;

export const Separator = styled.span`
  font-weight: 600;
  line-height: 1.5;
  color: ${colors.iconColor};
`;

export const ChaptersTotal = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: ${colors.iconColor};
`;

export const CommentWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TranslatorTag = styled(InfoTag)`
  gap: 16px;
`;

export const ZeroSpacer = styled.div`
  margin-top: 16px;
`;

export const CommentsTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5555;
`;
