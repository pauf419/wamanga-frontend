"use client";

import React, { useEffect, useState, type FC } from "react";
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
import type { MangaChaptersMinimalInfo } from "@/api/types/comic";
import { type Comic } from "@/api/types/comic";
import StatsBadge, { Icon } from "../StatsBadge";
import { formatNumber } from "@/utils";
import { getMangaChaptersMinimalInfo } from "@/api/title";
import Link from "next/link";

interface ComicPreviewProps {
  comic: Comic;
  adaptive?: boolean;
}

export const ComicPreviewVertical: FC<ComicPreviewProps> = ({
  comic,
  adaptive = false,
}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [chaptersInfo, setChaptersInfo] = useState<MangaChaptersMinimalInfo>();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);

    if (!chaptersInfo) {
      try {
        const res = await getMangaChaptersMinimalInfo(comic._id);
        if (res) setChaptersInfo(res);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? comic.alternativeName : undefined;

  if (!comic || !comic.name) return <h1>NoComic</h1>;

  const isExtended = false;

  return (
    <SwiperComic $adaptive={adaptive}>
      <StatsBlock>
        <ComicStatus>{comic.status}</ComicStatus>
        <PegiBadge>
          <PegiBadge>
            {comic.pegi?.replaceAll("+", "")}
            {comic.pegi && <PegiPlus>+</PegiPlus>}
          </PegiBadge>
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
        <ComicInfoPopup
          comic={comic}
          chaptersInfo={chaptersInfo}
          onClose={handleClose}
        />
      </Popover>

      <Link href={`/${comic.seoGenre}/${comic.alternativeName}`}>
        <ComicPoster
          $isExtended={isExtended}
          src={comic.imagePath || "/test-1.webp"}
          alt="Comic"
          width={200}
          height={350}
          unoptimized
        />
      </Link>

      <Link href={`/${comic.seoGenre}/${comic.alternativeName}`}>
        <ComicInfo $isExtended={isExtended}>
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
      </Link>
    </SwiperComic>
  );
};
