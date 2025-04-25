"use client";

import React, { useState, type FC } from "react";
import {
  ComicInfo,
  ComicPoster,
  ComicStatus,
  ComicTitle,
  ComicType,
  SwiperComic,
} from "./styled";
import StatsBadge, { Icon } from "../StatsBadge";
import { StatsBadges } from "../styled";
import type { Comic } from "@/api/types/comic";
import { PopoverButton } from "../ComicPreviewMinimized/styled";
import PopoverIcon from "@icons/svg/popover.svg";
import Popover from "@mui/material/Popover";
import { ComicInfoPopup } from "../ComicInfoPopup";
import { useRouter } from "next/navigation";

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

  return (
    <SwiperComic>
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
        onClick={() =>
          router.push(`/${comic.seoGenre}/${comic.alternativeName}`)
        }
        src={comic.imagePath ? comic.imagePath : "/test-1.webp"}
        alt="Comic"
        width={200}
        height={350}
      />
      <ComicInfo
        onClick={() =>
          router.push(`/${comic.seoGenre}/${comic.alternativeName}`)
        }
      >
        <ComicTitle>{comic.name}</ComicTitle>
        <ComicType>{comic.type}</ComicType>
        <ComicStatus>{comic.status}</ComicStatus>
      </ComicInfo>
    </SwiperComic>
  );
};
