"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 424px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1054px;
  background: ${colors.gray};
  border-radius: 12px;
`;
