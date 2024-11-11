"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const SidebarSC = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.sideBarBackground};
  padding: 20px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LogoSC = styled(Image)`
  width: 100%;
  height: 50px;
  padding: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
