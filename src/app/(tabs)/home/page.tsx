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
  getRandomList,
  getRecentlyUpdated,
  getRecommendedTitles,
  paginateTitles,
} from "@/api/title";
import { getSession, getTokens } from "@/app/lib";
import { AdsFrame } from "@/components/AdsFrame";
import { AdsFrameNames } from "@/api/types/settings";
import { getTeamsLeaderboard } from "@/api/team";
import { TeamsLeaderboardSwiper } from "./TeamsLeaderboardSwiper";
import { getHomePage, getProcessingMangas } from "@/api/user";
import { ProcessingSwiper } from "./ProcessingSwiper";
import { HomePageBody } from "./HomePageBody";

const HomePage = async () => {
  /*const tokens = await getTokens();
  const homePageResponse = await getHomePage(tokens);
  const recommendedTitles = homePageResponse.rec;
  const recentlyUpdatedTitles = homePageResponse.recently;
  const dailyTopTitles = homePageResponse.top;
  const newsTitles = homePageResponse.topChupter;
  const randomTitles = homePageResponse.random;
  const teams = homePageResponse.team;
  const processingMangas = await getProcessingMangas(tokens);

  return (
    <BasePage isImageBehind>
      <RecommendedSwiper titles={recommendedTitles} />

      <Container>
        <AdsFrame frameName={AdsFrameNames.HomeTop} />
        {recentlyUpdatedTitles && (
          <Section title="Свежие обновления" link="/">
            <RecentSwiper titles={recentlyUpdatedTitles} />
          </Section>
        )}

        {processingMangas && processingMangas.length ? (
          <DayTopSection title="Продолжить чтение" link="/">
            <ProcessingSwiper titles={processingMangas} />
          </DayTopSection>
        ) : (
          <></>
        )}

        {dailyTopTitles && (
          <DayTopSection title="Топ за день" link="/">
            <DayTopSwiper titles={dailyTopTitles} />
          </DayTopSection>
        )}

        <Section title="Команды" link="/">
          <TeamsLeaderboardSwiper teams={teams} />
        </Section>

        <CategorySection title="Рандом" link="/">
          <CategoriesSwiper titles={randomTitles} />
        </CategorySection>

        <NewsSection title="Новинки 🔥" link="/">
          <LatestSwiper titles={newsTitles} />
        </NewsSection>
        <AdsFrame frameName={AdsFrameNames.HomeBottom} />
      </Container>
    </BasePage>
  );*/

  return (
    <BasePage>
      <HomePageBody />
    </BasePage>
  );
};

export default HomePage;
