
"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

export const SwiperHolder = styled.div` 
    position: absolute;
    height: 220px;
    width: 100%
`

export const SwiperSlideSC = styled(SwiperSlide)<{$background: string}>`
    height: 175px;
    max-width: 310px;
    border-radius: 12px;
    background: ${colors.gray};
    background: url(${(props) => props.$background});
    background-size: cover;
    margin-top: auto;
    transition: all 0.2s ease-in-out;
    poosition: relative;

    &:hover {
        transform: translate(-0.2rem, -0.5rem) rotate(2deg);
    }
`;

export const Content = styled.a`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: rgba(0,0, 0, .3);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    text-decoration: none;
`

export const ComicType = styled.div`    
    font-size: 15px;
    font-size: 22px;
    font-weight: 700;
    margin-left: 20px;
    color: #fff;
`

export const ComicIcon = styled.img`
    position: absolute;
    height: 215px;
    right: 0%;
    bottom: 0;
`;
