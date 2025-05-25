"use client";

import React, { useState, type FC } from "react";
import {
  ComicInfo,
  ComicInfoTitles,
  ComicNewChapters,
  ComicPoster,
  ComicStatus,
  ComicTitle,
  ComicType,
  ExtendedInfoUnit,
  ExtendedInfoWrapper,
  NewChapterBadge,
  NewChapters,
  PegiBadge,
  PegiPlus,
  Separator,
  StatsBlock,
  SwiperComic,
} from "./styled";
import { PopoverButton } from "../ComicPreviewMinimized/styled";
import PopoverIcon from "@icons/svg/popover.svg";
import FireIcon from "@icons/svg/fire-like.svg";
import ViewsIcon from "@icons/svg/view.svg";
import LikeIcon from "@icons/svg/stat-like.svg";
import Popover from "@mui/material/Popover";
import { ComicInfoPopup } from "../ComicInfoPopup";
import { useRouter } from "next/navigation";
import type { Comic } from "@/api/types/comic";
import StatsBadge, { Icon } from "../StatsBadge";
import { formatNumber } from "@/utils";

interface ComicPreviewProps {
  comic: Comic;
}

export const ComicPreviewVertical: FC<ComicPreviewProps> = ({ comic }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? comic.alternativeName : undefined;

  if (!comic || !comic.name) return <h1>NoComic</h1>;

  const chapters = (comic.chapters || []).sort(
    (a, b) => b.numberChapter - a.numberChapter
  );
  const latestChapters = chapters.slice(0, 2);
  const isExtended = latestChapters.length > 0;

  return (
    <SwiperComic>
      <StatsBlock>
        <ComicStatus>{comic.status}</ComicStatus>
        <PegiBadge>
          {comic.pegi.replaceAll("+", "")}
          <PegiPlus>+</PegiPlus>
        </PegiBadge>
      </StatsBlock>

      <PopoverButton aria-describedby={id} onClick={handleClick}>
        <PopoverIcon />
      </PopoverButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
      >
        <ComicInfoPopup comic={comic} onClose={handleClose} />
      </Popover>

      <ComicPoster
        $isExtended={isExtended}
        onClick={() =>
          router.push(`/${comic.seoGenre}/${comic.alternativeName}`)
        }
        src={comic.imagePath || "/test-1.webp"}
        alt="Comic"
        width={200}
        height={350}
      />

      <ComicInfo
        $isExtended={isExtended}
        onClick={() =>
          router.push(`/${comic.seoGenre}/${comic.alternativeName}`)
        }
      >
        <ComicInfoTitles>
          <ComicTitle>{comic.name}</ComicTitle>
          <ComicType>{comic.type}</ComicType>
        </ComicInfoTitles>
        <ExtendedInfoWrapper>
          <ExtendedInfoUnit>
            <ViewsIcon />
            {formatNumber(comic.views)}
          </ExtendedInfoUnit>
          <Separator> • </Separator>
          <ExtendedInfoUnit>
            <LikeIcon />
            {formatNumber(comic.likes)}
          </ExtendedInfoUnit>
        </ExtendedInfoWrapper>
      </ComicInfo>

      {latestChapters.length > 0 && (
        <ComicNewChapters>
          <NewChapters $single={latestChapters.length === 1}>
            {latestChapters.map((chapter, index) => (
              <NewChapterBadge
                key={index}
                onClick={() =>
                  router.push(
                    `/${comic.seoGenre}/${comic.alternativeName}/${chapter.slug}`
                  )
                }
              >
                Глава {chapter.numberChapter}
              </NewChapterBadge>
            ))}
          </NewChapters>
        </ComicNewChapters>
      )}
    </SwiperComic>
  );
};
