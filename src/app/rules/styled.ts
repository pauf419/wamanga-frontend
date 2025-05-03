"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";

export const Background = styled.div`
  position: relative;
  z-index: ${zIndex.background};
  width: 100%;
  padding-top: 80px;
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zIndex.behindHeaderAboveBackground};
  padding: 48px 64px;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 3;
  font-size: 4rem;
  mix-blend-mode: overlay;
  opacity: 1;
`;

export const BlockDetail = styled.h3`
  font-weight: 700;
`;

export const Description = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;

  justify-content: flex-start;
  position: relative;
`;

export const Icon = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const DescriptionText = styled.p`
  font-size: 1.25rem;
  color: ${colors.grayText};
  font-weight: 700;
  mix-blend-mode: overlay;
  opacity: 0.9;
`;

export const ImageSpacer = styled.div`
  max-width: 512px;
  width: 100%;
  height: 512px;
`;

export const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 260px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 16px;
  background-color: ${colors.gray + convertOpacityToHex(50)};
  border-radius: 16px;
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
  font-weight: 700;
  color: ${colors.grayText};
`;

export const RulesImage = styled(Image)`
  width: auto;
  margin-top: -35px;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const ListWrapper = styled.div`
  display: grid;
  gap: 8px;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 4px;

  span {
    min-width: 12px;
    font-weight: bold;
  }
`;

export const RawContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: grid;
  gap: 12px;
`;
