"use client";

import React from "react";
import {
  Background,
  Button,
  Content,
  Info,
  News,
  Overview,
  SwiperSlideSC,
  Tag,
  Title,
} from "./styled";
import { Swiper } from "../Swiper";

export const NewsSwiper = () => {
  // TODO: Убрать хардкод
  const news = [
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
  ];

  return (
    <Swiper height={320}>
      {news.map((el, index) => (
        <SwiperSlideSC key={index}>
          <News $background={el.image}>
            <Background />
            <Content>
              <Tag $type={el.type}>
                {el.type === "news" ? "НОВОСТЬ" : "КОМАНДА"}
              </Tag>
              <Info>
                <Title>{el.title}</Title>
                <Overview>{el.overview}</Overview>
                {el.button && el.button.text && el.button.link && (
                  <Button href={el.button.link}>{el.button.text}</Button>
                )}
              </Info>
            </Content>
          </News>
        </SwiperSlideSC>
      ))}
    </Swiper>
  );
};
