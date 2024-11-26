"use client";

import React from "react";
import {
  ComicsInfo,
  ComicsPoster,
  ComicsStatus,
  ComicsTitle,
  ComicsType,
  SwiperComics,
  SwiperSlideSC,
} from "./styled";
import { Swiper } from "../Swiper";

export const RecentSwiper = () => {
  return (
    <Swiper height={350}>
      {Array.from({ length: 15 }).map((_, index) => (
        <SwiperSlideSC key={index}>
          <SwiperComics>
            <ComicsPoster
              src={`/test-${((index - 1) % 3) + 1}.webp`}
              alt="comics"
              width={200}
              height={350}
            />
            <ComicsInfo>
              <ComicsTitle>Название</ComicsTitle>
              <ComicsType>Манхва</ComicsType>
              <ComicsStatus>Переводится</ComicsStatus>
            </ComicsInfo>
          </SwiperComics>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
