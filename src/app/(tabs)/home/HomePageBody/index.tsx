"use client";

import { useEffect, useState } from "react";
import { RecommendedSwiper } from "../RecommendedSwiper";
import {
  CategorySection,
  Container,
  DayTopSection,
  NewsSection,
} from "../styled";
import {
  getHomePage,
  getProcessingMangas,
  type HomePageResponse,
} from "@/api/user";
import type { Comic, ProcessingManga } from "@/api/types/comic";
import { AdsFrame } from "@/components/AdsFrame";
import { AdsFrameNames } from "@/api/types/settings";
import { Section } from "../Section";
import { RecentSwiper } from "../RecentSwiper";
import { ProcessingSwiper } from "../ProcessingSwiper";
import { DayTopSwiper } from "../DayTopSwiper";
import { TeamsLeaderboardSwiper } from "../TeamsLeaderboardSwiper";
import { CategoriesSwiper } from "../CategoriesSwiper";
import { LatestSwiper } from "../LatestSwiper";

export const HomePageBody = () => {
  const [homePage, setHomePage] = useState<HomePageResponse>();
  const [processingMangas, setProcessingMangas] = useState<ProcessingManga[]>();

  const fetchHomePage = async () => {
    const res = await getHomePage();
    setHomePage(res);
    const processing = await getProcessingMangas();
    setProcessingMangas(processing);
  };

  useEffect(() => {
    fetchHomePage();
  }, []);

  return (
    <>
      <RecommendedSwiper titles={homePage?.rec} />

      <Container>
        <AdsFrame frameName={AdsFrameNames.HomeTop} />

        <Section title="Свежие обновления" link="/">
          <RecentSwiper titles={homePage?.recently} />
        </Section>
        <DayTopSection title="Продолжить чтение" link="/">
          <ProcessingSwiper titles={processingMangas} />
        </DayTopSection>
        <DayTopSection title="Топ за день" link="/">
          <DayTopSwiper titles={homePage?.top} />
        </DayTopSection>

        <Section title="Команды" link="/">
          <TeamsLeaderboardSwiper teams={homePage?.team} />
        </Section>

        <CategorySection title="Рандом" link="/">
          <CategoriesSwiper titles={homePage?.random} />
        </CategorySection>

        <NewsSection title="Новинки 🔥" link="/">
          <LatestSwiper titles={homePage?.topChupter} />
        </NewsSection>
        <AdsFrame frameName={AdsFrameNames.HomeBottom} />
      </Container>
    </>
  );
};
