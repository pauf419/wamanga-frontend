"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getDayTop } from "@/api/mocks/queries/use-get-day-top";
import type { Comic } from "@/api/types/comic";

interface Props {
  titles: Comic[];
}

export const DayTopSwiper = ({ titles }: Props) => {
  return (
    <Swiper type="horizontal">
      {titles.map((comic, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewMinimized comic={comic} />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
