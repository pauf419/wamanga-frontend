"use client";

import React from "react";
import {
  ComicsInfo,
  ComicsPoster,
  ComicsStatus,
  ComicsTitle,
  ComicsType,
  SwiperComics,
  SwiperSlideSC,
} from "./styled";
import { Swiper } from "../Swiper";
import StatsBadge, { Icon } from "../StatsBadge";
import { StatsBadges } from "../styled";

export const DayTopSwiper = () => {
  return (
    <Swiper height={160}>
      {Array.from({ length: 15 }).map((_, index) => (
        <SwiperSlideSC key={index}>
          <SwiperComics>
            <ComicsPoster
              src={`/test-${((index - 1) % 3) + 1}.webp`}
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
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
