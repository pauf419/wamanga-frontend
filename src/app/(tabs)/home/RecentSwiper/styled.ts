"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwiperManga = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const MangaInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0) 80%
  );
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
`;

export const MangaTitle = styled.h3`
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

export const MangaType = styled.p`
  font-size: 0.75rem;
  color: ${colors.iconColor};
`;

export const MangaStatus = styled.p`
  margin-top: 12px;
  font-size: 0.75rem;
  font-weight: 550;
  background: rgba(143, 150, 163, 0.16);
  padding: 8px;
  border-radius: 40px;
  width: fit-content;
  text-transform: uppercase;
`;

export const MangaPoster = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  user-select: none;
  -webkit-user-drag: none;
`;
