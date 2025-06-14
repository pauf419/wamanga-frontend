"use client";

import { colors, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

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

  @media (max-width: 1200px) {
    background: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zIndex.behindHeaderAboveBackground};
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  max-width: 1536px;
  padding: 168px 24px 0;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: auto;
    padding: 64px 0 0;
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 105px;
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

export const EditButton = styled(BackButton)`
  left: auto;
  right: 24px;
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
  margin-bottom: 6px;
  font-size: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.grayText};
`;

export const Comics = styled.div`
  position: relative;
  display: grid;
`;

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 16px;

  @media (max-width: 1200px) {
    border-radius: 0;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.background};
  text-transform: uppercase;
  background: ${colors.orange};
  border-radius: 100px;
`;

export const ReadButton = styled(Link)`
  text-decoration: none;
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
  margin: 24px 0 19px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const StatsBadge = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 6px 10px;
  font-size: 13px;
  color: ${colors.badgeColor};
  background: ${colors.badgeBg};
  border: none;
  border-radius: 16px;

  @media (max-width: 1200px) {
    width: 100%;
    background: rgba(29, 30, 32, 0.94);
    gap: 8px;
  }
`;

export const StatsContent = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${colors.text};
`;

export const AdaptivePadding = styled.div`
  display: grid;
  gap: 8px;
  align-content: start;

  @media (max-width: 1200px) {
    padding: 0 16px;
  }
`;

export const MobileInfo = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  align-content: end;
  justify-items: start;
  width: 100%;
  height: 30%;
  padding: 0 24px;
  pointer-events: none;
  background: linear-gradient(
    to top,
    ${colors.background},
    rgb(0 0 0 / 70%) 40%,
    rgb(0 0 0 / 50%) 60%,
    rgb(0 0 0 / 0%)
  );
`;

export const MobileBadge = styled(Badge)`
  position: relative;
  top: 0;
  left: 0;
  margin-bottom: 6px;
`;

export const SameTitlesList = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 32px;
`;

export const ListTitle = styled.h6`
  font-size: 1.125rem;
`;

export const TitlesList = styled.div`
  display: grid;
  gap: 16px;
`;
