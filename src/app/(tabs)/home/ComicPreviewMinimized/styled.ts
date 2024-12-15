"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";


export const SwiperComics = styled.div<{$nested: boolean}>`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  background-color: ${(props) => props.$nested ? colors.nestedComicBackground : "transparent"}
`;

export const ComicsInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 4px 8px 12px;
`;

export const ComicsTitle = styled.h3`
  font-size: 1rem;
  max-width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  max-height: calc(1.2rem * 2);
`;

export const ComicsType = styled.p`
  font-size: 0.75rem;
  color: ${colors.iconColor};
`;

export const ComicsStatus = styled.p`
  margin-top: auto;
  font-size: 0.75rem;
  font-weight: 550;
  background: rgba(143, 150, 163, 0.16);
  padding: 8px;
  border-radius: 40px;
  width: fit-content;
  text-transform: uppercase;
`;

export const ComicsPoster = styled(Image)`
  width: 120px;
  height: 100%;
  border-radius: 12px;
  user-select: none;
  -webkit-user-drag: none;
`;

