"use client";

import { DataList, DataListInput, DataListItem } from "../../../../styled";
import { Checkbox } from "@/components/Checkbox";
import type { Comic } from "@/api/types/comic";
import { useState } from "react";
import { BadgeTypeSelectManual } from "@/components/BadgeTypeSelect/Manual";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { Dropdown } from "@/components/Dropdown";
import {
  ComicsType,
  createTitle,
  editManga,
  PegiType,
  StatusType,
} from "@/api/title";
import Input from "@/components/Input";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@icons/svg/close.svg";
import { MangaGenres, MangaTags } from "../../../new/Form";
import { useRouter } from "next/navigation";
import { RoleSegregator } from "@/components/RoleSegregator";

interface Props {
  title: Comic;
}

export const statusItems = [
  { key: StatusType.Started, name: "Онгоинг" },
  { key: StatusType.Finished, name: "Окончено" },
  { key: StatusType.Paused, name: "Приостановлено" },
  { key: StatusType.Abandoned, name: "Заброшено" },
  { key: StatusType.Announced, name: "Анонсировано" },
];

export const typeItems = [
  {
    key: ComicsType.Manga,
    name: "Манга",
  },
  {
    key: ComicsType.Manhva,
    name: "Манхва",
  },
  {
    key: ComicsType.Manhua,
    name: "Маньхуа",
  },
  {
    key: ComicsType.Comic,
    name: "Комикс",
  },
  {
    key: ComicsType.Manuscript,
    name: "Манускрипт",
  },
];

export const pegiItems = [
  {
    key: PegiType.Pegi3,
    name: "+3",
  },
  {
    key: PegiType.Pegi6,
    name: "+6",
  },
  {
    key: PegiType.Pegi12,
    name: "+12",
  },
  {
    key: PegiType.Pegi16,
    name: "+16",
  },
  {
    key: PegiType.Pegi18,
    name: "+18",
  },
];

const ComicEditableDataList = ({ title }: Props) => {
  const [editTitle, setEditTitle] = useState<Comic>(title);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const router = useRouter();

  const statusDefault = statusItems.findIndex(
    (item) => item.key === title.status
  );

  const translationStatusDefault = statusItems.findIndex(
    (item) => item.key === title.transferStatus
  );

  const submit = async () => {
    try {
      //const edited = await editManga(editTitle);
      setOpen(true);
      setMessage("Тайтл успешно обновлен");
    } catch (e) {
      console.error(e);
      if (e && typeof e === "object" && "response" in e) {
        const err = e as { response: { data: { message: string } } };
        setMessage(err.response.data.message);
        setOpen(true);
      }
    }
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  if (!title) return <></>;

  return (
    <DataList>
      <RoleSegregator allowedRoles={["admin", "owner"]}>
        <button
          className="button-filled"
          onClick={() =>
            router.push(`/admin/title/${title.alternativeName}/edit`)
          }
        >
          Редактировать
        </button>
      </RoleSegregator>
      <DataListItem>
        <b>Просмотры:</b>
        <DataListInput
          defaultValue={title.views}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              totalChapters: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Просмотры глав:</b>
        <DataListInput
          defaultValue={title.views}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              totalChapters: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Сохранено:</b>
        <DataListInput
          defaultValue={title.bookmark}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              totalChapters: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Лайки:</b>
        <DataListInput
          defaultValue={title.likes}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              totalChapters: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Общее количество глав:</b>
        <DataListInput
          defaultValue={title.chapters.length}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              totalChapters: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={message}
        action={action}
      />
    </DataList>
  );
};

export default ComicEditableDataList;
