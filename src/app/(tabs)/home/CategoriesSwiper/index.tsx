"use client";

import React from "react";
import { SwiperSlideSC } from "./styled";
import { Swiper } from "../Swiper";
import { ComicPreviewVertical } from "../ComicPreviewVertical";
import { getByCategory } from "@/api/mocks/queries/use-get-by-category";

export const CategoriesSwiper = () => {

  const {data} = getByCategory()  

  return (
    <Swiper type="vertical">
      {data.map((comic, index) => (
        <SwiperSlideSC key={index}>
          <ComicPreviewVertical
            comic={
              comic
            }
          />
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
