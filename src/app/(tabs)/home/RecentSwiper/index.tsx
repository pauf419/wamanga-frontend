"use client";

import React from "react";
import {
  SwiperSlideSC,
} from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { Comics } from "@/api/types/comics";

export const RecentSwiper = () => {
  return (
    <Swiper type="vertical">
      {Array.from({ length: 14 }).map((_, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewVertical comic={{imagePath: `/test-${((index - 1) % 3) + 1}.webp`} as Comics}/>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
