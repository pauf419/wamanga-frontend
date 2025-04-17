"use client";

import React, { useState } from "react";
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
import type { Comic } from "@/api/types/comic";
import { getRandom } from "@/api/title";

interface Props {
  title: Comic;
}

export const RandomComic = ({ title }: Props) => {
  const [randomTitle, setRandomTitle] = useState<Comic>(title);

  const refetchTitle = async () => {
    const title = await getRandom();
    setRandomTitle(title);
  };

  return (
    <Wrapper>
      <Content>
        <Title>
          Нажми на кнопку <PrimaryColor>&quot;Рандом&quot;</PrimaryColor> и
          появится случайный тайтл
        </Title>
        <RandomButton onClick={() => refetchTitle()}>Рандом</RandomButton>
        <ComicPreviewMinimized nested comic={randomTitle} />
      </Content>
      <Background>
        <BackgroundImage
          quality={100}
          src="/rules.png"
          alt="rules"
          width={512}
          height={512}
        />
      </Background>
    </Wrapper>
  );
};
