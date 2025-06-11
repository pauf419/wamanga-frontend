"use client";

import React from "react";
import { SwiperSlideSC } from "../LatestSwiper/styled";
import { Swiper } from "../Swiper";
import type { Comic } from "@/api/types/comic";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import type { Team } from "@/api/types/team";
import { ComicTranslatorMinimized } from "@/components/ComicTranslatorMinimized";
import { SimpleSkeletonWrapper } from "../DayTopSwiper/styled";
import { ProcessingMangaSkeleton } from "../ProcessingSwiper/ProcessingMangaSkeleton";

interface Props {
  teams: Team[] | undefined;
}

export const TeamsLeaderboardSwiper = ({ teams }: Props) => {
  if (!teams) {
    return (
      <SimpleSkeletonWrapper>
        {Array.from({ length: 9 }).map((el, index) => (
          <ProcessingMangaSkeleton key={index} />
        ))}
      </SimpleSkeletonWrapper>
    );
  }

  if (teams && !teams.length) return <></>;
  return (
    <Swiper type="vertical" buttons={false} bottomControlls padding={0}>
      {teams.map((team, index) => (
        <SwiperSlideSC key={index} style={{ height: "auto" }}>
          <ComicTranslatorMinimized
            translator={team}
            preview
            leaderboardIndex={index + 1}
          />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
