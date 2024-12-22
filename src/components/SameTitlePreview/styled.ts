"use client";

import { Badge } from "@/app/comics/[slug]/styled";
import { colors } from "@/const";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Poster = styled.img`
  width: 70px;
  height: 100px;
  border-radius: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 8px 4px 8px 12px;
`;

export const TypeBadge = styled(Badge)`
  position: relative;
  top: 0;
  left: 0;
`;

export const Segment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled(Segment)`
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.div`
  display: -webkit-box;
  padding-right: 32px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${colors.badgeColor};
`;
