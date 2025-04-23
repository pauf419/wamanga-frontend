"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const SwiperComic = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export const ComicInfo = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 180px;
  padding: 14px;
  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0%) 0%,
    rgb(0 0 0 / 80%) 50%,
    rgb(0 0 0) 80%
  );
  border-radius: 11px;
`;

export const ComicTitle = styled.h3`
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

export const ComicType = styled.p`
  font-size: 0.75rem;
  color: ${colors.iconColor};
`;

export const ComicStatus = styled.p`
  width: fit-content;
  padding: 8px;
  margin-top: 12px;
  font-size: 0.75rem;
  font-weight: 550;
  text-transform: uppercase;
  background: ${colors.comicPreviewVerticalStatusBackground};
  border-radius: 40px;
`;

export const ComicPoster = styled(Image)`
  width: 100%;
  height: 100%;
  min-height: 250px;
  object-fit: cover;
  user-select: none;
  border-radius: 12px;
  -webkit-user-drag: none;
  cursor: pointer;
`;
