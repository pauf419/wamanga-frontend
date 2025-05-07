import React from "react";
import {
  DayTopSection,
  UpdatesSection,
  ComicTypeSection,
  RandomComicSection,
  NewsSection,
  CategorySection,
  Container,
} from "./styled";

import "swiper/css";
import "swiper/css/pagination";

import { Section } from "./Section";
import { RecentSwiper } from "./RecentSwiper";
import { DayTopSwiper } from "./DayTopSwiper";
import { UpdatesSwiper } from "./UpdatesSwiper";
import { RecommendedSwiper } from "./RecommendedSwiper";
import { RandomComic } from "./RandomComic";
import { TypeSwiper } from "./TypeSwiper";
import { LatestSwiper } from "./LatestSwiper";
import { CategoriesSwiper } from "./CategoriesSwiper";
import BasePage from "@/components/BasePage";
import {
  getDayTop,
  getNews,
  getRandom,
  getRecentlyUpdated,
  getRecommendedTitles,
  paginateTitles,
} from "@/api/title";
import { getSession } from "@/app/lib";
import { AdsFrame } from "@/components/AdsFrame";
import { AdsFrameNames } from "@/api/types/settings";

const HomePage = async () => {
  const recommendedTitles = await getRecommendedTitles();
  const recentlyUpdatedTitles = await getRecentlyUpdated();
  const dailyTopTitles = await getDayTop();
  const categoriesTitles = await paginateTitles(0, 10);
  const newsTitles = await getNews();
  const randomTitle = await getRandom();

  return (
    <BasePage isImageBehind>
      <RecommendedSwiper titles={recommendedTitles} />

      <Container>
        <AdsFrame frameName={AdsFrameNames.HomeTop} />
        {recentlyUpdatedTitles && (
          <Section title="Недавние обновления" link="/">
            <RecentSwiper titles={recentlyUpdatedTitles} />
          </Section>
        )}

        {dailyTopTitles && (
          <DayTopSection title="Топ за день" link="/">
            <DayTopSwiper titles={dailyTopTitles} />
          </DayTopSection>
        )}

        <CategorySection title="Категория" link="/">
          <CategoriesSwiper titles={categoriesTitles} />
        </CategorySection>

        <NewsSection title="Новинки 🔥" link="/">
          <LatestSwiper titles={newsTitles} />
        </NewsSection>
        <AdsFrame frameName={AdsFrameNames.HomeBottom} />
      </Container>
    </BasePage>
  );
};

export default HomePage;
