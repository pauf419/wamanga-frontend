"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import type { Comics } from "@/api/types/comics";

export const NewsSwiper = () => {
  return (
    <Swiper type="horizontal">
      {Array.from({ length: 14 }).map((_, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewMinimized
            comic={
              { imagePath: `/test-${((index - 1) % 3) + 1}.webp` } as Comics
            }
          />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
