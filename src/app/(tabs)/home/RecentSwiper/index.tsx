"use client";

import React, { useCallback, useRef } from "react";
import {
  Info,
  LeftSwipeButton,
  Manga,
  Poster,
  RecentSwiperSC,
  RightSwipeButton,
  Status,
  SwiperSC,
  SwiperSlideSC,
  Title,
  Type,
} from "./styled";
import RightArrowIcon from "@icons/svg/right-arrow.svg";

import "swiper/css";
import "swiper/css/navigation";

export const RecentSwiper = () => {
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

  return (
    <RecentSwiperSC>
      <SwiperSC
        ref={sliderRef}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        initialSlide={0}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <SwiperSlideSC key={index}>
            <Manga>
              <Poster
                src={`/test-${((index - 1) % 3) + 1}.webp`}
                alt="manga"
                width={200}
                height={350}
              />
              <Info>
                <Title>
                  НазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание
                </Title>
                <Type>Манхва</Type>
                <Status>Переводится</Status>
              </Info>
            </Manga>
          </SwiperSlideSC>
        ))}
      </SwiperSC>

      <LeftSwipeButton onClick={handlePrev}>
        <RightArrowIcon />
      </LeftSwipeButton>
      <RightSwipeButton onClick={handleNext}>
        <RightArrowIcon />
      </RightSwipeButton>
    </RecentSwiperSC>
  );
};
