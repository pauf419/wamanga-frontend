"use client";

import { LevelStat } from "@/app/user/styled";
import styled from "@emotion/styled";
import Link from "next/link";

export const ReaderPageWrapper = styled.div`
  display: grid;
  color: #fff;
  overflow-y: hidden;
  border-left: 1px dashed rgba(143, 150, 163, 0.24);

  @media (max-width: 1200px) {
    border-left: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
  margin-top: 64px;
  overflow-y: auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 26px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  flex-direction: column;
`;

export const InfoBlockTranslator = styled(InfoBlock)`
  max-width: 360px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ChaptersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 60px;

  @media (max-width: 650px) {
    justify-content: center;
    gap: 16px;
  }
`;

export const ReaderMain = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  align-items: center;
  position: relative;
`;

export const ReaderTapButtonsWrapper = styled.div<{ $width: number }>`
  max-width: ${(props) => (props.$width ? props.$width : 900)}px;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;

  margin-right: 83px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

export const ReaderTapLink = styled(Link)`
  flex: 1;
  width: 100%;
`;

export const ReaderNoChapter = styled.div`
  flex: 1;
  width: 100%;
`;

export const ReaderContentImage = styled.img<{ $width: number }>`
  display: block;
  transition: 0.2s all ease;
  max-width: ${(props) => (props.$width ? props.$width : 900)}px;
  width: 100%;
  margin-right: 83px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

export const HidesWhenMobile = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;

export const DisplaysWhenMobile = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`;

export const PageIndicator = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Indicator = styled(LevelStat)`
  display: flex;
  align-items: center;
  gap: 4px;

  div {
    font-size: 17px;
    font-weight: 700;
    line-height: 0;
  }

  span {
    font-size: 16px;
    font-family: monospace;
    line-height: 1.3;
  }
`;

export const ReaderButton = styled(Link)`
  position: relative;
  text-decoration: none;
  display: block;
  font-size: 14px;
  color: #fff;
  padding: 10px 16px;
  background: #11121399;
  color: #fff;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  border: 1px dashed rgba(143, 150, 163, 0.24);
  border-radius: 6px;
`;

export const ReaderButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  display: flex;
  width: calc(100% - 83px);
  justify-content: center;
  padding: 16px;
  min-height: 38px;

  ${ReaderButton} {
    margin-right: 83px;
  }

  @media (max-width: 1200px) {
    width: 100%;

    ${ReaderButton} {
      margin-right: 0px;
    }
  }
`;

export const ReaderButtonClose = styled.button`
  background: red;
  position: absolute;
  top: -12px;
  right: -12px;
  width: 20px;
  height: 20px;
  background: #11121399;
  color: #fff;
  font-weight: 700;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  border: 1px dashed rgba(143, 150, 163, 0.24);
  border-radius: 100px;
  transition: 0.2s all ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 650px) {
    right: 12px;
  }
`;

export const AdsFrameWrapper = styled.div`
  margin-right: 83px;

  @media (max-width: 1200px) {
    margin-right: 0px;
  }
`;
