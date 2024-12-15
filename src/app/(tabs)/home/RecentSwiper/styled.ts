"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 200px;
  }
`;
