"use client";

import React from "react";
import { SimpleSkeletonWrapper, SwiperSlideSC } from "../DayTopSwiper/styled";
import { Swiper } from "../Swiper";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getDayTop } from "@/api/mocks/queries/use-get-day-top";
import type { Comic, ProcessingManga } from "@/api/types/comic";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { ProcessingMangaUnit } from "../ProcessingMangaUnit";
import { ProcessingMangaSkeleton } from "./ProcessingMangaSkeleton";

interface Props {
  titles: ProcessingManga[] | undefined;
}

const ProcessingSwiper = ({ titles }: Props) => {
  if (!titles) {
    return (
      <SimpleSkeletonWrapper>
        {Array.from({ length: 9 }).map((el, index) => (
          <ProcessingMangaSkeleton key={index} />
        ))}
      </SimpleSkeletonWrapper>
    );
  }

  if (titles && !titles.length) return <></>;

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

export default ProcessingSwiper;
