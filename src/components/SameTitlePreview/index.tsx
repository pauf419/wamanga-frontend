"use client";

import type { Comic, MangaChaptersMinimalInfo } from "@/api/types/comic";
import {
  TypeBadge,
  Content,
  Info,
  Poster,
  Segment,
  Wrapper,
  Title,
  Icon,
} from "./styled";
import InfoIcon from "@icons/svg/info-filled.svg";
import { useState } from "react";
import { PopoverButton } from "@/app/(tabs)/home/ComicPreviewMinimized/styled";
import PopoverIcon from "@icons/svg/popover.svg";
import Popover from "@mui/material/Popover";
import { ComicInfoPopup } from "@/app/(tabs)/home/ComicInfoPopup";
import { useRouter } from "next/navigation";
import { getMangaChaptersMinimalInfo } from "@/api/title";

interface Props {
  title: Comic;
}

export const SameTitlePreview = ({ title }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const router = useRouter();

  const [chaptersInfo, setChaptersInfo] = useState<MangaChaptersMinimalInfo>();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);

    if (!chaptersInfo) {
      try {
        const res = await getMangaChaptersMinimalInfo(title._id);
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
  const id = open ? title.alternativeName : undefined;

  return (
    <Wrapper>
      <Poster
        src={title.imagePath}
        onClick={() =>
          router.push(`/${title.seoGenre}/${title.alternativeName}`)
        }
      />
      <Content
        onClick={() =>
          router.push(`/${title.seoGenre}/${title.alternativeName}`)
        }
      >
        <Info>
          <TypeBadge>{title.type}</TypeBadge>
          <Title>{title.name}</Title>
        </Info>
        <Segment></Segment>
      </Content>
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
        <ComicInfoPopup chaptersInfo={chaptersInfo} comic={title} onClose={handleClose} />
      </Popover>
    </Wrapper>
  );
};
