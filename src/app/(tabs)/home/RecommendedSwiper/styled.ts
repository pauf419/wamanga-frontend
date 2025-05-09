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
`;

export const SwieprSlideSC = styled(SwiperSlide)`
  height: 80vh;
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

export const Background = styled.div<{ $backgroundImage: string }>`
  z-index: ${zIndex.background};
  width: 100%;
  height: 80vh;
  padding-top: 80px;
  background: #111213;
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

  @media (max-width: 900px) {
    padding: 64px 24px;
  }

  @media (max-width: 600px) {
    display: grid;
    gap: 0;
    padding: 50px 16px;
    justify-items: start;
    justify-content: start;
    align-content: end;
  }
`;

export const AdaptivePosterHolder = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

export const Poster = styled(Image)`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 900px) {
    width: 170px;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 150px;
    height: auto;
  }
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

export const BadgesAdaptive = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: grid;
    gap: 8px;
    align-content: end;
    justify-items: start;
  }
`;

export const BadgesAdaptiveMinus = styled(Badges)`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  margin-top: 8px;

  @media (max-width: 900px) {
    font-size: 1.625rem;
  }
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  color: ${colors.grayText};
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
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
