"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { getByCategory } from "@/api/mocks/queries/use-get-by-category";
import { paginateTitles } from "@/api/title";
import type { Comic } from "@/api/types/comic";
import { SimpleSkeletonWrapper } from "../DayTopSwiper/styled";
import { ComicPreviewSkeleton } from "../ComicPreviewSkeleton";

interface Props {
  titles: Comic[] | undefined;
}

export const CategoriesSwiper = ({ titles }: Props) => {
  if (!titles)
    return (
      <SimpleSkeletonWrapper>
        {Array.from({ length: 9 }).map((el, index) => (
          <ComicPreviewSkeleton key={index} />
        ))}
      </SimpleSkeletonWrapper>
    );

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
