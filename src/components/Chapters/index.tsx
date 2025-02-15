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
        <div className="mini-switch-wrapper">
          <div
            className={`mini-switch-toggler ${sortingType === 0 && "mini-switch-active"}`}
            aria-disabled={sortingType === 0}
            onClick={() => setSortingType(0)}
          >
            <DescendingIcon className="mini-switch-icon" />
          </div>
          <div
            className={`mini-switch-toggler ${sortingType === 1 && "mini-switch-active"}`}
            aria-disabled={sortingType === 1}
            onClick={() => setSortingType(1)}
          >
            <AscendingIcon className="mini-switch-icon" />
          </div>
        </div>
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
