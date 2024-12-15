'use client'

import React from "react";
import { Divider, DayTopSection, NewsSection } from "./styled";

import "swiper/css";
import "swiper/css/pagination";

import { Section } from "./Section";
import { RecentSwiper } from "./RecentSwiper";
import { DayTopSwiper } from "./DayTopSwiper";
import { NewsSwiper } from "./NewsSwiper";
import { RecommendedSwiper } from "./RecommendedSwiper";
import BasePage from "@/components/BasePage";

const HomePage = () => {
  return (
    <BasePage isImageBehind>
      <RecommendedSwiper />
      <Section title="Недавние обновления" link="/">
        <RecentSwiper />
      </Section>

      <DayTopSection title="Топ за день" link="/">
        <DayTopSwiper />
      </DayTopSection>

      <NewsSection>
        <NewsSwiper />
      </NewsSection>

      <Divider>Coming soon...</Divider>
    </BasePage>
  );
};

export default HomePage;
