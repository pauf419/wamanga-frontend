"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { getByCategory } from "@/api/mocks/queries/use-get-by-category";
import { paginateTitles } from "@/api/title";
import type { Comic } from "@/api/types/comic";

interface Props {
  titles: Comic[];
}

export const CategoriesSwiper = ({ titles }: Props) => {
  return (
    <Swiper type="vertical">
      {titles.map((comic, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewVertical comic={comic} />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
