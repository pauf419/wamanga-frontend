"use client";
import { convertOpacityToHex } from "@/utils";

import { colors, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const SidebarMobileSC = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.aboveEverything};
  display: grid;
  gap: 4px;
  align-content: start;
  width: 280px;
  height: 100%;
  padding: 0 16px;
  background: ${colors.sidebarMobileBackground};
  backdrop-filter: blur(5px);
  box-shadow: ${colors.sidebarMobileShadow};
  transition: all 0.2s ease-in-out;
  transform: ${(props) =>
    props.$active ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const LogoSegment = styled.div`
  display: grid;
  padding: 50px 0 16px;
`;

export const LogoSC = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0 8px;
`;

export const Blurer = styled.div<{ $active: boolean; $notadaptive: boolean }>`
  position: fixed;
  top: 0;
  z-index: ${zIndex.blurer};
  width: 100%;
  height: 100%;
  visibility: hidden;
  background: ${colors.sidebarMobileBlurerBackground};
  opacity: 0;
  transition: all 0.2s ease-in-out;

  ${(props) => props.$active && "visibility: visible;opacity:1;"}

  ${(props) =>
    !props.$notadaptive &&
    `  @media(min-width: 1200px) {
    display: none;
  }`}
`;

export const ButtonOutline = styled.div`
  width: 100%;
  padding: 16px 20px;
  margin-top: 50px;
  background: rgb(143 150 163 / 12%);
  border-radius: 12px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22.29px;
  color: ${colors.text};
  color: rgb(29 30 32);
  text-align: center;
  cursor: pointer;
  background: ${colors.textPriamry};
  border: none;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const Navigation = styled.div`
  box-sizing: border-box;
  padding: 24px 16px 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: ${colors.sidebarMobileNavigation};
  list-style: none;
`;
