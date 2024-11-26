"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";

export const HeaderSC = styled.div`
  z-index: ${zIndex.header};

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${colors.background + convertOpacityToHex(60)};
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding: 0px 50px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background: ${colors.textPriamry};
  color: ${colors.text};
  font-family: Gilroy;
  font-size: 13px;
  font-weight: 500;
  line-height: 22.29px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0px 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;
