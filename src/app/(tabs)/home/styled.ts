"use client";

import BasePage from "@/components/BasePage";
import { colors } from "@/const";
import styled from "@emotion/styled";
import { Section } from "./Section";
import { Badges } from "./RecommendedSwiper/styled";

export const HomeSC = styled(BasePage)``;

export const Container = styled.div`
  max-width: 1536px;
`

export const DayTopSection = styled(Section)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ComicTypeSection = styled(Section)`
  position: relative;
  height: 220px;
`

export const UpdatesSection = styled.div`
  margin: 100px 24px;
`;

export const RandomComicSection = styled.div`
  margin: 100px 24px;
`

export const NewsSection = styled(Section)`
  margin-top: 50px;
  margin-bottom: 150px;
`

export const CategorySection = styled(Section)`
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${colors.background};
`;

export const StatsBadges = styled(Badges)`
  margin-top: 10px;
  flex-wrap: wrap
`;
