"use client";

import React from "react";
import { SimpleSkeletonWrapper, SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import type { Comic } from "@/api/types/comic";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { ComicPreviewSkeleton } from "../ComicPreviewSkeleton";

interface Props {
  titles: Comic[] | undefined;
}

const DayTopSwiper = ({ titles }: Props) => {
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

export default DayTopSwiper;
