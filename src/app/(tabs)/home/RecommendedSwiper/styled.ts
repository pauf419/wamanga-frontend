"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

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

export const RecentSwiperSC = styled.div`
  position: relative;
`;

export const SwiperSC = styled(Swiper)`
  height: 80vh;
  background: blue;
`;

export const SwieprSlideSC = styled(SwiperSlide)`
  height: 80vh;
  background: red;
`;

export const SwipeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${colors.text};
  cursor: pointer;
  background: ${colors.background + convertOpacityToHex(60)};
  border: none;
  border-radius: 100%;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.background};
  }
`;

export const Arrows = styled.div`

  position: absolute;
  right: 20px;
  bottom: 80px;
  z-index: ${zIndex.popup};
  display: flex;
  gap: 8px;
`;

export const LeftSwipeButton = styled(SwipeButton)`
  & svg {
    transform: rotate(180deg);
  }
`;

export const RightSwipeButton = styled(SwipeButton)``;

export const Background = styled.div<{ $backgroundImage: string }>`
  z-index: ${zIndex.background};
  width: 100%;
  height: 80vh;
  padding-top: 80px;
  background: ${colors.primary};
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    content: "";
    background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, #111213 95%);
    backdrop-filter: blur(5px);
  }
`;

export const Comics = styled.div`

  position: absolute;
  top: 80px;
  left: 0;
  z-index: ${zIndex.behindHeaderAboveBackground};
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(80vh - 80px);
  padding: 0 100px;
`;

export const Poster = styled(Image)`
  width: 250px;
  height: 350px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Badges = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  margin-top: 8px;
  font-size: 3rem;
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  color: ${colors.grayText};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;
`;

export const OpenButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 36px;
  margin-top: 12px;
  font-size: 0.875rem;
  font-weight: 400px;
  color: ${colors.text};
  text-decoration: none;
  cursor: pointer;
  background: ${colors.primary};
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const FavouriteButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 8px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 35.61px;
  color: #8f96a3cc;
  text-align: center;
  background: #8f96a33d;
  border: none;
  border-radius: 8px;
`;
