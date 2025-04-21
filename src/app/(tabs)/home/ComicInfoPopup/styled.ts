"use client";

import { ChaptersAvailable } from "@/app/comics/[slug]/MainSection/styled";
import styled from "@emotion/styled";

export const PopupWrapper = styled.div`
  background: rgba(29, 30, 32, 0.9);
  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;
  backdrop-filter: blur(6px);
  color: #fff;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 16px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  min-height: max-content;
  padding: 24px 16px 16px;
  overflow: auto;
  transition: 0.5s;
  overscroll-behavior: contain;
  border-radius: 12px;

  h4 {
    margin: 0px;
    font-weight: 700;
    line-height: 1.57143;
    font-size: 0.875rem;
    color: rgb(143, 150, 163);
  }
`;

export const Flexbox = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const Gridbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GenreWrapper = styled.p`
  argin: 0px;
  line-height: 1.57143;
  font-size: 0.875rem;

  font-weight: 700;
`;

export const ChaptersCount = styled(ChaptersAvailable)`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: #ffffff;
  background: #5a5ee7;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const Description = styled.h4`
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
