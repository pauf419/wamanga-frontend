"use client";

import { colors, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const RecentSwiperSC = styled.div`
  height: 350px;
`;

export const SwiperSC = styled(Swiper)`
  height: 100%;

  &:before {
    z-index: ${zIndex.behindHeaderAboveBackground};

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      ${colors.background} 100%
    );
  }

  &:after {
    z-index: ${zIndex.behindHeaderAboveBackground};

    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      ${colors.background} 100%
    );
  }
`;

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  user-select: none;
  -webkit-user-drag: none;
`;
