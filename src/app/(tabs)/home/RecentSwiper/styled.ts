"use client";

import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  display: flex;
  align-items: center;
`;

export const SwiperGridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  gap: 12px;
  height: 100%;
  width: 100%;
`;

export const ScrollBarWrapper = styled.div`
  margin-top: 24px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ScrollBarBackground = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgb(29, 30, 32);
  border-radius: 2px;
  overflow: hidden;
`;

export const ScrollBarIndicator = styled.div<{ $width: number }>`
  height: 100%;
  background-color: rgb(90 94 231);
  transition: 0.4s all ease;
  width: ${(props) => props.$width}%;
`;
