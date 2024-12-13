"use client";

import BasePage from "@/components/BasePage";
import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";

export const RulesPagesSC = styled(BasePage)`
  height: 100vh;
`;

export const Background = styled.div<{ $backgroundImage: string }>`
  z-index: ${zIndex.background};

  position: relative;
  width: 100%;
  height: 80vh;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      ${"#111213" + convertOpacityToHex(80)} 50%,
      #111213 80%
    );
    backdrop-filter: blur(5px);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zIndex.behindHeaderAboveBackground};
  padding: 48px 64px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  mix-blend-mode: overlay;
  opacity: 0.9;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Icon = styled(Image)`
  width: 100px;
  height: auto;
`;

export const DescriptionText = styled.p`
  font-size: 1.25rem;
  mix-blend-mode: overlay;
  opacity: 0.9;
  color: ${colors.grayText};
`;

export const Blocks = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Block = styled.div`
  width: 500px;
  border-radius: 16px;
  background-color: ${colors.gray + convertOpacityToHex(50)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const BlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BlockTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
`;

export const BlockDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${colors.grayText};
`;
