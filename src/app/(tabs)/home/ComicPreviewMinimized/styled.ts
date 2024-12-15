"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";


export const SwiperComics = styled.div<{$nested: boolean}>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$nested ? colors.nestedComicBackground : "transparent"};
  border-radius: 12px
`;

export const ComicsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px 4px 8px 12px;
`;

export const ComicsTitle = styled.h3`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  max-height: calc(1.2rem * 2);
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.2rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
`;

export const ComicsType = styled.p`
  font-size: 0.75rem;
  color: ${colors.iconColor};
`;

export const ComicsStatus = styled.p`
  width: fit-content;
  padding: 8px;
  margin-top: auto;
  font-size: 0.75rem;
  font-weight: 550;
  text-transform: uppercase;
  background: rgb(143 150 163 / 16%);
  border-radius: 40px;
`;

export const ComicsPoster = styled(Image)`
  width: 120px;
  height: 100%;
  user-select: none;
  border-radius: 12px;
  -webkit-user-drag: none;
`;

