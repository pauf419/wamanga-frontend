"use client";

import React, { FC } from "react";
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
import { Comics } from "@/api/types/comics";

interface ComicPreviewProps {
    comic: Comics
}

export const ComicPreviewVertical: FC<ComicPreviewProps> = ({comic}) => {
  return (
    <SwiperComics>
        <ComicsPoster
            src={comic.imagePath ? comic.imagePath : `/test-1.webp`}
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
