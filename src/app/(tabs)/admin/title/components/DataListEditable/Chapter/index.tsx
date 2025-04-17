"use client";

import { DataList, DataListInput, DataListItem } from "../../../../styled";
import { Checkbox } from "@/components/Checkbox";
import type { Comic } from "@/api/types/comic";
import { useState } from "react";
import type { Chapter } from "@/api/types/chapter";
import { updateChapter } from "@/api/chapter";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import React from "react";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@icons/svg/close.svg";

interface Props {
  chapter: Chapter;
}

const ChapterEditableDataList = ({ chapter }: Props) => {
  const [editChapter, setEditChapter] = useState<Chapter>(chapter);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const submit = async () => {
    try {
      const res = await updateChapter(editChapter);
      setMessage("Глава успешно обновлена.");
      setOpen(true);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        setMessage(e.response.data.message);
        setOpen(true);
      }
    }
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  if (!chapter) return <></>;

  return (
    <DataList>
      <DataListItem>
        <b>Название:</b>
        <DataListInput
          defaultValue={chapter.title}
          onChange={(e) =>
            setEditChapter({
              ...editChapter,
              title: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Описание:</b>
        <DataListInput
          placeholder="Введите описание"
          defaultValue={chapter.description}
          onChange={(e) =>
            setEditChapter({
              ...editChapter,
              description: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Глава:</b>
        <DataListInput
          placeholder="Введите номер главы"
          defaultValue={chapter.numberChapter}
          onChange={(e) =>
            setEditChapter({
              ...editChapter,
              numberChapter: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Том:</b>
        <DataListInput
          placeholder="Введите том"
          defaultValue={chapter.volumeIndex}
          onChange={(e) =>
            setEditChapter({
              ...editChapter,
              volumeIndex: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Просмотры:</b>
        <DataListInput
          defaultValue={chapter.views}
          onChange={(e) =>
            setEditChapter({
              ...editChapter,
              views: Number(e.target.value),
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Опубликовано:</b>
        <DataListInput
          defaultValue={chapter.uploadDate}
          onChange={(e) =>
            setEditChapter({
              ...editChapter,
              uploadDate: e.target.value,
            })
          }
        />
      </DataListItem>
      <DataListItem>
        <b>Скрытый:</b>
        <Checkbox
          raw
          defaultCheckedValue={chapter.hide}
          cb={(b) =>
            setEditChapter({
              ...editChapter,
              hide: b,
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

export default ChapterEditableDataList;
