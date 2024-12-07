"use client";

import BasePage from "@/components/BasePage";
import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const ComicsPageSC = styled(BasePage)`
  position: relative;
  height: 100vh;
`;

export const Background = styled.div<{ $backgroundImage: string }>`
  z-index: ${zIndex.background};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45vh;
  padding-top: 80px;

  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, #111213 95%);
  }
`;

export const Content = styled.div`
  padding: 80px 24px 0px 24px;

  z-index: ${zIndex.behindHeaderAboveBackground};

  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
`;

export const BackButton = styled(Link)`
  z-index: ${zIndex.behindHeaderAboveBackground};

  text-decoration: none;
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 8px;
  color: ${colors.text};
  transition: background 0.2s ease-in-out;
  padding: 6px 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: rgba(90, 94, 231, 0.08);
  }
`;

export const BackText = styled.span`
  font-weight: 550;
  line-height: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
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
  background: ${colors.orange};
  color: ${colors.background};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 550;
  padding: 4px;
  border-radius: 8px;
`;

export const ReadButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 8px;
  background: ${colors.primary};
  color: ${colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  font-weight: 550;
  cursor: pointer;
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
  width: 100%;
  height: 35px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  font-weight: 550;
  background: #8f96a33d;
  color: #8f96a3cc;
  cursor: not-allowed;
`;

export const Right = styled.div``;

export const Stats = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  gap: 12px;
`;

export const StatsBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border: none;
  width: fit-content;
  padding: 6px;
  background: ${colors.badgeBg};
  color: ${colors.badgeColor};
  font-size: 13px;
`;

export const StatsContent = styled.span`
  font-size: 13px;
  color: ${colors.text};
  font-weight: 550;
`;
