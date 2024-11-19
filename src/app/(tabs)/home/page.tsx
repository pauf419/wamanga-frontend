import React from "react";
import {
  HomeSC,
  Background,
  Manga,
  Poster,
  Badges,
  Title,
  Info,
  Description,
  StatsBadges,
  OpenButton,
  FavouriteButton,
  Buttons,
  Divider,
  DayTopSection,
  NewsSection,
} from "./styled";
import Badge from "./Badge";
import { colors } from "@/const";
import StatsBadge, { Icon } from "./StatsBadge";
import FavouriteIcon from "@icons/svg/favourites.svg";

import "swiper/css";
import "swiper/css/pagination";

import { Section } from "./Section";
import { RecentSwiper } from "./RecentSwiper";
import { DayTopSwiper } from "./DayTopSwiper";
import { NewsSwiper } from "./NewsSwiper";

const HomePage = () => {
  return (
    <HomeSC isImageBehind>
      <Background $backgroundImage="mock-background.png">
        <Manga>
          <Poster
            src={"/mock-poster.png"}
            alt="poster"
            width={250}
            height={350}
          />
          <Info>
            <Badges>
              <Badge textColor={colors.text} backgroundColor={colors.primary}>
                ПЕРЕВОДИТСЯ
              </Badge>
              <Badge
                textColor={colors.background}
                backgroundColor={colors.orange}
              >
                МАНГА
              </Badge>
            </Badges>
            <Title>Терпение, Моя Леди!</Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries Ipsumj.
            </Description>
            <StatsBadges>
              <StatsBadge icon={Icon.LIKE} amount={82256} />
              <StatsBadge icon={Icon.VIEW} amount={15151534} />
            </StatsBadges>
            <Buttons>
              <OpenButton>Открыть</OpenButton>
              <FavouriteButton>
                <FavouriteIcon />В закладки
              </FavouriteButton>
            </Buttons>
          </Info>
        </Manga>
      </Background>

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
    </HomeSC>
  );
};

export default HomePage;
