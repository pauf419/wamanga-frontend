"use client";

import { colors, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const Wrapper = styled.div<{ $preview: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid rgb(143 150 163 / 24%);
  border-radius: 16px;
  -webkit-box-align: center;
  -webkit-box-pack: justify;

  ${(props) =>
    props.$preview &&
    `
    max-width: 300px;
    
    `}
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 114px;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: "";
    background: linear-gradient(
      360deg,
      rgb(17 18 19) 0%,
      rgb(17 18 19 / 0%) 100%
    );
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Avatar = styled.img`
  position: absolute;
  bottom: -16px;
  left: 24px;
  z-index: ${zIndex.behindHeaderAboveBackground};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;

export const PreviewStatsWrapper = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 6px;
`;

export const PreviewStat = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const PreviewStatKey = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const PreviewStatValue = styled.div``;

export const LeaderboardIndex = styled.div`
  font-size: 0.75rem;
  opacity: 0.6;
`;

export const Name = styled.a`
  margin: 0;
  font-size: 1rem;
  font-variation-settings: inherit;
  font-style: inherit;
  font-weight: 600;
  font-feature-settings: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-variant: inherit;
  font-size-adjust: inherit;
  font-stretch: inherit;
  line-height: 1.5;
  color: inherit;
  text-decoration: none;
  letter-spacing: inherit;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px 24px;
  word-break: break-all;
  background: ${colors.background};
`;

export const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5714;
  color: ${colors.iconColor};
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  word-break: break-word;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
`;

export const TranslatedOver = styled(Description)`
  display: block;
`;

export const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const IconLink = styled.a`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 4px;
  margin: 0;
  color: rgb(143 150 163);
  text-decoration: none;
  text-transform: none;
  letter-spacing: inherit;
  vertical-align: middle;
  appearance: none;
  cursor: pointer;
  user-select: none;
  background-color: rgb(29 30 32);
  border-color: currentcolor;
  border-style: initial;
  border-width: 0;
  border-radius: 8px;
  border-image: initial;
  outline: 0;
  box-shadow: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${colors.iconColor};
`;
