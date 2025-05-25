"use client";

import React from "react";
import { SwiperSlideSC } from "../LatestSwiper/styled";
import { Swiper } from "../Swiper";
import type { Comic } from "@/api/types/comic";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import type { Team } from "@/api/types/team";
import { ComicTranslatorMinimized } from "@/components/ComicTranslatorMinimized";

interface Props {
  teams: Team[];
}

export const TeamsLeaderboardSwiper = ({ teams }: Props) => {
  return (
    <Swiper type="vertical" buttons={false} bottomControlls padding={0}>
      {teams.map((team, index) => (
        <SwiperSlideSC key={index}>
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
