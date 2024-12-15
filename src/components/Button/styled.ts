"use client";

import { colors } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Link from "next/link";

export const PrimaryLinkSC = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 36px;
  font-size: 0.875rem;
  font-weight: 400px;
  color: ${colors.text};
  text-decoration: none;
  cursor: pointer;
  background: ${colors.primary};
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const PrimaryButtonSC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 36px;
  font-size: 0.875rem;
  font-weight: 400px;
  color: ${colors.text};
  cursor: pointer;
  background: ${colors.primary};
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;
