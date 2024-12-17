"use client";

import React from "react";
import {
  Background,
  BackgroundImage,
  Content,
  PrimaryColor,
  RandomButton,
  Title,
  Wrapper,
} from "./styled";
import { ComicPreviewMinimized } from "../ComicPreviewMinimized";
import { getRandomComic } from "@/api/mocks/queries/use-get-random-comic";

export const RandomComic = () => {
  const { data } = getRandomComic();

  return (
    <Wrapper>
      <Content>
        <Title>
          Нажми на кнопку <PrimaryColor>&quot;Рандом&quot;</PrimaryColor> и
          появится случайный тайтл
        </Title>
        <RandomButton>Рандом</RandomButton>
        <ComicPreviewMinimized nested comic={data} />
      </Content>
      <Background>
        <BackgroundImage src="/rules.png" />
      </Background>
    </Wrapper>
  );
};
