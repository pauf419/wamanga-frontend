"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1054px;
  background: ${colors.gray};
  border-radius: 12px;
`;
