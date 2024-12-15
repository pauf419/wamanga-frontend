"use client";

import React, { useCallback, useRef } from "react";
import {
  LeftSwipeButton,
  RecentSwiperSC,
  RightSwipeButton,
  SwiperSC,
} from "./styled";
import RightArrowIcon from "@icons/svg/right-arrow.svg";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  height: number;
  children: React.ReactNode;
}

export const Swiper = ({ height, children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current || !sliderRef.current.swiper) return;

    const swiper = sliderRef.current.swiper;
    swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current || !sliderRef.current.swiper) return;
    const swiper = sliderRef.current.swiper;
    swiper.slideNext();
  }, []);

  return (
    <RecentSwiperSC $height={height}>
      <SwiperSC
        ref={sliderRef}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop
        initialSlide={1}
        speed={500}
      >
        {children}
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
