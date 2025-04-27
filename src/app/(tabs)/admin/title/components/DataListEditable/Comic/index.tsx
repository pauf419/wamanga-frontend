"use client";

import { DataList, DataListInput, DataListItem } from "../../../../styled";
import { Checkbox } from "@/components/Checkbox";
import type { Comic } from "@/api/types/comic";
import { useState } from "react";
import { BadgeTypeSelectManual } from "@/components/BadgeTypeSelect/Manual";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { Dropdown } from "@/components/Dropdown";
import { createTitle, editManga, StatusType } from "@/api/title";
import Input from "@/components/Input";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@icons/svg/close.svg";
import { MangaGenres, MangaTags } from "../../../new/Form";

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

const ComicEditableDataList = ({ title }: Props) => {
  const [editTitle, setEditTitle] = useState<Comic>(title);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const statusDefault = statusItems.findIndex(
    (item) => item.key === title.status
  );

  const translationStatusDefault = statusItems.findIndex(
    (item) => item.key === title.transferStatus
  );

  const submit = async () => {
    try {
      const edited = await editManga(editTitle);
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
      <DataListItem>
        <b>Название:</b>
        <DataListInput
          defaultValue={title.name}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              name: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Ссылка:</b>
        <DataListInput
          placeholder="Введите Ссылку"
          defaultValue={title.alternativeName}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              alternativeName: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Общее количество глав:</b>
        <DataListInput
          defaultValue={String(title.totalChapters)}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              totalChapters: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Описание кнопки:</b>
        <DataListInput
          defaultValue={title.textForButton}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              textForButton: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Ссылка на соц. сеть:</b>
        <DataListInput
          defaultValue={title.telegram}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              telegram: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Скрытый:</b>
        <Checkbox
          raw
          cb={(b) =>
            setEditTitle({
              ...editTitle,
              hidden: b,
            })
          }
          defaultCheckedValue={title.hidden}
        />
      </DataListItem>
      <DataListItem>
        <b>Лицензированная:</b>
        <Checkbox
          raw
          cb={(b) =>
            setEditTitle({
              ...editTitle,
              license: b,
            })
          }
          defaultCheckedValue={title.license}
        />
      </DataListItem>
      <DataListItem>
        <b>Для Взрослых:</b>
        <Checkbox
          raw
          cb={(b) =>
            setEditTitle({
              ...editTitle,
              isPorno: b,
            })
          }
          defaultCheckedValue={title.isPorno}
        />
      </DataListItem>
      <DataListItem>
        <b>Статус тайтла:</b>
        <Dropdown
          items={[
            {
              key: StatusType.Started,
              name: "Онгоинг",
            },
            {
              key: StatusType.Finished,
              name: "Окончено",
            },
            {
              key: StatusType.Paused,
              name: "Приостановлено",
            },
            {
              key: StatusType.Abandoned,
              name: "Заброшено",
            },
            {
              key: StatusType.Announced,
              name: "Анонсировано",
            },
          ]}
          defaultIndex={statusDefault}
          cb={(e) =>
            setEditTitle({
              ...editTitle,
              status: e.key,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Статус перевода:</b>
        <Dropdown
          items={[
            {
              key: StatusType.Started,
              name: "Онгоинг",
            },
            {
              key: StatusType.Finished,
              name: "Окончено",
            },
            {
              key: StatusType.Paused,
              name: "Приостановлено",
            },
            {
              key: StatusType.Abandoned,
              name: "Заброшено",
            },
            {
              key: StatusType.Announced,
              name: "Анонсировано",
            },
          ]}
          cb={(e) =>
            setEditTitle({
              ...editTitle,
              transferStatus: e.key,
            })
          }
          defaultIndex={translationStatusDefault}
        />
      </DataListItem>
      <DataListItem>
        <Input
          type="textarea"
          placeholder="Описание"
          presetValue={title.description}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              description: e,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <BadgeTypeSelectManual
          placeholder="Издатель"
          preset={title.publisher}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              publisher: e,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <BadgeTypeSelectManual
          placeholder="Автор"
          preset={title.author}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              author: e,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <BadgeTypeSelectManual
          preset={title.artist}
          placeholder="Художник"
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              artist: e,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <BadgeTypeSelectManual
          placeholder="Формат выпуска"
          preset={title.releaseFormat}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              releaseFormat: e,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <BadgeTypeSelect
          preset={title.genres.map((genre, index) => {
            return {
              index,
              value: genre,
            };
          })}
          placeholder="Жанры"
          elements={MangaGenres}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              genres: e.map((genre) => genre.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <BadgeTypeSelect
          preset={title.genres.map((genre, index) => {
            return {
              index,
              value: genre,
            };
          })}
          placeholder="Теги"
          elements={MangaTags}
          onChange={(e) =>
            setEditTitle({
              ...editTitle,
              tags: e.map((tag) => tag.value),
            })
          }
        />
      </DataListItem>
      <button className="button-filled" onClick={() => submit()}>
        Сохранить изменения
      </button>
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
