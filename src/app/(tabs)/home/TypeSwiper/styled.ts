"use client";

import { colors, sizes, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const SwiperHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 220px;
`;

export const SwiperSlideSC = styled(SwiperSlide)<{ $background: string }>`
  position: relative;
  min-width: 310px;
  height: ${sizes.typeSliderHeight}px;
  margin-top: auto;
  background: ${colors.gray};
  background: url(${(props) => props.$background});
  background-size: cover;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate(-0.2rem, -0.5rem) rotate(2deg);
  }

  @media (max-width: 360px) {
    min-width: 280px;
  }
`;

export const Content = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: rgb(0 0 0 / 30%);
  backdrop-filter: blur(3px);
  border-radius: 13px;
`;

export const ComicType = styled.div`
  margin-left: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const ComicIcon = styled(Image)`
  position: absolute;
  top: -30px;
  right: 0;
  z-index: ${zIndex.popup};
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
  transform: scale(1.2);

  @media (max-width: 360px) {
    transform: scale(1);
  }
`;
