"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 424px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.gray};
  border-radius: 12px;
`;