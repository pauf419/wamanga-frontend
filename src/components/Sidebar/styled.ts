"use client";

import { zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const SidebarSC = styled.div`
  z-index: ${zIndex.aboveEverything};
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LogoSC = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0 8px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
