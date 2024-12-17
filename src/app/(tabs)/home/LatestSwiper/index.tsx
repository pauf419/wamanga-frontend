"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getLatest } from "@/api/mocks/queries/use-get-latest";

export const LatestSwiper = () => {
  const { data } = getLatest();

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
