"use client";

import React from "react";
import { SwiperSlideSC } from "../DayTopSwiper/styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getDayTop } from "@/api/mocks/queries/use-get-day-top";
import type { Comic, ProcessingManga } from "@/api/types/comic";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { ProcessingMangaUnit } from "../ProcessingMangaUnit";

interface Props {
  titles: ProcessingManga[];
}

export const ProcessingSwiper = ({ titles }: Props) => {
  return (
    <Swiper type="vertical" buttons={false} bottomControlls padding={0}>
      {titles.map((title, index) => (
        <SwiperSlideSC key={index}>
          <ProcessingMangaUnit title={title} />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
