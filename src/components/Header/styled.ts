"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const HeaderSC = styled.div`

  position: sticky;
  top: 0;
  left: 0;
  z-index: ${zIndex.header};
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  background: ${colors.background + convertOpacityToHex(60)};
  backdrop-filter: blur(6px);
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: none;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 30px;
  font-size: 13px;
  font-weight: 500;
  line-height: 22.29px;
  color: ${colors.text};
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
