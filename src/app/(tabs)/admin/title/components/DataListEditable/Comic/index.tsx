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

interface Props {
  title: Comic;
}

export const statusItems = [
  { key: StatusType.Started, name: "В процессе" },
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
              name: "В процессе",
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
              name: "В процессе",
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
          elements={[
            { index: 0, value: "Игры" },
            { index: 1, value: "Исекай" },
            { index: 2, value: "История" },
            { index: 3, value: "Апокалипсис" },
            { index: 4, value: "Боевик" },
            { index: 5, value: "Боевые искусства" },
            { index: 6, value: "Ваншот" },
            { index: 7, value: "Вестерн" },
            { index: 8, value: "Яой" },
            { index: 9, value: "Юри" },
            { index: 10, value: "Шенен-ай" },
            { index: 11, value: "Шенен" },
            { index: 12, value: "Шедзе-ай" },
            { index: 13, value: "Шедзя" },
            { index: 14, value: "Фэнтези" },
            { index: 15, value: "Философия" },
            { index: 16, value: "Фантастика" },
            { index: 17, value: "Триллер" },
            { index: 18, value: "Трагедия" },
            { index: 19, value: "Темное фэнтези" },
            { index: 20, value: "Сентай" },
            { index: 21, value: "Спокон" },
            { index: 22, value: "Сейнен" },
            { index: 23, value: "Романтика" },
            { index: 24, value: "Психология" },
            { index: 25, value: "Приключения" },
            { index: 26, value: "Постапокалипсис" },
            { index: 27, value: "Полиция" },
            { index: 28, value: "Повседневность" },
            { index: 29, value: "Пародия" },
            { index: 30, value: "Омегаверс" },
            { index: 31, value: "Научная фантастика" },
            { index: 32, value: "Сверхъестественное" },
            { index: 33, value: "Мистика" },
            { index: 34, value: "Меха" },
            { index: 35, value: "Махо-шонен" },
            { index: 36, value: "Махо-шьёдзьо" },
            { index: 37, value: "Комедия" },
            { index: 38, value: "Йонкома" },
            { index: 39, value: "Ужасы" },
            { index: 40, value: "Эччи" },
            { index: 41, value: "Эротика" },
            { index: 42, value: "Экшн" },
            { index: 43, value: "Драма" },
            { index: 44, value: "Дополнительнее" },
            { index: 45, value: "Детектив" },
            { index: 46, value: "Джосей" },
            { index: 47, value: "Деменция" },
            { index: 48, value: "Готика" },
            { index: 49, value: "Героическое фэнтези" },
          ]}
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
          elements={[
            { index: 0, value: "Империи" },
            { index: 1, value: "Артефакты" },
            { index: 2, value: "Аристократия" },
            { index: 3, value: "Боевик" },
            { index: 4, value: "Безумие" },
            { index: 5, value: "Якудза" },
            { index: 6, value: "Школа" },
            { index: 7, value: "Чудесица" },
            { index: 8, value: "Фетиш" },
            { index: 9, value: "Волшебники" },
            { index: 10, value: "Университет" },
            { index: 11, value: "Животные" },
            { index: 12, value: "Спорт" },
            { index: 13, value: "Суперсила" },
            { index: 14, value: "Самураи" },
            { index: 15, value: "Система" },
            { index: 16, value: "Реинкарнация" },
            { index: 17, value: "Приключения" },
            { index: 18, value: "Подземелье" },
            { index: 19, value: "Полиция" },
            { index: 20, value: "Политика" },
            { index: 21, value: "Путешествия по времени" },
            { index: 22, value: "Парапсихология" },
            { index: 23, value: "Быт" },
            { index: 24, value: "Одержимость" },
            { index: 25, value: "Обмен телами" },
            { index: 26, value: "Насилие" },
            { index: 27, value: "Бои на мечах" },
            { index: 28, value: "Бои" },
            { index: 29, value: "Вампиры" },
            { index: 30, value: "Выживание" },
            { index: 31, value: "Война" },
            { index: 32, value: "ГГ женщина" },
            { index: 33, value: "ГГ умный" },
            { index: 34, value: "ГГ мужчина" },
            { index: 35, value: "Гарем" },
            { index: 36, value: "Гендерная интрига" },
            { index: 37, value: "Гильдии" },
            { index: 38, value: "Взрослые отношения" },
            { index: 39, value: "Для детей" },
            { index: 40, value: "Взрослые отношения" },
            { index: 41, value: "Дружба" },
            { index: 42, value: "Друзья детства" },
            { index: 43, value: "Экшн" },
            { index: 44, value: "Эпизод жизни" },
            { index: 45, value: "Жестокость" },
            { index: 46, value: "Эспер" },
            { index: 47, value: "Зверолюди" },
            { index: 48, value: "Изменение пола" },
            { index: 49, value: "Преступление" },
            { index: 50, value: "Сказка" },
            { index: 51, value: "Космос" },
            { index: 52, value: "Любовь" },
            { index: 53, value: "Культивация" },
            { index: 54, value: "Кулинария" },
            { index: 55, value: "Киберпанк" },
            { index: 56, value: "Любовный треугольник" },
            { index: 57, value: "Магия" },
            { index: 58, value: "Мафия" },
            { index: 59, value: "Музыка" },
            { index: 60, value: "Медицина" },
            { index: 61, value: "Мифические существа" },
          ]}
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
