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
import { StatsBadges } from "../styled";
import StatsBadge from "../StatsBadge";

export const TypeSwiper = () => {
  // TODO: Убрать хардкод
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
    }, 
    {
        index: 5,
        value: "Другое",
        background: "https://zenko.b-cdn.net/cover9.webp?optimizer=image&width=640&quality=40",
        icon: "https://zenko.b-cdn.net/other.webp?optimizer=image&width=640&quality=90"
    }, 
    {
        index: 6,
        value: "Другое",
        background: "https://zenko.b-cdn.net/cover9.webp?optimizer=image&width=640&quality=40",
        icon: "https://zenko.b-cdn.net/other.webp?optimizer=image&width=640&quality=90"
    },
    {
      index: 7,
      value: "Манга",
      background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
  }, 
  ,
    {
      index: 8,
      value: "Манга",
      background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
  }, 
  ,
    {
      index: 9,
      value: "Манга",
      background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
  }, 
  ,
    {
      index: 10,
      value: "Манга",
      background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
  }, 
  ,
    {
      index: 11,
      value: "Манга",
      background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
  }, 
  ,
    {
      index: 12,
      value: "Манга",
      background: "https://zenko.b-cdn.net/cover8.webp?optimizer=image&width=360&quality=40", 
      icon: "https://zenko.b-cdn.net/homunculus-preview.webp?optimizer=image&width=640&quality=90"
  }, 
]

  return (
    <SwiperHolder>
      <Swiper type="horizontal_ext">
        {types.map((el, index) => (
          <SwiperSlideSC key={index} $background={el.background}>
              <Content href="/type">
                  <ComicType>
                      {el.value}
                  </ComicType>
                  <ComicIcon src={el.icon}/>
              </Content>
          </SwiperSlideSC>
        ))}
      </Swiper>
    </SwiperHolder>
  );
};
