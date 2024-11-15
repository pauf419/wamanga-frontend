"use client";

import BasePage from "@/components/BasePage";
import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";

export const HomeSC = styled(BasePage)``;

export const Background = styled.div<{ $backgroundImage: string }>`
  z-index: ${zIndex.background};

  width: 100%;
  height: 90vh;
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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #111213 90%,
      #111213 100%
    );
    backdrop-filter: blur(5px);
  }
`;

export const Manga = styled.div`
  z-index: ${zIndex.behindHeaderAboveBackground};

  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(90vh - 80px);
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

export const StatsBadges = styled(Badges)`
  margin-top: 10px;
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

export const OpenButton = styled.button`
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

export const Divider = styled.div`
  height: 100vh;
  background: ${colors.background};
`;
