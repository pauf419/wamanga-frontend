"use client";

import { StatsBadge } from "@/app/[genre]/[slug]/styled";
import { colors } from "@/const";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
  background-color: ${colors.commentsBlockBackground};
  border-radius: 16px;
  box-shadow: ${colors.commentsBlockShadow};
  cursor: pointer;
`;

export const Segment = styled.div`
  display: grid;
  gap: 4px;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5714;
  color: rgb(255 255 255);
  text-decoration: none;
`;

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 8px;
  }
`;

export const Download = styled.button`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0;
  font-size: 1.125rem;
  color: rgb(143 150 163);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  appearance: none;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border-color: initial;
  border-style: initial;
  border-width: 0;
  border-radius: 50%;
  border-image: initial;
  outline: 0;
  transition: 0.2s all ease;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(143, 150, 163, 0.08);
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const Badges = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 6px;
  }
`;

export const StatBadge = styled(StatsBadge)`
  padding: 0;
`;

export const StatIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Stat = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5714;
  color: ${colors.text};
`;

export const CreatedAt = styled.div`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.badgeColor};
  -webkit-box-align: center;
`;
