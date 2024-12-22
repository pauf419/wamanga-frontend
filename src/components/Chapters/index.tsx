"use client";

import React, { useState } from "react";
import {
  ChaptersWrapper,
  List,
  NoChaptersMessage,
  NoImage,
  NoChaptersText,
  Tools,
  Searchbar,
  SortTypeWrapper,
  SortType,
  SortIcon,
} from "./styled";
import type { Comic } from "@/api/types/comic";
import { getComicChapters } from "@/api/mocks/queries/use-get-comic-chapters";
import { Chapter } from "./Chapter";
import DescendingIcon from "@icons/svg/sort-descending.svg";
import AscendingIcon from "@icons/svg/sort-ascending.svg";

interface Props {
  comic: Comic;
}

export const Chapters = ({ comic }: Props) => {
  const [sortingType, setSortingType] = useState<number>(0);

  //Здесь потом будем передавать comicId
  const { data } = getComicChapters();

  return (
    <ChaptersWrapper>
      <Tools>
        <Searchbar placeholder="Поиск" />
        <SortTypeWrapper>
          <SortType
            aria-disabled={sortingType === 0}
            $active={sortingType === 0}
            onClick={() => setSortingType(0)}
          >
            <SortIcon as={DescendingIcon} />
          </SortType>
          <SortType
            aria-disabled={sortingType === 1}
            $active={sortingType === 1}
            onClick={() => setSortingType(1)}
          >
            <SortIcon as={AscendingIcon} />
          </SortType>
        </SortTypeWrapper>
      </Tools>
      <List>
        {data.length ? (
          data.map((el) => <Chapter key={el.id} chapter={el} />)
        ) : (
          <NoChaptersMessage>
            <NoImage src="/no-comments.png" />
            <NoChaptersText>{comic.id}Резделов нет...</NoChaptersText>
          </NoChaptersMessage>
        )}
      </List>
    </ChaptersWrapper>
  );
};
