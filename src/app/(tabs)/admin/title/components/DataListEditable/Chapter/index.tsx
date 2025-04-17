"use client";

import { DataList, DataListInput, DataListItem } from "../../../../styled";
import { Checkbox } from "@/components/Checkbox";
import type { Comic } from "@/api/types/comic";
import { useState } from "react";
import type { Chapter } from "@/api/types/chapter";

interface Props {
  chapter: Chapter;
}

const ChapterEditableDataList = ({ chapter }: Props) => {
  const [editChapter, setEditChapter] = useState<Chapter>(chapter);

  if (!chapter) return <></>;

  return (
    <DataList>
      <DataListItem>
        <b>Название:</b>
        <DataListInput defaultValue={chapter.title} />
      </DataListItem>
      <DataListItem>
        <b>Глава:</b>
        <DataListInput
          placeholder="Введите Ссылку"
          defaultValue={chapter.numberChapter}
        />
      </DataListItem>
      <DataListItem>
        <b>Том:</b>
        <DataListInput
          placeholder="Введите том"
          defaultValue={chapter.volumeIndex}
        />
      </DataListItem>
      <DataListItem>
        <b>Скрытый:</b>
        <Checkbox raw cb={(b) => null} />
      </DataListItem>
      <DataListItem>
        <b>Префикс:</b>
        <DataListInput placeholder="Введите префикс" />
      </DataListItem>
      <DataListItem>
        <b>Опубликовано:</b>
        <DataListInput defaultValue={chapter.createdAt} />
      </DataListItem>
      <DataListItem>
        <b>Просмотры:</b>
        <DataListInput defaultValue={chapter.views} />
      </DataListItem>
      <DataListItem>
        <b>Команда:</b>
        <DataListInput defaultValue={chapter.teamId} />
      </DataListItem>
      <DataListItem>
        <b>Ссылка:</b>
        <DataListInput defaultValue={chapter._id} />
      </DataListItem>
      <DataListItem>
        <b>Описание:</b>
        <DataListInput
          placeholder="Введите описание"
          defaultValue={chapter.description}
        />
      </DataListItem>
    </DataList>
  );
};

export default ChapterEditableDataList;
