"use client";

import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  max-width: 250px;

  @media (max-width: 1200px) {
    max-width: 200px;
  }
`;
