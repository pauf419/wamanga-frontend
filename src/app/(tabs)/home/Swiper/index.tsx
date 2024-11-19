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
    <RecentSwiperSC $height={height}>
      <SwiperSC
        ref={sliderRef}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
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
