"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { getRecent } from "@/api/mocks/queries/use-get-recent";

export const RecentSwiper = () => {
  const { data } = getRecent();

  return (
    <Swiper type="vertical">
      {data.map((comic, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewVertical comic={comic} />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
