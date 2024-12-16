"use client";

import React from "react";
import type { FC } from "react";
import {
  ComicInfo,
  ComicPoster,
  ComicStatus,
  ComicTitle,
  ComicType,
  SwiperComic,
} from "./styled";
import StatsBadge, { Icon } from "../StatsBadge";
import { StatsBadges } from "../styled";
import type { Comic } from "@/api/types/comic";

interface ComicPreviewProps {
  nested?: boolean;
  comic: Comic;
}

export const ComicPreviewMinimized: FC<ComicPreviewProps> = ({
  nested = false,
  comic,
}) => {

  if(!comic || !comic.name) return <h1>NoComic</h1>

  return (
    <SwiperComic $nested={nested}>
      <ComicPoster
        src={comic.imagePath ? comic.imagePath : "/test-1.webp"}
        alt="Comic"
        width={200}
        height={350}
      />
      <ComicInfo>
        <ComicTitle>{comic.name}</ComicTitle>
        <ComicType>{comic.typeComic}</ComicType>
        <StatsBadges>
          <StatsBadge icon={Icon.LIKE} amount={comic.likes} />
          <StatsBadge icon={Icon.VIEW} amount={comic.views} />
        </StatsBadges>
        <ComicStatus>{comic.status}</ComicStatus>
      </ComicInfo>
    </SwiperComic>
  );
};
