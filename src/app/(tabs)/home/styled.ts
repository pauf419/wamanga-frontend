"use client";

import BasePage from "@/components/BasePage";
import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import { Section } from "./Section";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Badges } from "./RecommendedSwiper/styled";

export const HomeSC = styled(BasePage)``;

export const DayTopSection = styled(Section)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const NewsSection = styled.div`
  margin: 100px 24px;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${colors.background};
`;

export const StatsBadges = styled(Badges)`
  margin-top: 10px;
`;
