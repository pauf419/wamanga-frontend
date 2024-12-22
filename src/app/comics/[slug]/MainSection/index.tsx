"use client";

import React, { useEffect, useState } from "react";
import {
  Content,
  Main,
  Description,
  InfoTag,
  InfoTagBadge,
  InfoTags,
  InfoTagTitle,
  InfoTagBadgeDefault,
  Badges,
  ChapterCountWrapper,
  ChaptersAvailable,
  Separator,
  ChaptersTotal,
  TranslatorTag,
  CommentsTitle,
  ZeroSpacer,
} from "./styled";
import { Tabs } from "@/components/Tabs";
import type { Comic } from "@/api/types/comic";
import { Comments } from "@/components/Comments";
import { ComicTranslatorMinimized } from "@/components/ComicTranslatorMinimized";
import { getComicTranslator } from "@/api/mocks/queries/use-get-comic-translator";
import {
  DisplaysWhenMobile,
  HidesWhenMobile,
} from "@/components/Adaptive/styled";
import { Chapters } from "@/components/Chapters";

interface Props {
  comics: Comic;
}

export const MainSection = ({ comics }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<string[]>(["Описание", "Главы"]);

  const translator = getComicTranslator();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200)
        return setTabs(["Описание", "Главы", "Коментарии", "Команда"]);
      setTabs(["Описание", "Главы"]);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && (
        <Content>
          <Main>
            <Description>{comics.description}</Description>

            <InfoTag>
              <InfoTagTitle>Теги</InfoTagTitle>
              <Badges>
                {comics.tags.map((el) => (
                  <InfoTagBadgeDefault key={el.id}>
                    {el.name}
                  </InfoTagBadgeDefault>
                ))}
              </Badges>
            </InfoTag>
            <InfoTag>
              <InfoTagTitle>Жанры</InfoTagTitle>
              <Badges>
                {comics.genres.map((el) => (
                  <InfoTagBadgeDefault key={el.id}>
                    {el.name}
                  </InfoTagBadgeDefault>
                ))}
              </Badges>
            </InfoTag>
            <InfoTag>
              <InfoTagTitle>Количество разделов</InfoTagTitle>
              <ChapterCountWrapper>
                <ChaptersAvailable>
                  {comics.chaptersAvailable}
                </ChaptersAvailable>
                <Separator>из</Separator>
                <ChaptersTotal>{comics.chaptersTotal}</ChaptersTotal>
              </ChapterCountWrapper>
              <HidesWhenMobile>
                <CommentsTitle>Комментарии</CommentsTitle>
                <Comments comic={comics} />
              </HidesWhenMobile>
            </InfoTag>
            <DisplaysWhenMobile>
              <Main>
                <InfoTag>
                  <InfoTagTitle>Статус Перевода</InfoTagTitle>
                  <InfoTagBadge>{comics.status}</InfoTagBadge>
                </InfoTag>
                <InfoTag>
                  <InfoTagTitle>Статус тайтла</InfoTagTitle>
                  <InfoTagBadge>{comics.status}</InfoTagBadge>
                </InfoTag>

                <InfoTag>
                  <InfoTagTitle>Год выпуска</InfoTagTitle>
                  <ChaptersAvailable>{comics.year}</ChaptersAvailable>
                </InfoTag>
              </Main>
            </DisplaysWhenMobile>
          </Main>
          <HidesWhenMobile>
            <InfoTags>
              <InfoTag>
                <InfoTagTitle>Статус Перевода</InfoTagTitle>
                <InfoTagBadge>{comics.status}</InfoTagBadge>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Статус тайтла</InfoTagTitle>
                <InfoTagBadge>{comics.status}</InfoTagBadge>
              </InfoTag>

              <InfoTag>
                <InfoTagTitle>Год выпуска</InfoTagTitle>
                <ChaptersAvailable>{comics.year}</ChaptersAvailable>
              </InfoTag>

              <TranslatorTag>
                <InfoTagTitle> Переводчик </InfoTagTitle>
                <ComicTranslatorMinimized translator={translator.data} />
              </TranslatorTag>
            </InfoTags>
          </HidesWhenMobile>
        </Content>
      )}
      {activeTab === 1 && (
        <ZeroSpacer>
          <Chapters comic={comics} />
        </ZeroSpacer>
      )}
      {activeTab === 2 && (
        <ZeroSpacer>
          <Comments comic={comics} />
        </ZeroSpacer>
      )}
      {activeTab === 3 && (
        <ZeroSpacer>
          <TranslatorTag>
            <ChaptersAvailable> Переводчик </ChaptersAvailable>
            <ComicTranslatorMinimized translator={translator.data} />
          </TranslatorTag>
        </ZeroSpacer>
      )}
    </div>
  );
};
