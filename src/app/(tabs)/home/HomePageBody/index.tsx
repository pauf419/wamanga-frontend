"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { HomePageResponse } from "@/api/user";
import { getHomePage, getProcessingMangas } from "@/api/user";
import type { ProcessingManga } from "@/api/types/comic";
import { AdsFrame } from "@/components/AdsFrame";
import { AdsFrameNames } from "@/api/types/settings";
import {
  Container,
  CategorySection,
  DayTopSection,
  NewsSection,
} from "../styled";
import { Section } from "../Section";

// 👇 динамически импортируем тяжелые Swiper-компоненты
const RecommendedSwiper = dynamic(() => import("../RecommendedSwiper"), {
  loading: () => <div style={{ height: 300 }}>Загрузка рекомендаций...</div>,
});

const RecentSwiper = dynamic(() => import("../RecentSwiper"), {
  loading: () => (
    <div style={{ height: 250 }}>Загрузка свежих обновлений...</div>
  ),
});

const ProcessingSwiper = dynamic(() => import("../ProcessingSwiper"), {
  loading: () => <div style={{ height: 250 }}>Загрузка продолжений...</div>,
});

const DayTopSwiper = dynamic(() => import("../DayTopSwiper"), {
  loading: () => <div style={{ height: 250 }}>Загрузка топа за день...</div>,
});

const CategoriesSwiper = dynamic(() => import("../CategoriesSwiper"), {
  loading: () => <div style={{ height: 250 }}>Загрузка рандома...</div>,
});

const LatestSwiper = dynamic(() => import("../LatestSwiper"), {
  loading: () => <div style={{ height: 250 }}>Загрузка новинок...</div>,
});

export const HomePageBody = () => {
  const [homePage, setHomePage] = useState<HomePageResponse>();
  const [processingMangas, setProcessingMangas] = useState<
    ProcessingManga[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const [home, processing] = await Promise.all([
        getHomePage(),
        getProcessingMangas(),
      ]);
      setHomePage(home);
      setProcessingMangas(processing);
    };

    fetchData();
  }, []);

  return (
    <>
      <RecommendedSwiper titles={homePage?.rec} />

      <Container>
        <AdsFrame frameName={AdsFrameNames.HomeTop} />

        <Section title="Свежие обновления" link="/">
          <RecentSwiper titles={homePage?.recently} />
        </Section>

        {processingMangas && processingMangas.length ? (
          <DayTopSection title="Продолжить чтение" link="/">
            <ProcessingSwiper titles={processingMangas} />
          </DayTopSection>
        ) : (
          <></>
        )}

        {homePage?.top && (
          <DayTopSection title="Топ за день" link="/">
            <DayTopSwiper titles={homePage.top} />
          </DayTopSection>
        )}

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
