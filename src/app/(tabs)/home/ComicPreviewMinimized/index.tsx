"use client";

import React, { useState } from "react";
import type { FC } from "react";
import {
  ComicInfo,
  ComicPoster,
  ComicStatus,
  ComicTitle,
  ComicType,
  PopoverButton,
  SwiperComic,
} from "./styled";
import StatsBadge, { Icon } from "../StatsBadge";
import { StatsBadges } from "../styled";
import type { Comic } from "@/api/types/comic";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ComicInfoPopup } from "../ComicInfoPopup";
import PopoverIcon from "@icons/svg/popover.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ComicPreviewProps {
  nested?: boolean;
  comic: Comic;
}

export const ComicPreviewMinimized: FC<ComicPreviewProps> = ({
  nested = false,
  comic,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? comic.alternativeName : undefined;

  if (!comic || !comic.name) return <h1>No comic</h1>;

  return (
    <SwiperComic $nested={nested}>
      <Link href={`/${comic.seoGenre}/${comic.alternativeName}`}>
        <ComicPoster
          src={comic.imagePath ? comic.imagePath : "/test-1.webp"}
          alt={comic.name}
          width={200}
          height={350}
        />
      </Link>

      <Link href={`/${comic.seoGenre}/${comic.alternativeName}`}>
        <ComicInfo>
          <ComicTitle>{comic.name}</ComicTitle>
          <ComicType>{comic.type}</ComicType>
          <StatsBadges>
            <StatsBadge icon={Icon.LIKE} amount={comic.likes} />
            <StatsBadge icon={Icon.VIEW} amount={comic.views} />
          </StatsBadges>
          <ComicStatus>{comic.status}</ComicStatus>
        </ComicInfo>
      </Link>
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
        <h1>sdsd</h1>
      </Popover>
    </SwiperComic>
  );
};
