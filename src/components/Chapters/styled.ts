"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const ChaptersWrapper = styled.div`
  display: grid;
  gap: 16px;
`;

export const ChaptersBlock = styled.div`
  display: block;
`;

export const List = styled(ChaptersBlock)`
  display: grid;
  gap: 24px;
`;

export const NoChaptersMessage = styled.div`
  display: grid;
  justify-items: center;
`;

export const NoImage = styled.img`
  height: 180px;

  @media (max-width: 500px) {
    width: 300px;
    object-fit: contain;
    max-height: 180px;
  }
`;

export const NoChaptersText = styled.div`
  padding: 16px 0;
  font-weight: 600;
  line-height: 1.5714;
`;

export const Tools = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const Searchbar = styled.input`
  box-sizing: content-box;
  display: block;
  width: 100%;
  min-width: 0;
  height: 1.4375em;
  padding: 8.5px 14px;
  margin: 0;
  font: inherit;
  color: currentcolor;
  letter-spacing: inherit;
  background: none;
  border: 0;
  border: 1px solid ${colors.chapterInputBorder};
  border-radius: 8px;
  outline: none;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
`;
