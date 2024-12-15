"use client";
import { convertOpacityToHex } from "@/utils";

import { colors, sizes, zIndex } from "@/const";
import styled from "@emotion/styled";
import Image from "next/image";


export const SidebarMobileSC = styled.div<{$active: boolean}>`
    transition: all 0.2s ease-in-out;
    display: grid; 
    gap: 4px;
    align-content: start;
    background: rgba(29, 30, 32, 0.9);
    box-shadow: rgba(0, 0, 0, 0.24) -40px 40px 80px -8px;
    position: fixed;
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
    z-index: ${zIndex.aboveEverything};
    width: 280px;
    height: 100%;
    transform: ${(props) => props.$active ? "translateX(0)" : "translateX(-100%)"};
    padding: 0 16px;

    @media(min-width: 1200px) {
        display: none
    }
`

export const LogoSegment = styled.div`
    display: grid;
    padding: 50px 0px 16px;
`


export const LogoSC = styled(Image)`
  width: 100%;
  height: 50px;
  padding: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Blurer = styled.div<{$active: boolean}>` 
    transition: all 0.2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(29, 30, 32, 0.8);
    z-index: ${zIndex.blurer};
    visibility: hidden;
    opacity: 0;
    
    ${
        (props) => props.$active &&
        "visibility: visible;opacity:1;"
    }

    @media(min-width: 1200px) {
        display: none
    }
`

export const ButtonOutline = styled.div`
    border-radius: 12px;
    margin-top: 50px;
    background: rgba(143, 150, 163, 0.12);
    width: 100%;
    padding: 16px 20px;
`

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 8px;
  background: ${colors.textPriamry};
  color: ${colors.text};
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 700;
  line-height: 22.29px;
  text-align: center;
  color: rgb(29, 30, 32);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0px 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const Navigation = styled.div` 
    color: rgb(143, 150, 163);
    box-sizing: border-box;
    list-style: none;
    padding: 24px 16px 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 12px;
`