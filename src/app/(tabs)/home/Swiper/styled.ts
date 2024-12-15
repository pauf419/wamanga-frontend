"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
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

export const RecentSwiperSC = styled.div<{ $type: string }>`
  position: relative;

  ${(props) => {
    if(props.$type === "vertical") return `
      height: 350px;

      @media(max-width: 1200px) {
        height: 300px;
      }
    `
    if(props.$type === "horizontal") return `
      height: 160px;
    `

    if(props.$type === "large") return `
      height: 320px;
    `

    if(props.$type === "horizontal_ext") return `
      height: 230px;
    `
  }}
`;

export const SwiperSC = styled(Swiper)`
  height: 100%;

  padding-left: 60px;

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
  color: ${colors.text};
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
