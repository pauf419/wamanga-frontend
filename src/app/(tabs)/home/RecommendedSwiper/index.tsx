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
  Comics,
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
import type { Comic } from "@/api/types/comic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Skeleton } from "@mui/material";

interface Props {
  titles: Comic[] | undefined;
}

const RecommendedSwiper = ({ titles }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const router = useRouter();

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

  return (
    <RecentSwiperSC>
      <SwiperSC
        ref={sliderRef}
        effect="fade"
        modules={[EffectFade]}
        slidesPerView={"auto"}
        speed={500}
        autoplay={{ delay: 5000 }}
        loop
      >
        {titles ? (
          titles.map((comic, index) => (
            <SwiperSlide
              style={{
                height: "80vh",
              }}
              key={index}
            >
              <Background $backgroundImage={comic.bannerPath}>
                <Comics>
                  <AdaptivePosterHolder>
                    <Link href={`/${comic.seoGenre}/${comic.alternativeName}`}>
                      <Poster
                        src={comic.imagePath}
                        alt={comic.name}
                        width={250}
                        height={350}
                        unoptimized
                      />
                    </Link>

                    <BadgesAdaptive>
                      <Badge
                        textColor={colors.background}
                        backgroundColor={colors.orange}
                      >
                        {comic.type}
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
                        {comic.type}
                      </Badge>
                    </BadgesAdaptiveMinus>
                    <Title>{comic.name}</Title>
                    <Description>{comic.description}</Description>
                    <StatsBadges>
                      <StatsBadge icon={Icon.LIKE} amount={comic.likes} />
                      <StatsBadge icon={Icon.VIEW} amount={comic.views} />
                    </StatsBadges>
                    <Buttons>
                      <Link
                        href={`/${comic.seoGenre}/${comic.alternativeName}`}
                      >
                        {" "}
                        <OpenButton
                          href={`/${comic.seoGenre}/${comic.alternativeName}`}
                        >
                          Открыть
                        </OpenButton>
                      </Link>
                      <FavouriteButton>
                        <FavouriteIcon />В закладки
                      </FavouriteButton>
                    </Buttons>
                  </Info>
                </Comics>
              </Background>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide
            style={{
              height: "80vh",
            }}
          >
            <Background $backgroundImage={""}>
              <Comics>
                <AdaptivePosterHolder>
                  <Skeleton style={{ borderRadius: 16 }}>
                    <div style={{ width: 200, height: 500 }}></div>
                  </Skeleton>

                  <Skeleton>
                    <BadgesAdaptive style={{ height: 24 }}>
                      <Badge
                        textColor={colors.background}
                        backgroundColor={colors.orange}
                      >
                        Manga
                      </Badge>
                      <Badge
                        textColor={colors.text}
                        backgroundColor={colors.primary}
                      >
                        active
                      </Badge>
                    </BadgesAdaptive>
                  </Skeleton>
                </AdaptivePosterHolder>
                <Info>
                  <Skeleton>
                    <BadgesAdaptiveMinus style={{ height: 24 }}>
                      <Badge
                        textColor={colors.text}
                        backgroundColor={colors.primary}
                      >
                        MAnga
                      </Badge>
                      <Badge
                        textColor={colors.background}
                        backgroundColor={colors.orange}
                      >
                        active
                      </Badge>
                    </BadgesAdaptiveMinus>
                  </Skeleton>
                  <Skeleton>
                    <Title>Skeleton</Title>
                    <Description style={{ width: 300 }}>Skeleton</Description>
                  </Skeleton>
                  <Skeleton>
                    <StatsBadges style={{ height: 24 }}>
                      <StatsBadge icon={Icon.LIKE} amount={1000} />
                      <StatsBadge icon={Icon.VIEW} amount={1000} />
                    </StatsBadges>
                  </Skeleton>
                  <Skeleton>
                    <Buttons style={{ height: 36, width: 150 }}>
                      <OpenButton href="/">Открыть</OpenButton>
                      <FavouriteButton>
                        <FavouriteIcon />В закладки
                      </FavouriteButton>
                    </Buttons>
                  </Skeleton>
                </Info>
              </Comics>
            </Background>
          </SwiperSlide>
        )}
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

export default RecommendedSwiper;
