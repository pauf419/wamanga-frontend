"use client";

import React from "react";
import { SkeletonWrapper, SwiperGridWrapper, SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import type { Comic } from "@/api/types/comic";
import { ComicPreviewSkeleton } from "../ComicPreviewSkeleton";

interface Props {
  titles: Comic[] | undefined;
}

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

const RecentSwiper = ({ titles }: Props) => {
  const isLoading = !titles;
  const visibleItems = isLoading ? Array.from({ length: 27 }) : titles;
  const chunks = chunkArray(visibleItems, 6);

  if (isLoading)
    return (
      <SkeletonWrapper>
        {chunks.map((chunk, index) => (
          <SwiperGridWrapper key={index}>
            {chunk.map((comic, idx) =>
              isLoading ? (
                <ComicPreviewSkeleton key={idx} />
              ) : (
                <ComicPreviewVertical
                  key={(comic as Comic).id}
                  comic={comic as Comic}
                />
              )
            )}
          </SwiperGridWrapper>
        ))}
      </SkeletonWrapper>
    );

  return (
    <Swiper type="vertical" buttons={false} bottomControlls padding={0}>
      {chunks.map((chunk, index) => (
        <SwiperSlideSC key={index}>
          <SwiperGridWrapper>
            {chunk.map((comic, idx) => (
              <ComicPreviewVertical
                key={(comic as Comic).id}
                comic={comic as Comic}
              />
            ))}
          </SwiperGridWrapper>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};

export default RecentSwiper;
