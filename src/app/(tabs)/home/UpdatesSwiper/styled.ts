"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
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

export const Updates = styled.div<{ $background: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex.background};
  width: 100%;
  height: 100%;
  background: ${colors.background + convertOpacityToHex(60)};
  border-radius: 12px;
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zIndex.behindHeaderAboveBackground};
  height: 100%;
  padding: 24px;
`;

export const Tag = styled.div<{ $type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  margin: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) =>
    props.$type === "news" ? colors.red : colors.green};
  border-radius: 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
`;

export const Overview = styled.p`
  color: ${colors.grayText};
`;
