"use client";

import React from "react";
import {
  Background,
  Button,
  Content,
  Info,
  Updates,
  Overview,
  SwiperSlideSC,
  Tag,
} from "./styled";
import { Swiper } from "../Swiper";

export const UpdatesSwiper = () => {
  // TODO: Убрать хардкод
  const updates = [
    {
      type: "news",
      title: "медузки!!",
      overview: "Морские животные рулят mother fucker~",
      image: "/bac2.jpg",
    },
    {
      type: "team",
      title: "Команда лохов",
      overview: "Мы команда настоящих лошар, и мы покажем вам кто такой лось~",
      image: "bac3.png",
      button: {
        link: "/",
        text: "Подписаться",
      },
    },
    {
      type: "team",
      title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
      overview:
        "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
      image: "bac1.jpg",
    },
    {
      type: "team",
      title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
      overview:
        "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
      image: "bac1.jpg",
    },
    {
      type: "team",
      title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
      overview:
        "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
      image: "bac1.jpg",
    },
    {
      type: "team",
      title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
      overview:
        "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
      image: "bac1.jpg",
    },
  ];

  return (
    <Swiper type="large">
      {updates.map((el, index) => (
        <SwiperSlideSC key={index}>
          <Updates $background={el.image}>
            <Background />
            <Content>
              <Tag $type={el.type}>
                {el.type === "news" ? "НОВОСТЬ" : "КОМАНДА"}
              </Tag>
              <Info>
                <h3>{el.title}</h3>
                <Overview>{el.overview}</Overview>
                {el.button && el.button.text && el.button.link && (
                  <Button href={el.button.link}>{el.button.text}</Button>
                )}
              </Info>
            </Content>
          </Updates>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
