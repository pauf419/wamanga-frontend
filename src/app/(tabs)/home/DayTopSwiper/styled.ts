"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 424px;
  border-radius: 12px;
`;

export const SimpleSkeletonWrapper = styled.div`
  display: flex;
  width: 2000px;
  gap: 12px;
`;
