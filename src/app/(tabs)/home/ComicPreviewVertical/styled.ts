"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const ExtendedInfoWrapper = styled.div`
  height: 0;
  opacity: 0;
  transition: 0.2s all ease;
  display: flex;
  gap: 12px;
`;

export const ExtendedInfoUnit = styled.div`
  display: flex;
  gap: 7px;
  height: 20px;
  align-items: center;
  font-size: 13px;
  font-weight: 700;

  svg {
    color: #5a5ee7;
    height: 18px;
    width: 18px;
    display: block;
  }
`;

export const Separator = styled.div`
  margin-top: 2px;
`;

export const ComicTitle = styled.h3`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  max-height: calc(1.2rem * 2);
  overflow: hidden;
  font-size: 1.05rem;
  line-height: 1.2rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  word-break: break-word;
  transition: 0.2s all ease;
`;

export const SwiperComic = styled.div<{ $adaptive: boolean }>`
  position: relative;
  width: 188px;
  height: 260px;
  border-radius: 12px;
  overflow: hidden;

  ${(props) => props.$adaptive && "width: 100%!important; height: 265px;"}

  @media (max-width: 1200px) {
    height: 270px;
  }

  @media (max-width: 900px) {
    width: 156px;
    height: 230px;
  }

  &:hover {
    ${ExtendedInfoWrapper} {
      height: 20px;
      opacity: 1;
      margin-top: 7px;
    }
  }
`;

export const ComicInfo = styled.div<{ $isExtended: boolean }>`
  cursor: pointer;
  position: absolute;
  ${(props) =>
    props.$isExtended
      ? `
     bottom: 40px;`
      : "bottom: 0;"}

  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 180px;
  padding: 14px;
  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0%) 0%,
    rgb(0 0 0 / 80%) 50%,
    rgb(0 0 0) 80%
  );
  border-radius: 11px;
`;

export const ComicInfoTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const StatsBlock = styled.div`
  position: absolute;
  left: 14px;
  top: 14px;
  display: grid;
  gap: 6px;
  justify-items: start;
`;

export const PegiBadge = styled.div`
  background: #e35151;
  color: #fff;
  font-weight: 700;
  padding: 0px 5px;
  height: 20px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  border-radius: 100px;
  gap: 1px;
`;

export const PegiPlus = styled.div`
  font-size: 19px;
`;

export const ComicType = styled.p`
  font-size: 0.75rem;
  color: #fff;
`;

export const ComicStatus = styled.p`
  width: fit-content;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  background: rgb(0 0 0 / 59%);
  border-radius: 40px;
`;

export const ComicPoster = styled(Image)<{ $isExtended: boolean }>`
  width: 100%;
  ${(props) =>
    props.$isExtended ? "height: calc(100% - 40px);" : "height: 100%;"}
  object-fit: cover;
  user-select: none;
  border-radius: 12px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  -webkit-user-drag: none;
  cursor: pointer;
  display: block;
`;

export const ComicNewChapters = styled.div`
  display: grid;
  gap: 4px;
`;

export const NewChaptersTitle = styled.div`
  font-size: 12px;
`;

export const NewChapters = styled.div<{ $single: boolean }>`
  display: grid;
  ${(props) =>
    props.$single
      ? "grid-template-columns: auto;"
      : "grid-template-columns: auto auto;"}
  gap: 12px;
  margin-top: 12px;
`;

export const NewChapterBadge = styled.div`
  background: #5a5ee7;
  color: #fff;
  font-weight: 700;
  padding: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.2s all ease;
  height: 28px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 900px) {
    font-size: 13px;
  }
`;
