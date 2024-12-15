"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 1054px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.gray};
  border-radius: 12px;
`;

export const Updates = styled.div<{ $background: string }>`
  position: relative;
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const Background = styled.div`
  z-index: ${zIndex.background};

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${colors.background + convertOpacityToHex(60)};
  border-radius: 12px;
`;

export const Content = styled.div`
  z-index: ${zIndex.behindHeaderAboveBackground};

  position: relative;
  padding: 24px;
  height: 100%;
`;

export const Tag = styled.div<{ $type: string }>`
  position: absolute;
  top: 0;
  left: 0;

  margin: 24px;
  height: 24px;
  padding: 0px 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.$type === "news" ? colors.red : colors.green};
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h3``;

export const Overview = styled.p`
  color: ${colors.grayText};
`;

export const Button = styled(Link)`
  border: none;
  text-decoration: none;
  width: fit-content;
  height: 40px;
  padding: 6px 16px;
  margin-top: 12px;
  border-radius: 8px;
  background: ${colors.primary};
  color: ${colors.text};
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${colors.hoverShadow};
    background: ${colors.secondary};
  }
`;
