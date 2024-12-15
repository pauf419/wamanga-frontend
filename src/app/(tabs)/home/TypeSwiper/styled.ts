"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const SwiperHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 220px;
`;

export const SwiperSlideSC = styled(SwiperSlide)<{ $background: string }>`
  position: relative;
  max-width: 310px;
  height: 175px;
  margin-top: auto;
  background: ${colors.gray};
  background: url(${(props) => props.$background});
  background-size: cover;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate(-0.2rem, -0.5rem) rotate(2deg);
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
`;

export const ComicIcon = styled.img`
  position: absolute;
  right: 0%;
  bottom: 0;
  height: 215px;
`;
