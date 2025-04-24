"use client";

import React, { useMemo, useState } from "react";
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
import { ChapterUnit } from "./Chapter";
import DescendingIcon from "@icons/svg/sort-descending.svg";
import AscendingIcon from "@icons/svg/sort-ascending.svg";

interface Props {
  comic: Comic;
}

export const Chapters = ({ comic }: Props) => {
  const [sortingType, setSortingType] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAndSortedChapters = useMemo(() => {
    const filtered = comic.chapters.filter((chapter) =>
      chapter.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      const aNumber = a.numberChapter ?? 0;
      const bNumber = b.numberChapter ?? 0;

      return sortingType === 0
        ? bNumber - aNumber // Descending
        : aNumber - bNumber; // Ascending
    });

    return sorted;
  }, [comic.chapters, searchQuery, sortingType]);

  return (
    <ChaptersWrapper>
      <Tools>
        <Searchbar
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mini-switch-wrapper">
          <div
            className={`mini-switch-toggler ${sortingType === 1 && "mini-switch-active"}`}
            aria-disabled={sortingType === 1}
            onClick={() => setSortingType(1)}
          >
            <DescendingIcon className="mini-switch-icon" />
          </div>
          <div
            className={`mini-switch-toggler ${sortingType === 0 && "mini-switch-active"}`}
            aria-disabled={sortingType === 0}
            onClick={() => setSortingType(0)}
          >
            <AscendingIcon className="mini-switch-icon" />
          </div>
        </div>
      </Tools>
      <List>
        {filteredAndSortedChapters.length ? (
          filteredAndSortedChapters.map((el) => (
            <ChapterUnit title={comic} key={el._id} chapter={el} />
          ))
        ) : (
          <NoChaptersMessage>
            <NoImage src="/no-comments.png" />
            <NoChaptersText>Глав нет...</NoChaptersText>
          </NoChaptersMessage>
        )}
      </List>
    </ChaptersWrapper>
  );
};
