"use client";

import React from "react";
import {
  Bg,
  BgImage,
  Content,
  PrimaryColor,
  RandomBtn,
  Title,
  Wrapper,
} from "./styled";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { Comics } from "@/api/types/comics";

export const RandomComic = () => {

    const types = [
        {
            index: 0,
            value: "Манга",
            background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
            icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
        }, 
        {
            index: 1,
            value: "Манхва",
            background: "https://zenko.b-cdn.net/cover10.webp?optimizer=image&width=640&quality=40", 
            icon: "https://zenko.b-cdn.net/manhua-min.webp?optimizer=image&width=640&quality=90"
        }, 
        {
            index: 2,
            value: "Мальопис", 
            background: "https://zenko.b-cdn.net/cover12.webp?optimizer=image&width=640&quality=40",
            icon: "https://zenko.b-cdn.net/assets/images/manga-ua-zenko.webp?optimizer=image&width=640&quality=90"
        },
        {
            index: 3,
            value: "Вебкомикс",
            background: "https://zenko.b-cdn.net/cover13.webp?optimizer=image&width=640&quality=40",
            icon: "https://zenko.b-cdn.net/comics.webp?optimizer=image&width=640&quality=90"
        }, 
        {
            index: 4,
            value: "Другое",
            background: "https://zenko.b-cdn.net/cover9.webp?optimizer=image&width=640&quality=40",
            icon: "https://zenko.b-cdn.net/other.webp?optimizer=image&width=640&quality=90"
        }
    ]

    return ( 
        <Wrapper>
            <Content>
                <Title>Нажми на кнопку <PrimaryColor>"Рандом"</PrimaryColor> и появится случайный тайтл</Title>
                <RandomBtn>Рандом</RandomBtn>
                <ComicPreviewMinimized nested={true} comic={{} as Comics}/>
            </Content>
            <Bg>
                <BgImage src="/rules.png"/>
            </Bg>
        </Wrapper>
    )
};