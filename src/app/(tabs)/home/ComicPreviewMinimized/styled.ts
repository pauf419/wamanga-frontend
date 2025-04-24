"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const SwiperComic = styled.div<{ $nested: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.$nested ? colors.nestedComicBackground : "transparent"};
  border-radius: 12px;
  overflow: hidden;
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px 4px 8px 12px;
  position: relative;
`;

export const PopoverButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-align: center;
  font-size: 1.5rem;
  color: rgb(143, 150, 163);
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  background-color: rgba(17, 18, 19, 0.6);
  outline: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  margin: 0px;
  text-decoration: none;
  flex: 0 0 auto;
  border-radius: 50%;
  transition: all 0.2s ease;
  padding: 4px;

  svg {
    width: 16px;
    height: 16px;
    color: #fff;
    transition: 0.2s all ease;
  }

  &:hover {
    padding: 20px;
    top: -6px;
    right: -6px;

    svg {
      transform: scale(1.3);
    }
  }
`;

export const ComicTitle = styled.h3`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  max-height: calc(1.2rem * 2);
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.2rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
`;

export const ComicType = styled.p`
  font-size: 0.75rem;
  color: ${colors.iconColor};
`;

export const ComicStatus = styled.p`
  width: fit-content;
  padding: 8px 12px;
  margin-top: auto;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  background: rgb(143 150 163 / 16%);
  border-radius: 40px;
`;

export const ComicPoster = styled(Image)`
  cursor: pointer;
  width: 120px;
  height: 100%;
  user-select: none;
  border-radius: 12px;
  -webkit-user-drag: none;
  cursor: pointer;
`;
