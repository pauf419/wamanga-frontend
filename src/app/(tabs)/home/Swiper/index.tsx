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
import type { SwiperProps, SwiperRef } from "swiper/react";

interface Props {
  type: string;
  padding?: number;
  buttons?: boolean;
  buttonMargin?: number;
  children?: React.ReactNode;
  props?: SwiperProps;
}

export const Swiper = ({
  type,
  padding = 60,
  children,
  buttons = true,
  props,
  buttonMargin,
}: Props) => {
  const sliderRef = useRef<SwiperRef>(null);

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
        speed={500}
        initialSlide={0}
        padding={padding}
        {...props}
      >
        {children}
      </SwiperSC>

      {buttons ? (
        <>
          <LeftSwipeButton onClick={handlePrev} $margin={buttonMargin ?? 0}>
            <RightArrowIcon />
          </LeftSwipeButton>
          <RightSwipeButton onClick={handleNext} $margin={buttonMargin ?? 0}>
            <RightArrowIcon />
          </RightSwipeButton>
        </>
      ) : (
        <></>
      )}
    </RecentSwiperSC>
  );
};
