"use client";

import React from "react";
import { SwiperGridWrapper, SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import type { Comic } from "@/api/types/comic";

interface Props {
  titles: Comic[];
}

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

export const RecentSwiper = ({ titles }: Props) => {
  const chunks = chunkArray(titles, 6);

  return (
    <Swiper type="vertical" buttons={false} bottomControlls padding={0}>
      {chunks.map((chunk, index) => (
        <SwiperSlideSC key={index}>
          <SwiperGridWrapper>
            {chunk.map((comic) => (
              <ComicPreviewVertical key={comic.id} comic={comic} />
            ))}
          </SwiperGridWrapper>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
