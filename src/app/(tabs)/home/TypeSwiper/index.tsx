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
import SmallComic from "@assets/images/types/small.png?url";
import { sizes } from "@/const";

export const TypeSwiper = () => {
  const swiperButtonMargin =
    (sizes.typesSectionHeight - sizes.typeSliderHeight) / 2;
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
      icon: SmallComic,
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
      <Swiper
        type="horizontal_ext"
        buttonMargin={swiperButtonMargin}
        padding={0}
        props={{
          breakpoints: {
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        }}
      >
        {types.map((type, index) => (
          <SwiperSlideSC key={index} background={type.background}>
            <Content href="/type">
              <ComicType>{type.value}</ComicType>
              <ComicIcon
                src={type.icon}
                alt={type.value || "type"}
                width={200}
                height={300}
              />
            </Content>
          </SwiperSlideSC>
        ))}
      </Swiper>
    </SwiperHolder>
  );
};
