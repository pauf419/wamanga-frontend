"use client";

import React, { type FC } from "react";
import {
  UnitHeader,
  UnitInfo,
  UnitName,
  UnitPoster,
  UnitProgressBarIdentifier,
  UnitProgressBarWrapper,
  UnitStats,
  UnitWrapper,
} from "./styled";
import type { ProcessingManga } from "@/api/types/comic";
import { useRouter } from "next/navigation";

interface ComicPreviewProps {
  title: ProcessingManga;
}

export const ProcessingMangaUnit: FC<ComicPreviewProps> = ({ title }) => {
  const router = useRouter();

  const { chaptersCompleted, chaptersTotal } = title;
  const progressPercent =
    chaptersTotal > 0
      ? Math.round((chaptersCompleted / chaptersTotal) * 100)
      : 0;

  return (
    <UnitWrapper
      onClick={() =>
        router.push(`/${title.manga.seoGenre}/${title.manga.alternativeName}`)
      }
    >
      <UnitHeader>
        <UnitPoster src={title.manga.imagePath} />
        <UnitInfo>
          <UnitName>{title.manga.name}</UnitName>
          <UnitStats>
            Глава {chaptersCompleted} из {chaptersTotal}
          </UnitStats>
        </UnitInfo>
      </UnitHeader>

      <UnitProgressBarWrapper>
        <UnitProgressBarIdentifier style={{ minWidth: `${progressPercent}%` }}>
          {progressPercent}%
        </UnitProgressBarIdentifier>
      </UnitProgressBarWrapper>
    </UnitWrapper>
  );
};
