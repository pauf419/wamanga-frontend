"use client";

import { sizes, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const SidebarSC = styled.div`
  z-index: ${zIndex.aboveEverything};
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${sizes.sidebarWidth}px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  margin-right: 2px;
`;

export const LogoSC = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4px;
  height: 50px;
  margin-left: 2px;
  margin-top: 6px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 6px 0px;
`;
