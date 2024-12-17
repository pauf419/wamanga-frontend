"use client";

import BasePage from "@/components/BasePage";
import { colors, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const ComicsPageSC = styled(BasePage)`
  position: relative;
  height: 100vh;
`;

export const Background = styled.div<{ $backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex.background};
  width: 100%;
  height: 45vh;
  padding-top: 80px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45vh;
    content: "";
    background: linear-gradient(180deg, rgb(0 0 0 / 50%) 0%, #111213 95%);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zIndex.behindHeaderAboveBackground};
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  padding: 80px 24px 0;
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: ${zIndex.behindHeaderAboveBackground};
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  font-size: 1rem;
  color: ${colors.text};
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 8px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgb(90 94 231 / 8%);
  }
`;

export const BackText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  font-weight: 550;
  line-height: 24px;
  text-align: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.grayText};
`;

export const Comics = styled.div`
  position: relative;
`;

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Badge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px;
  font-size: 12px;
  font-weight: 550;
  color: ${colors.background};
  text-transform: uppercase;
  background: ${colors.orange};
  border-radius: 8px;
`;

export const ReadButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  font-weight: 550;
  color: ${colors.text};
  cursor: pointer;
  background: ${colors.primary};
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: ${colors.hoverShadow};
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const FavouriteButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  font-weight: 550;
  color: #8f96a3cc;
  cursor: not-allowed;
  background: #8f96a33d;
  border: none;
  border-radius: 8px;
`;

export const Stats = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const StatsBadge = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 6px;
  font-size: 13px;
  color: ${colors.badgeColor};
  background: ${colors.badgeBg};
  border: none;
  border-radius: 16px;
`;

export const StatsContent = styled.span`
  font-size: 13px;
  font-weight: 550;
  color: ${colors.text};
`;
