"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 350px;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  overflow: visible;
  background: ${colors.randomComicBackground};
  border-radius: 16px;

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
`;

export const Content = styled.div`
  display: grid;
  justify-items: start;
  padding: 32px;
`;

export const Title = styled.h1`
  margin-block-end: 8px;
  font-weight: 700;
  line-height: 1.5;
`;

export const PrimaryColor = styled.span`
  color: ${colors.primary};
`;

export const RandomButton = styled.button`
  padding: 12px 78px;
  margin-bottom: 32px;
  font-size: 15px;
  font-weight: 700;
  color: ${colors.textPriamry};
  cursor: pointer;
  background: #5a5ee714;
  border: none;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.randomButtonBackgroundHover};
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  width: 140%;
  left: -25%;
  top: 5%;
  transform: rotateY(180deg);
`;
