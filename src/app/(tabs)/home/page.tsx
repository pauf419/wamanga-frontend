"use client";

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
import { NewsSwiper } from "./NewsSwiper";
import { CategoriesSwiper } from "./CategoriesSwiper";
import BasePage from "@/components/BasePage";

const HomePage = () => {
  return (
    <BasePage isImageBehind>
      <RecommendedSwiper />

      <Container>
        <Section title="Недавние обновления" link="/">
          <RecentSwiper />
        </Section>

        <DayTopSection title="Топ за день" link="/">
          <DayTopSwiper />
        </DayTopSection>

        <UpdatesSection>
          <UpdatesSwiper />
        </UpdatesSection>

        <RandomComicSection>
          <RandomComic />
        </RandomComicSection>

        <ComicTypeSection title="Тип тайтла" link="/">
          <TypeSwiper />
        </ComicTypeSection>

        <CategorySection title="Категория" link="/">
          <CategoriesSwiper />
        </CategorySection>

        <NewsSection title="Новинки 🔥" link="/">
          <NewsSwiper />
        </NewsSection>
      </Container>
    </BasePage>
  );
};

export default HomePage;
