"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Link from "next/link";

export const PrimaryLinkSC = styled(Link)`
  text-decoration: none;
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400px;
  font-size: 0.875rem;
  background: ${colors.primary};
  color: ${colors.text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0px 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const PrimaryButtonSC = styled.button`
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400px;
  font-size: 0.875rem;
  background: ${colors.primary};
  color: ${colors.text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0px 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;
