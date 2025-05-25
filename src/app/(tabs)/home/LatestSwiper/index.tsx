"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getLatest } from "@/api/mocks/queries/use-get-latest";
import type { Comic } from "@/api/types/comic";
import { ComicPreviewVertical } from "../ComicPreviewVertical";

interface Props {
  titles: Comic[];
}

export const LatestSwiper = ({ titles }: Props) => {
  return (
    <Swiper type="vertical" buttons={false} bottomControlls padding={0}>
      {titles.map((comic, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewVertical comic={comic} />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
