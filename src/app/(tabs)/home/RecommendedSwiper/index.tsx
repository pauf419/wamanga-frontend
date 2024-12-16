"use client";

import React, { useCallback, useRef } from "react";
import {
  AdaptivePosterHolder,
  Arrows,
  BadgesAdaptive,
  BadgesAdaptiveMinus,
  LeftSwipeButton,
  RecentSwiperSC,
  SwipeButton,
  SwiperSC,
} from "./styled";
import RightArrowIcon from "@icons/svg/right-arrow.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper/modules";
import { getRecommended } from "@/api/mocks/queries/use-get-recommended";

import {
  Background,
  Comic,
  Poster,
  Title,
  Info,
  Description,
  OpenButton,
  FavouriteButton,
  Buttons,
} from "./styled";
import { colors } from "@/const";
import FavouriteIcon from "@icons/svg/favourites.svg";
import Badge from "../Badge";
import StatsBadge, { Icon } from "../StatsBadge";
import { StatsBadges } from "../styled";
import { SwiperSlide } from "swiper/react";

export const RecommendedSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    const swiper = sliderRef.current.swiper;
    swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    const swiper = sliderRef.current?.swiper;
    swiper.slideNext();
  }, []);

  const {data} = getRecommended();

  return (
    <RecentSwiperSC>
      <SwiperSC
        ref={sliderRef}
        effect="fade"
        modules={[EffectFade]}
        slidesPerView={"auto"}
        speed={500}
        loop
      >
        {data.map((comic, index) => (
          <SwiperSlide
            style={{
              height: "80vh",
            }}
            key={index}
          >
            <Background $backgroundImage={comic.bannerPath}>
              <Comic>
                <AdaptivePosterHolder>
                  <Poster
                    src={comic.imagePath}
                    alt="poster"
                    width={250}
                    height={350}
                  />
                  <BadgesAdaptive>
                    <Badge
                      textColor={colors.background}
                      backgroundColor={colors.orange}
                    >
                      {comic.typeComic}
                    </Badge>
                    <Badge
                      textColor={colors.text}
                      backgroundColor={colors.primary}
                    >
                      {comic.status}
                    </Badge>
                  </BadgesAdaptive>
                </AdaptivePosterHolder>
                <Info>
                  <BadgesAdaptiveMinus>
                    <Badge
                      textColor={colors.text}
                      backgroundColor={colors.primary}
                    >
                      {comic.status}
                    </Badge>
                    <Badge
                      textColor={colors.background}
                      backgroundColor={colors.orange}
                    >
                      {comic.typeComic}
                    </Badge>
                  </BadgesAdaptiveMinus>
                  <Title>{comic.name}</Title>
                  <Description>{comic.description}</Description>
                  <StatsBadges>
                    <StatsBadge icon={Icon.LIKE} amount={comic.likes} />
                    <StatsBadge icon={Icon.VIEW} amount={comic.views} />
                  </StatsBadges>
                  <Buttons>
                    <OpenButton href={`/comics/${comic.alternativeName}`}>
                      Открыть
                    </OpenButton>
                    <FavouriteButton>
                      <FavouriteIcon />В закладки
                    </FavouriteButton>
                  </Buttons>
                </Info>
              </Comic>
            </Background>
          </SwiperSlide>
        ))}
      </SwiperSC>

      <Arrows>
        <LeftSwipeButton onClick={handlePrev}>
          <RightArrowIcon />
        </LeftSwipeButton>
        <SwipeButton onClick={handleNext}>
          <RightArrowIcon />
        </SwipeButton>
      </Arrows>
    </RecentSwiperSC>
  );
};
