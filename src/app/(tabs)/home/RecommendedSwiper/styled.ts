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
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${colors.background + convertOpacityToHex(60)};
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  color: ${colors.text};

  &:hover {
    background: ${colors.background};
  }
`;

export const Arrows = styled.div`
  z-index: ${zIndex.popup};

  position: absolute;
  bottom: 80px;
  right: 20px;
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
  background: ${colors.primary};
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #111213 95%);
    backdrop-filter: blur(5px);
  }
`;

export const Comics = styled.div`
  z-index: ${zIndex.behindHeaderAboveBackground};

  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(80vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 0px 100px;
`;

export const Poster = styled(Image)`
  width: 250px;
  height: 350px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const Badges = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  padding: 0;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${colors.grayText};
  margin-top: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;
`;

export const OpenButton = styled(Link)`
  text-decoration: none;
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400px;
  font-size: 0.875rem;
  background: ${colors.primary};
  color: ${colors.text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0px 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const FavouriteButton = styled.button`
  padding: 8px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background: #8f96a33d;
  color: #8f96a3cc;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 35.61px;
  text-align: center;
`;
