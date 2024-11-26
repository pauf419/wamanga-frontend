"use client";

import React, { useCallback, useRef } from "react";
import {
  Arrows,
  LeftSwipeButton,
  RecentSwiperSC,
  RightSwipeButton,
  SwieprSlideSC,
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
  Comics,
  Poster,
  Badges,
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
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    const swiper = (sliderRef.current as any).swiper;
    swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    const swiper = (sliderRef.current as any).swiper;
    swiper.slideNext();
  }, []);

  const data = getRecommended();

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
        {data.data.map((comics, index) => (
          <SwiperSlide
            style={{
              height: "80vh",
            }}
            key={index}
          >
            <Background $backgroundImage={comics.bannerPath}>
              <Comics>
                <Poster
                  src={comics.imagePath}
                  alt="poster"
                  width={250}
                  height={350}
                />
                <Info>
                  <Badges>
                    <Badge
                      textColor={colors.text}
                      backgroundColor={colors.primary}
                    >
                      {comics.status}
                    </Badge>
                    <Badge
                      textColor={colors.background}
                      backgroundColor={colors.orange}
                    >
                      {comics.typeComics}
                    </Badge>
                  </Badges>
                  <Title>{comics.name}</Title>
                  <Description>{comics.description}</Description>
                  <StatsBadges>
                    <StatsBadge icon={Icon.LIKE} amount={comics.likes} />
                    <StatsBadge icon={Icon.VIEW} amount={comics.views} />
                  </StatsBadges>
                  <Buttons>
                    <OpenButton href={`/comics/${comics.alternativeName}`}>
                      Открыть
                    </OpenButton>
                    <FavouriteButton>
                      <FavouriteIcon />В закладки
                    </FavouriteButton>
                  </Buttons>
                </Info>
              </Comics>
            </Background>
          </SwiperSlide>
        ))}
      </SwiperSC>

      <Arrows>
        <LeftSwipeButton onClick={handlePrev}>
          <RightArrowIcon />
        </LeftSwipeButton>
        <RightSwipeButton onClick={handleNext}>
          <RightArrowIcon />
        </RightSwipeButton>
      </Arrows>
    </RecentSwiperSC>
  );
};
