"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";




export const Wrapper = styled.div`
  display: grid; 
  grid-template-columns: auto 350px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  background: ${colors.randomComicBackground};
  border-radius: 16px;

  @media(max-width: 900px) {
    grid-template-columns: auto;
  }


`

export const Content = styled.div`
    display: grid; 
    justify-items: start;
    padding: 32px;

`

export const Title = styled.h1`
    line-height: 1.5;
    font-weight: 700;
    margin-block-end: 8px;

`

export const PrimaryColor = styled.span`
    color: ${colors.primary}
`

export const RandomBtn = styled.button`
    background: #5A5EE714;
    padding: 12px 78px;
    color: ${colors.textPriamry};
    font-size: 15px;
    font-weight: 700;
    outline: none;
    border-radius: 8px;
    border: none;
    margin-bottom: 32px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media(max-width: 900px) {
        width: 100%;
    }

    &:hover {
        background: ${colors.randomBtnBackgroundHover};
    }
`

export const Bg = styled.div` 
    position: relative; 
    width: 100%;
    height: 100%;
`

export const BgImage = styled.img`
    position: absolute;
    width: 140%;
    left: -25%;
    top: 10%;
    transform: rotateY(180deg);
`

