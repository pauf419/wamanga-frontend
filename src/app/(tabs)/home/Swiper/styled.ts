"use client";

import { colors, sizes, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  transform: translateY(-50%);

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
    if (props.$type === "vertical")
      return css`
        height: 350px;

        @media (max-width: 1200px) {
          height: 300px;
        }
      `;
    if (props.$type === "horizontal")
      return css`
        height: 160px;
      `;

    if (props.$type === "large")
      return css`
        height: 320px;
      `;

    if (props.$type === "horizontal_ext")
      return css`
        height: 230px;
      `;
    if (props.$type === "auto")
      return css`
        height: auto;
      `;
  }}
`;

interface SwiperProps {
  padding?: number;
  $buttonMargin?: number;
}

export const SwiperSC = styled(Swiper)<SwiperProps>`
  height: 100%;
  padding-left: ${({ padding: $padding }) => $padding}px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${zIndex.behindHeaderAboveBackground};
    width: 20px;
    height: 100%;
    content: "";
    ${({ padding: $padding }) =>
      $padding === 1
        ? "background: transparent;"
        : `    background: linear-gradient(
      270deg,
      rgb(0 0 0 / 0%) 0%,
      ${colors.background} 100%
    );`}
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    z-index: ${zIndex.behindHeaderAboveBackground};
    width: 100px;
    height: 100%;
    content: "";
    ${({ padding: $padding }) =>
      $padding === 1
        ? "background: transparent;"
        : `    background: linear-gradient(
      90deg,
      rgb(0 0 0 / 0%) 0%,
      ${colors.background} 100%
    );`}
  }
`;

export const SwipeButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: ${zIndex.popup};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.swiperButtonHeight}px;
  height: ${sizes.swiperButtonHeight}px;
  color: ${colors.text};
  cursor: pointer;
  background: ${colors.background + convertOpacityToHex(60)};
  border: none;
  border-radius: 100%;
  transition: background 0.2s ease-in-out;
  transform: translateY(-50%);

  &:hover {
    background: ${colors.background};
  }
`;

export const CustomSwipeButton = styled(SwipeButton)<{ $margin: number }>`
  margin-top: ${(props) => props.$margin}px;
`;

export const LeftSwipeButton = styled(CustomSwipeButton)`
  left: 0;

  & svg {
    transform: rotate(180deg);
  }
`;

export const RightSwipeButton = styled(CustomSwipeButton)`
  right: 0;
`;
