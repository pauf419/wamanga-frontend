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
  InfoTagTextField,
  NewChaptersSwiperWrapper,
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
import Badge from "@/app/(tabs)/home/Badge";
import { colors } from "@/const/colors";
import { ChaptersCount } from "@/app/(tabs)/home/ComicInfoPopup/styled";
import { NewChaptersSwiper } from "./NewChaptersSwiper";
import { useUserStore } from "@/app/store";
import { AdsFrame } from "@/components/AdsFrame";
import { AdsFrameNames } from "@/api/types/settings";

interface Props {
  comics: Comic;
}

export const MainSection = ({ comics }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<string[]>(["Описание", "Главы"]);

  const translator = getComicTranslator();

  const latestChapters = [...comics.chapters]
    .sort((a, b) => b.numberChapter - a.numberChapter)
    .slice(0, 10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200)
        return setTabs(["Описание", "Главы", "Комментарии", "Команда"]);
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
            <DisplaysWhenMobile>
              {comics.chapters.length ? (
                <InfoTag>
                  <InfoTagTitle>Новые главы</InfoTagTitle>
                  <NewChaptersSwiperWrapper>
                    <NewChaptersSwiper
                      manga={comics}
                      chapters={latestChapters}
                    />
                  </NewChaptersSwiperWrapper>
                </InfoTag>
              ) : (
                <></>
              )}
            </DisplaysWhenMobile>
            <Description>{comics.description}</Description>
            <HidesWhenMobile>
              {comics.chapters.length ? (
                <InfoTag>
                  <InfoTagTitle>Новые главы</InfoTagTitle>
                  <NewChaptersSwiperWrapper>
                    <NewChaptersSwiper
                      manga={comics}
                      chapters={latestChapters}
                    />
                  </NewChaptersSwiperWrapper>
                </InfoTag>
              ) : (
                <></>
              )}
            </HidesWhenMobile>

            <InfoTag>
              <InfoTagTitle>Жанры</InfoTagTitle>
              <Badges>
                {comics.genres.map((el) => (
                  <InfoTagBadgeDefault key={el}>{el}</InfoTagBadgeDefault>
                ))}
              </Badges>
            </InfoTag>
            <InfoTag>
              <InfoTagTitle>Теги</InfoTagTitle>
              <Badges>
                {comics.tags.map((el) => (
                  <InfoTagBadgeDefault key={el}>{el}</InfoTagBadgeDefault>
                ))}
              </Badges>
            </InfoTag>
            <InfoTag>
              <InfoTagTitle>Количество глав</InfoTagTitle>
              <ChapterCountWrapper>
                <ChaptersCount>{comics.chapters.length}</ChaptersCount>
              </ChapterCountWrapper>
              <AdsFrame frameName={AdsFrameNames.MangaBottom} />
              <HidesWhenMobile>
                <CommentsTitle>Комментарии</CommentsTitle>
                <Comments type="comic" comic={comics} />
              </HidesWhenMobile>
            </InfoTag>
            <DisplaysWhenMobile>
              <Main>
                <InfoTag>
                  <InfoTagTitle>Статус перевода</InfoTagTitle>
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
              <InfoTag style={{ alignItems: "flex-start" }}>
                <InfoTagTitle>Тип</InfoTagTitle>

                <Badge
                  textColor={colors.background}
                  backgroundColor={colors.orange}
                >
                  {comics.type}
                </Badge>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Статус перевода</InfoTagTitle>
                <InfoTagBadge>{comics.status}</InfoTagBadge>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Статус тайтла</InfoTagTitle>
                <InfoTagBadge>{comics.status}</InfoTagBadge>
              </InfoTag>

              <InfoTag>
                <InfoTagTitle>Автор оригинала</InfoTagTitle>
                <InfoTagTextField>
                  {comics.author.length
                    ? comics.author.map((author, index) => {
                        if (index === 0)
                          return (
                            <ChaptersAvailable key={author}>
                              {author}
                            </ChaptersAvailable>
                          );
                        return (
                          <ChaptersAvailable key={author}>
                            , {author}
                          </ChaptersAvailable>
                        );
                      })
                    : "N/A"}
                </InfoTagTextField>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Издатель</InfoTagTitle>
                <InfoTagTextField>
                  {comics.publisher.length
                    ? comics.publisher.map((publisher, index) => {
                        if (index === 0)
                          return (
                            <ChaptersAvailable key={publisher}>
                              {publisher}
                            </ChaptersAvailable>
                          );
                        return (
                          <ChaptersAvailable key={publisher}>
                            , {publisher}
                          </ChaptersAvailable>
                        );
                      })
                    : "N/A"}
                </InfoTagTextField>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Художник</InfoTagTitle>
                <InfoTagTextField>
                  {comics.artist.length
                    ? comics.artist.map((artist, index) => {
                        if (index === 0)
                          return (
                            <ChaptersAvailable key={artist}>
                              {artist}
                            </ChaptersAvailable>
                          );
                        return (
                          <ChaptersAvailable key={artist}>
                            , {artist}
                          </ChaptersAvailable>
                        );
                      })
                    : "N/A"}
                </InfoTagTextField>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Год выпуска</InfoTagTitle>
                <ChaptersAvailable>{comics.year}</ChaptersAvailable>
              </InfoTag>

              <TranslatorTag>
                <InfoTagTitle> Переводчик </InfoTagTitle>
                <ComicTranslatorMinimized
                  translator={comics.translationTeams[0]}
                />
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
          <Comments type="comic" comic={comics} />
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
