"use client";

import React from "react";
import {
  Background,
  Content,
  Info,
  Updates,
  Overview,
  SwiperSlideSC,
  Tag,
} from "./styled";
import { Swiper } from "../Swiper";
import { getUpdates } from "@/api/mocks/queries/use-get-updates";
import { PrimaryButton } from "@/components/Button";

export const UpdatesSwiper = () => {
  const { data } = getUpdates();

  return (
    <Swiper type="large">
      {data.map((update, index) => (
        <SwiperSlideSC key={index}>
          <Updates $background={update.image}>
            <Background />
            <Content>
              <Tag $type={update.type}>
                {update.type === "news" ? "НОВОСТЬ" : "КОМАНДА"}
              </Tag>
              <Info>
                <h3>{update.title}</h3>
                <Overview>{update.overview}</Overview>
                {update.button && update.button.text && update.button.link && (
                  <PrimaryButton href={update.button.link}>
                    {update.button.text}
                  </PrimaryButton>
                )}
              </Info>
            </Content>
          </Updates>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
