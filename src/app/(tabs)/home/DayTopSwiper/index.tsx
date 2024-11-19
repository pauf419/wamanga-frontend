"use client";

import React from "react";
import {
  MangaInfo,
  MangaPoster,
  MangaStatus,
  MangaTitle,
  MangaType,
  SwiperManga,
  SwiperSlideSC,
} from "./styled";
import { Swiper } from "../Swiper";
import { StatsBadges } from "../styled";
import StatsBadge, { Icon } from "../StatsBadge";

export const DayTopSwiper = () => {
  return (
    <Swiper height={160}>
      {Array.from({ length: 15 }).map((_, index) => (
        <SwiperSlideSC key={index}>
          <SwiperManga>
            <MangaPoster
              src={`/test-${((index - 1) % 3) + 1}.webp`}
              alt="manga"
              width={200}
              height={350}
            />
            <MangaInfo>
              <MangaTitle>Название</MangaTitle>
              <MangaType>Манхва</MangaType>
              <StatsBadges>
                <StatsBadge
                  icon={Icon.LIKE}
                  amount={Math.round(Math.random() * 1000000000)}
                />
                <StatsBadge
                  icon={Icon.VIEW}
                  amount={Math.round(Math.random() * 1000000000)}
                />
              </StatsBadges>
              <MangaStatus>Переводится</MangaStatus>
            </MangaInfo>
          </SwiperManga>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
