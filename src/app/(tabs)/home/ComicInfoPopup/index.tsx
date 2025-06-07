"use client";

import type { Comic } from "@/api/types/comic";
import {
  ChaptersCount,
  Description,
  Flexbox,
  GenreWrapper,
  Gridbox,
  PopupWrapper,
} from "./styled";
import CloseIcon from "@icons/svg/close.svg";
import BookIcon from "@icons/svg/book.svg";
import BookmarkIcon from "@icons/svg/reader-bookmark.svg";
import { SortingButton } from "../../catalog/styled";
import { SortingIcon } from "@/app/team/[slug]/styled";
import { StatsBadges } from "../styled";
import StatsBadge, { Icon } from "../StatsBadge";
import {
  ChapterCountWrapper,
  ChaptersAvailable,
  ChaptersTotal,
  Separator,
} from "@/app/[genre]/[slug]/MainSection/styled";
import { Tooltip } from "@mui/material";

interface Props {
  comic: Comic;
  onClose: () => void;
}

export const ComicInfoPopup = ({ comic, onClose }: Props) => {
  return (
    <PopupWrapper>
      <Flexbox>
        <Gridbox>
          <h2>{comic.name}</h2>
          <h4>{comic.alternativeName}</h4>
        </Gridbox>
        <SortingButton onClick={() => onClose()}>
          <SortingIcon $active={false} as={CloseIcon} />
        </SortingButton>
      </Flexbox>
      <Gridbox>
        <h4>Статистика</h4>
        <StatsBadges style={{ marginTop: 0 }}>
          <StatsBadge icon={Icon.LIKE} amount={comic.likes} />
          <StatsBadge icon={Icon.VIEW} amount={comic.views} />
        </StatsBadges>
      </Gridbox>
      {comic.chapters?.length ? (
        <Gridbox>
          <h4>Количество глав</h4>
          <ChaptersCount>{comic.chapters.length}</ChaptersCount>
        </Gridbox>
      ) : (
        <></>
      )}
      <Gridbox>
        <h4>Жанры</h4>
        <GenreWrapper>
          {comic.genres.map((genre, index) => {
            if (!index) return genre;
            return `, ${genre}`;
          })}
        </GenreWrapper>
      </Gridbox>
      <Gridbox>
        {comic.chapters?.length ? (
          <a
            href={`/${comic.seoGenre}/${comic.alternativeName}/${comic.chapters[0].slug}`}
            className="button-filled"
          >
            <BookIcon />
            Читать
          </a>
        ) : (
          <Tooltip title="Нет доступных глав">
            <button className="button-filled button-filled-disabled">
              <BookIcon />
              Читать
            </button>
          </Tooltip>
        )}
        <Flexbox>
          <a
            href={`/${comic.seoGenre}/${comic.alternativeName}`}
            className="outline-button"
            style={{ minWidth: 89 }}
          >
            К тайтлу
          </a>
          <Tooltip title="Эта функция еще в разработке">
            <button
              className="button-filled button-filled-disabled"
              style={{ width: "100%" }}
            >
              <BookmarkIcon />В закладки
            </button>
          </Tooltip>
        </Flexbox>
      </Gridbox>
      <Description>{comic.description}</Description>
    </PopupWrapper>
  );
};
