"use client";

import type { Comic } from "@/api/types/comic";
import {
  DeleteActionWrapper,
  DeleteButton,
  DeleteDialogWrapper,
  DeleteTitle,
  Description,
  EditButton,
  LinkS,
  Poster,
  Tools,
  Wrapper,
} from "./styled";
import PencilIcon from "@icons/svg/pencil-stroked.svg";
import { useRouter } from "next/navigation";
import { RoleSegregator } from "@/components/RoleSegregator";
import CloseIcon from "@icons/svg/badge-dynamic-delete.svg";
import Link from "next/link";
import { useState } from "react";
import { Popover } from "@mui/material";
import { deleteManga } from "@/api/title";

interface Props {
  comic: Comic;
  deleteTitle: (titleId: string) => void;
}

export const ComicUnit = ({ comic, deleteTitle }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleDelete = async () => {
    try {
      await deleteManga(comic._id);
      deleteTitle(comic._id);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? comic.alternativeName : undefined;

  return (
    <Wrapper>
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
        <DeleteDialogWrapper>
          <DeleteTitle>Подтвердите удаление тайтла</DeleteTitle>
          <DeleteActionWrapper>
            <button
              className="button-transparent"
              onClick={() => handleClose()}
            >
              Отмена
            </button>
            <button className="button-filled" onClick={() => handleDelete()}>
              Удалить
            </button>
          </DeleteActionWrapper>
        </DeleteDialogWrapper>
      </Popover>
      <Link href={`/admin/title/${comic.alternativeName}`}>
        <Poster src={comic.imagePath} alt={comic.name} />
      </Link>
      <RoleSegregator allowedRoles={["owner", "admin"]}>
        <EditButton href={`/admin/title/${comic.alternativeName}/edit`}>
          <PencilIcon />
        </EditButton>
        <DeleteButton aria-describedby={id} onClick={handleClick}>
          <CloseIcon />
        </DeleteButton>
      </RoleSegregator>
      <Description>
        <h4>{comic.name}</h4>
        <Tools>
          <LinkS href={`/admin/title/${comic.alternativeName}/chapters/new`}>
            Добавить главу
          </LinkS>
          <LinkS href="">Статистика</LinkS>
        </Tools>
      </Description>
    </Wrapper>
  );
};
