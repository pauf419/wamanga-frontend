"use client";

import React from "react";
import type { FC } from "react";
import {
  ComicsInfo,
  ComicsPoster,
  ComicsStatus,
  ComicsTitle,
  ComicsType,
  SwiperComics,
} from "./styled";
import StatsBadge, { Icon } from "../StatsBadge";
import { StatsBadges } from "../styled";
import type { Comics } from "@/api/types/comics";

interface ComicPreviewProps {
  nested?: boolean;
  comic: Comics;
}

export const ComicPreviewMinimized: FC<ComicPreviewProps> = ({
  nested = false,
  comic,
}) => {
  return (
    <SwiperComics $nested={nested}>
      <ComicsPoster
        src={comic.imagePath ? comic.imagePath : "/test-1.webp"}
        alt="comics"
        width={200}
        height={350}
      />
      <ComicsInfo>
        <ComicsTitle>Название</ComicsTitle>
        <ComicsType>Манхва</ComicsType>
        <StatsBadges>
          <StatsBadge icon={Icon.LIKE} amount={124451135} />
          <StatsBadge icon={Icon.VIEW} amount={586392} />
        </StatsBadges>
        <ComicsStatus>Переводится</ComicsStatus>
      </ComicsInfo>
    </SwiperComics>
  );
};
