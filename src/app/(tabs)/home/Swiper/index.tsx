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
  children: React.ReactNode;
  type: string;
}

export const Swiper = ({ children, type }: Props) => {
  const sliderRef = useRef(null);

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
    <RecentSwiperSC $type={type}>
      <SwiperSC
        ref={sliderRef}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        initialSlide={5}
        speed={500}
        breakpoints={
          type === "horizontal"
            ? {
                0: { slidesPerView: 1 },
                700: { slidesPerView: "auto" },
              }
            : {}
        }
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
