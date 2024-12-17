"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getDayTop } from "@/api/mocks/queries/use-get-day-top";

export const DayTopSwiper = () => {
  const { data } = getDayTop();

  return (
    <Swiper type="horizontal">
      {data.map((comic, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewMinimized comic={comic} />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
