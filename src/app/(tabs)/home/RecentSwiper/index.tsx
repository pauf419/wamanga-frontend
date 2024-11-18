"use client";

import React from "react";
import { Poster, RecentSwiperSC, SwiperSC, SwiperSlideSC } from "./styled";

import "swiper/css";

export const RecentSwiper = () => {
  return (
    <RecentSwiperSC>
      <SwiperSC
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        initialSlide={0}
      >
        <SwiperSlideSC>
          <Poster width={200} height={300} src={"/test.webp"} alt={"poster"} />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-2.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-3.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-2.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster width={200} height={300} src={"/test.webp"} alt={"poster"} />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-3.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster width={200} height={300} src={"/test.webp"} alt={"poster"} />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-2.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-3.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-2.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster width={200} height={300} src={"/test.webp"} alt={"poster"} />
        </SwiperSlideSC>
        <SwiperSlideSC>
          <Poster
            width={200}
            height={300}
            src={"/test-3.webp"}
            alt={"poster"}
          />
        </SwiperSlideSC>
      </SwiperSC>
    </RecentSwiperSC>
  );
};
