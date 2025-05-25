"use client";

import React, { useCallback, useRef, useState } from "react";
import {
  ControllerWrapper,
  DefaultSwipeButton,
  LeftSwipeButton,
  RecentSwiperSC,
  RightSwipeButton,
  SwiperSC,
} from "./styled";
import RightArrowIcon from "@icons/svg/right-arrow.svg";
import SwiperLeftArrowIcon from "@icons/svg/swiper-left-icon.svg";
import SwiperRightArrowIcon from "@icons/svg/swiper-right-icon.svg";

import "swiper/css";
import "swiper/css/navigation";
import type { SwiperProps, SwiperRef } from "swiper/react";
import {
  ScrollBarBackground,
  ScrollBarIndicator,
  ScrollBarWrapper,
} from "../RecentSwiper/styled";

interface Props {
  type: string;
  padding?: number;
  buttons?: boolean;
  buttonMargin?: number;
  children?: React.ReactNode;
  props?: SwiperProps;
  bottomControlls?: boolean;
}

export const Swiper = ({
  type,
  padding = 60,
  children,
  buttons = true,
  props,
  buttonMargin,
  bottomControlls = false,
}: Props) => {
  const sliderRef = useRef<SwiperRef>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const [canSwipe, setCanSwipe] = useState(true);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper?.slideNext();
  }, []);

  const updateState = useCallback(() => {
    const swiper = sliderRef.current?.swiper;
    if (!swiper) return;

    setIsEnd(swiper.isEnd);
    setProgress(swiper.progress);

    // Проверка, возможно ли свайпать
    const slidesPerView =
      swiper.params.slidesPerView === "auto"
        ? Math.floor(swiper.width / swiper.slides[0]?.offsetWidth || 1)
        : Number(swiper.params.slidesPerView);

    setCanSwipe(swiper.slides.length > slidesPerView);
  }, []);

  return (
    <RecentSwiperSC $type={type}>
      <SwiperSC
        ref={sliderRef}
        slidesPerView={"auto"}
        spaceBetween={12}
        speed={500}
        initialSlide={0}
        padding={padding}
        onSlideChange={updateState}
        onAfterInit={updateState}
        $leftShadowDisabled={progress === 0}
        $rightShadowDisabled={isEnd}
        {...props}
      >
        {children}
      </SwiperSC>

      {buttons && (
        <>
          <LeftSwipeButton onClick={handlePrev} $margin={buttonMargin ?? 0}>
            <RightArrowIcon />
          </LeftSwipeButton>
          <RightSwipeButton onClick={handleNext} $margin={buttonMargin ?? 0}>
            <RightArrowIcon />
          </RightSwipeButton>
        </>
      )}

      {bottomControlls && canSwipe && (
        <ScrollBarWrapper>
          <ScrollBarBackground>
            <ScrollBarIndicator $width={progress * 100} />
          </ScrollBarBackground>
          <ControllerWrapper>
            <DefaultSwipeButton onClick={handlePrev} $disabled={progress === 0}>
              <SwiperLeftArrowIcon />
            </DefaultSwipeButton>
            <DefaultSwipeButton onClick={handleNext} $disabled={isEnd}>
              <SwiperRightArrowIcon />
            </DefaultSwipeButton>
          </ControllerWrapper>
        </ScrollBarWrapper>
      )}
    </RecentSwiperSC>
  );
};
