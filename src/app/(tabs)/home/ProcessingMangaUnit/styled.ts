"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";

export const UnitWrapper = styled.div`
  background: #18191b;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
`;

export const UnitHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 18px;
  padding: 12px;
`;

export const UnitPoster = styled.img`
  width: 75px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;

export const UnitInfo = styled.div`
  display: grid;
  align-content: space-around;
  min-width: 190px;
  min-width: 180px;
  height: 100%;
`;

export const UnitName = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const UnitStats = styled.div`
  color: #9da0f7;
`;

export const UnitProgressBarWrapper = styled.div`
  background: #9da0f7;
  width: 100%;
  display: flex;

  height: 16px;
`;

export const UnitProgressBarIdentifier = styled.div`
  background: #5a5ee7;
  height: 16px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  font-size: 13px;
`;
