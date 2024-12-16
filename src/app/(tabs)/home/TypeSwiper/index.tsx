"use client";

import React from "react";
import {
  Content,
  SwiperSlideSC,
  ComicType,
  ComicIcon,
  SwiperHolder,
} from "./styled";
import { Swiper } from "../Swiper";

export const TypeSwiper = () => {

  // TODO: Убрать хардкод
  const types = [
    {
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манхва",
      background:
        "https://zenko.b-cdn.net/cover10.webp?optimizer=image&width=640&quality=40",
      icon: "https://zenko.b-cdn.net/manhua-min.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Мальопис",
      background:
        "https://zenko.b-cdn.net/cover12.webp?optimizer=image&width=640&quality=40",
      icon: "https://zenko.b-cdn.net/assets/images/manga-ua-zenko.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Вебкомикс",
      background:
        "https://zenko.b-cdn.net/cover13.webp?optimizer=image&width=640&quality=40",
      icon: "https://zenko.b-cdn.net/comics.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Другое",
      background:
        "https://zenko.b-cdn.net/cover9.webp?optimizer=image&width=640&quality=40",
      icon: "https://zenko.b-cdn.net/other.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Другое",
      background:
        "https://zenko.b-cdn.net/cover9.webp?optimizer=image&width=640&quality=40",
      icon: "https://zenko.b-cdn.net/other.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Другое",
      background:
        "https://zenko.b-cdn.net/cover9.webp?optimizer=image&width=640&quality=40",
      icon: "https://zenko.b-cdn.net/other.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манга",
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манга",
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манга",
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манга",
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манга",
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
    {
      value: "Манга",
      background:
        "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40",
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90",
    },
  ];

  return (
    <SwiperHolder>
      <Swiper type="horizontal_ext">
        {types.map((type, index) => (
          <SwiperSlideSC key={index} $background={type.background}>
            <Content href="/type">
              <ComicType>{type.value}</ComicType>
              <ComicIcon src={type.icon} />
            </Content>
          </SwiperSlideSC>
        ))}
      </Swiper>
    </SwiperHolder>
  );
};
