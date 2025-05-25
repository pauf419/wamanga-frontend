"use client";

import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 70px;
  height: 90px;
  cursor: pointer;
  width: 100% !important;
  margin-top: 8px;
  transition: 0.2s all ease;
  border: 1px dashed rgba(146, 146, 146, 0.44);
  border-radius: 12px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ChapterElement = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(29, 30, 32, 1);
  position: relative;
`;

export const ChapterIndex = styled.div`
  font-size: 21px;
  font-weight: 500;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 40%;
`;

export const ChapterP = styled.div`
  font-size: 14px;
  position: absolute;
  left: 50%;
  top: 66%;
  color: #929292;
  transform: translate(-50%, -50%);
`;
