"use client";

import React from "react";

import { Swiper } from "../../../../(tabs)/home/Swiper";
import { getByCategory } from "@/api/mocks/queries/use-get-by-category";
import { ComicPreviewVertical } from "@/app/(tabs)/home/ComicPreviewVertical";
import {
  ChapterElement,
  ChapterIndex,
  ChapterP,
  SwiperSlideSC,
} from "./styled";
import type { Chapter } from "@/api/types/chapter";
import { useRouter } from "next/navigation";
import type { Comic } from "@/api/types/comic";
import Link from "next/link";

interface Props {
  manga: Comic;
  chapters: Chapter[];
}

export const NewChaptersSwiper = ({ chapters, manga }: Props) => {
  return (
    <Swiper
      padding={1}
      type="auto"
      buttons={false}
      bottomControlls={false}
      props={{
        spaceBetween: 10,
        loop: false,
        initialSlide: 0,
      }}
    >
      {chapters
        .sort((a, b) => b.numberChapter - a.numberChapter)
        .slice(0, 10)
        .map((chapter) => (
          <SwiperSlideSC key={chapter._id}>
            <Link
              href={`/${manga.seoGenre}/${manga.alternativeName}/${chapter.slug}`}
            >
              <ChapterElement>
                <ChapterIndex>{chapter.numberChapter}</ChapterIndex>
                <ChapterP>глава</ChapterP>
              </ChapterElement>
            </Link>
          </SwiperSlideSC>
        ))}
    </Swiper>
  );
};
