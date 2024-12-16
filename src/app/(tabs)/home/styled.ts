"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { Section } from "./Section";
import { Badges } from "./RecommendedSwiper/styled";

export const Container = styled.div`
  max-width: 1536px;
  margin: 0 auto;
`;

export const DayTopSection = styled(Section)`
  margin: 50px 0px;
`;

export const ComicTypeSection = styled(Section)`
  position: relative;
  height: 220px;
`;

export const UpdatesSection = styled.div`
  margin: 100px 24px;
`;

export const RandomComicSection = styled.div`
  margin: 100px 24px;
`;

export const NewsSection = styled(Section)`
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const CategorySection = styled(Section)`
  margin: 50px 0;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${colors.background};
`;

export const StatsBadges = styled(Badges)`
  flex-wrap: wrap;
  margin-top: 10px;
`;
