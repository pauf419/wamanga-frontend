"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  &.left-button {
    left: 10px;
  }

  &.right-button {
    right: 10px;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${colors.primary};
  }
`;

export const RecentSwiperSC = styled.div`
  position: relative;
  height: 350px;
`;

export const SwiperSC = styled(Swiper)`
  height: 100%;

  &:before {
    z-index: ${zIndex.behindHeaderAboveBackground};

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      ${colors.background} 100%
    );
  }

  &:after {
    z-index: ${zIndex.behindHeaderAboveBackground};

    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      ${colors.background} 100%
    );
  }
`;

export const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Manga = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0) 80%
  );
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  max-width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  max-height: calc(1.2rem * 2);
`;

export const Type = styled.p`
  font-size: 0.75rem;
  color: ${colors.grayText};
`;

export const Status = styled.p`
  margin-top: 12px;
  font-size: 0.75rem;
  font-weight: 550;
  background: rgba(143, 150, 163, 0.16);
  padding: 8px;
  border-radius: 40px;
  width: fit-content;
  text-transform: uppercase;
`;

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  user-select: none;
  -webkit-user-drag: none;
`;

export const SwipeButton = styled.button`
  z-index: ${zIndex.popup};

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.background + convertOpacityToHex(60)};
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.background};
  }
`;

export const LeftSwipeButton = styled(SwipeButton)`
  left: 0;

  & svg {
    transform: rotate(180deg);
  }
`;

export const RightSwipeButton = styled(SwipeButton)`
  right: 0;
`;
