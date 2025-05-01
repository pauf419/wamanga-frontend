"use client";

import { ImageInputExtended } from "@/components/ImageInputExtended";
import { useState } from "react";
import {
  AdminTitle,
  FormFlexDropdown,
  FormTreflex,
  ImageInputWrapper,
  SettingsBlockFlexWrapper,
  SettingsBlockGridWrapper,
} from "../../../styled";
import Input from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { WarningBlock, WarningIcon, WarningText } from "@/app/user/styled";
import InfoIcon from "@icons/svg/info-filled.svg";
import type { BadgeTypeSelectElement } from "@/components/BadgeTypeSelect";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { Dropdown } from "@/components/Dropdown";
import type { CreateTitleDto } from "@/api/title";
import { ComicsType, createTitle, PegiType, StatusType } from "@/api/title";
import { BadgeTypeSelectManual } from "@/components/BadgeTypeSelect/Manual";
import type { Team } from "@/api/types/team";
import { simpleSearch } from "@/api/team";
import type { Comic, CreateComicDto } from "@/api/types/comic";
import { IconButton, Snackbar, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import CloseIcon from "@icons/svg/close.svg";

export const MangaGenres: BadgeTypeSelectElement[] = [
  { index: 0, value: "Арт" },
  { index: 1, value: "Безумие" },
  { index: 2, value: "Боевик" },
  { index: 3, value: "Боевые искусства" },
  { index: 4, value: "Вампиры" },
  { index: 5, value: "Военное" },
  { index: 6, value: "Гарем" },
  { index: 7, value: "Гендерная интрига" },
  { index: 8, value: "Героическое фэнтези" },
  { index: 9, value: "Демоны" },
  { index: 10, value: "Детектив" },
  { index: 11, value: "Дзёсэй" },
  { index: 12, value: "Драма" },
  { index: 13, value: "Игра" },
  { index: 14, value: "Исекай" },
  { index: 15, value: "История" },
  { index: 16, value: "Киберпанк" },
  { index: 17, value: "Кодомо" },
  { index: 18, value: "Комедия" },
  { index: 19, value: "Космос" },
  { index: 20, value: "Магия" },
  { index: 21, value: "Махо-сёдзё" },
  { index: 22, value: "Машины" },
  { index: 23, value: "Меха" },
  { index: 24, value: "Мистика" },
  { index: 25, value: "Музыка" },
  { index: 26, value: "Научная фантастика" },
  { index: 27, value: "Омегаверс" },
  { index: 28, value: "Пародия" },
  { index: 29, value: "Повседневность" },
  { index: 30, value: "Полиция" },
  { index: 31, value: "Постапокалиптика" },
  { index: 32, value: "Приключения" },
  { index: 33, value: "Психология" },
  { index: 34, value: "Романтика" },
  { index: 35, value: "Самурайский боевик" },
  { index: 36, value: "Сверхъестественное" },
  { index: 37, value: "Сёдзё" },
  { index: 38, value: "Спорт" },
  { index: 39, value: "Супер сила" },
  { index: 40, value: "Сэйнэн" },
  { index: 41, value: "Трагедия" },
  { index: 42, value: "Триллер" },
  { index: 43, value: "Ужасы" },
  { index: 44, value: "Фантастика" },
  { index: 45, value: "Фэнтези" },
  { index: 46, value: "Школа" },
  { index: 47, value: "Эротика" },
  { index: 48, value: "Этти" },
];

export const MangaTags: BadgeTypeSelectElement[] = [
  {
    index: 1,
    value: "Азартные игры",
  },
  {
    index: 2,
    value: "Амнезия / Потеря памяти",
  },
  {
    index: 3,
    value: "Антигерой",
  },
  {
    index: 4,
    value: "Апокалипсис",
  },
  {
    index: 5,
    value: "Артефакты",
  },
  {
    index: 6,
    value: "Бои на мечах",
  },
  {
    index: 7,
    value: "Брат и сестра",
  },
  {
    index: 8,
    value: "Ведьма",
  },
  {
    index: 9,
    value: "Видеоигры",
  },
  {
    index: 10,
    value: "Владыка демонов",
  },
  {
    index: 11,
    value: "Война",
  },
  {
    index: 12,
    value: "Волшебные существа",
  },
  {
    index: 13,
    value: "Выживание",
  },
  {
    index: 14,
    value: "ГГ имба",
  },
  {
    index: 15,
    value: "Геймеры",
  },
  {
    index: 16,
    value: "Горничные",
  },
  {
    index: 17,
    value: "Гуру",
  },
  {
    index: 18,
    value: "Драконы",
  },
  {
    index: 19,
    value: "Жестокий мир",
  },
  {
    index: 20,
    value: "Завоевание мира",
  },
  {
    index: 21,
    value: "Злые духи",
  },
  {
    index: 22,
    value: "Игровые элементы",
  },
  {
    index: 23,
    value: "Исторические",
  },
  {
    index: 24,
    value: "Квесты",
  },
  {
    index: 25,
    value: "Кулинария",
  },
  {
    index: 26,
    value: "Легендарное оружие",
  },
  {
    index: 27,
    value: "Магическая академия",
  },
  {
    index: 28,
    value: "Мафия",
  },
  {
    index: 29,
    value: "Месть",
  },
  {
    index: 30,
    value: "Монстры",
  },
  {
    index: 31,
    value: "Навыки / способности",
  },
  {
    index: 32,
    value: "Насилие / жестокость",
  },
  {
    index: 33,
    value: "Ниндзя",
  },
  {
    index: 34,
    value: "Обратный Гарем",
  },
  {
    index: 35,
    value: "Офисные Работники",
  },
  {
    index: 36,
    value: "Пираты",
  },
  {
    index: 37,
    value: "Политика",
  },
  {
    index: 38,
    value: "Полностью CGI",
  },
  {
    index: 39,
    value: "Преступники / Криминал",
  },
  {
    index: 40,
    value: "Путешествие во времени",
  },
  {
    index: 41,
    value: "Разумные расы",
  },
  {
    index: 42,
    value: "Регрессия",
  },
  {
    index: 43,
    value: "Роботы",
  },
  {
    index: 44,
    value: "Самураи",
  },
  {
    index: 45,
    value: "Система",
  },
  {
    index: 46,
    value: "Спасение мира",
  },
  {
    index: 47,
    value: "Средневековье",
  },
  {
    index: 48,
    value: "Супергерои",
  },
  {
    index: 49,
    value: "Умный ГГ",
  },
  {
    index: 50,
    value: "Фермерство",
  },
  {
    index: 51,
    value: "Хикикомори",
  },
  {
    index: 52,
    value: "Шантаж",
  },
  {
    index: 53,
    value: "Япония",
  },
  {
    index: 54,
    value: "Алхимия",
  },
  {
    index: 55,
    value: "Ангелы",
  },
  {
    index: 56,
    value: "Антиутопия",
  },
  {
    index: 57,
    value: "Армия",
  },
  {
    index: 58,
    value: "Боги",
  },
  {
    index: 59,
    value: "Борьба за власть",
  },
  {
    index: 60,
    value: "Будущее",
  },
  {
    index: 61,
    value: "Вестерн",
  },
  {
    index: 62,
    value: "Виртуальная реальность",
  },
  {
    index: 63,
    value: "Военные",
  },
  {
    index: 64,
    value: "Волшебники / маги",
  },
  {
    index: 65,
    value: "Воспоминания из другого мира",
  },
  {
    index: 66,
    value: "ГГ женщина",
  },
  {
    index: 67,
    value: "ГГ мужчина",
  },
  {
    index: 68,
    value: "Гильдии",
  },
  {
    index: 69,
    value: "Гоблины",
  },
  {
    index: 70,
    value: "Гуро",
  },
  {
    index: 71,
    value: "Демоны",
  },
  {
    index: 72,
    value: "Дружба",
  },
  {
    index: 73,
    value: "Животные компаньоны",
  },
  {
    index: 74,
    value: "Зверолюди",
  },
  {
    index: 75,
    value: "Зомби",
  },
  {
    index: 76,
    value: "Империи",
  },
  {
    index: 77,
    value: "Камера",
  },
  {
    index: 78,
    value: "Космос",
  },
  {
    index: 79,
    value: "Культивирование",
  },
  {
    index: 80,
    value: "Лоли",
  },
  {
    index: 81,
    value: "Магия",
  },
  {
    index: 82,
    value: "Медицина",
  },
  {
    index: 83,
    value: "Монстродевушки",
  },
  {
    index: 84,
    value: "Мурим",
  },
  {
    index: 85,
    value: "Наёмники",
  },
  {
    index: 86,
    value: "Нежить",
  },
  {
    index: 87,
    value: "Обмен телами",
  },
  {
    index: 88,
    value: "Огнестрельное оружие",
  },
  {
    index: 89,
    value: "Пародия",
  },
  {
    index: 90,
    value: "Подземелья",
  },
  {
    index: 91,
    value: "Полиция",
  },
  {
    index: 92,
    value: "Полноценный ИИ",
  },
  {
    index: 93,
    value: "Призраки / Духи",
  },
  {
    index: 94,
    value: "Рабы",
  },
  {
    index: 95,
    value: "Ранги силы",
  },
  {
    index: 96,
    value: "Реинкарнация",
  },
  {
    index: 97,
    value: "Рыцари",
  },
  {
    index: 98,
    value: "Сгенерировано ИИ",
  },
  {
    index: 99,
    value: "Скрытые личности",
  },
  {
    index: 100,
    value: "Спортивное тело",
  },
  {
    index: 101,
    value: "Стимпанк",
  },
  {
    index: 102,
    value: "Традиционные игры",
  },
  {
    index: 103,
    value: "Учитель",
  },
  {
    index: 104,
    value: "Философия",
  },
  {
    index: 105,
    value: "Холодное оружие",
  },
  {
    index: 106,
    value: "Эльфы",
  },
  {
    index: 107,
    value: "Яндере",
  },
  {
    index: 108,
    value: "Эльдри",
  },
];

const AddTitlePageForm = () => {
  const [error, setError] = useState<string>();
  const [posterBlob, setPosterBlob] = useState<any>(null);
  const [posterUrl, setPosterUrl] = useState<string>("");
  const [bannerBlob, setBannerBlob] = useState<any>(null);
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [searchTeams, setSearchTeams] = useState<Team[]>([]);
  const [form, setForm] = useState<CreateComicDto>({
    name: "",

    description: "",

    altEnglishName: [],

    englishName: "",

    altName: [],

    rating: 5,

    imagePath: "",

    bannerPath: "",

    type: ComicsType.Manga,

    author: [],

    telegram: "",

    textForButton: "",

    artist: [],

    year: 2025,

    isFinished: false,

    pegi: PegiType.Pegi6,

    status: StatusType.Started,

    transferStatus: StatusType.Started,

    views: 0,

    likes: 0,

    hidden: false,

    tags: [],

    genres: [],

    bookmark: 0,

    publishedOn: new Date(),

    updatedAt: new Date(),

    _id: "",

    chapters: [],
    chaptersAvailable: 0,
    totalChapters: 0,
    id: "",
    isPorno: false,
    license: false,
    originalAuthor: "",
    publisher: [],
    releaseFormat: [],
    translationTeams: [],
    alternativeName: "",
    seoGenre: "",
  });

  const router = useRouter();

  const savePoster = (url: string, data: string) => {
    setPosterUrl(url);
    setPosterBlob(data);
  };

  const saveBanner = (url: string, data: string) => {
    setBannerUrl(url);
    setBannerBlob(data);
  };

  const handleTeamSearch = async (query: string) => {
    const teams = await simpleSearch(query);
    setSearchTeams(teams);
  };

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const submit = async () => {
    try {
      const title = await createTitle(form, posterBlob, bannerBlob);
      router.push(`/admin/title/${title.alternativeName}`);
    } catch (e) {
      console.error(e);
      if (e && typeof e === "object" && "response" in e) {
        const err = e as { response: { data: { message: string } } };
        setError(err.response.data.message);
        handleClick();
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

  return (
    <>
      <AdminTitle>Добавить тайтл</AdminTitle>
      <SettingsBlockFlexWrapper>
        <ImageInputWrapper>
          <h4>Обложка</h4>
          <ImageInputExtended
            key={2323}
            defaultImg={posterUrl}
            onChange={savePoster}
            type="category"
          />
        </ImageInputWrapper>
        <ImageInputWrapper>
          <h4>Фон</h4>
          <ImageInputExtended
            key={2313}
            defaultImg={bannerUrl}
            onChange={saveBanner}
            type="category"
          />
        </ImageInputWrapper>
      </SettingsBlockFlexWrapper>
      <SettingsBlockGridWrapper>
        <Input
          placeholder="Название на русском"
          type="input"
          onChange={(value) =>
            setForm({
              ...form,
              name: value,
            })
          }
        />
        <Input
          placeholder="Название на английском"
          type="input"
          onChange={(value) =>
            setForm({
              ...form,
              englishName: value,
            })
          }
        />
        <Input
          placeholder="Альтернативные названия"
          type="textarea"
          onChange={(e) =>
            setForm({
              ...form,
              altName: e.split("\n"),
            })
          }
        />
        <Input
          placeholder="Год релиза"
          type="input"
          onChange={(value) =>
            setForm({
              ...form,
              year: Number(value),
            })
          }
        />
        <FormTreflex>
          <FormFlexDropdown>
            <b>Тип</b>
            <Dropdown
              cb={(value) =>
                setForm({
                  ...form,
                  type: value.key,
                })
              }
              items={[
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
              ]}
              defaultIndex={0}
            />
          </FormFlexDropdown>
          <FormFlexDropdown>
            <b>Статус тайтла</b>
            <Dropdown
              cb={(value) =>
                setForm({
                  ...form,
                  status: value.key,
                })
              }
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
              defaultIndex={0}
            />
          </FormFlexDropdown>
        </FormTreflex>
        <FormTreflex>
          <FormFlexDropdown>
            <b>Возрастное ограничение</b>
            <Dropdown
              cb={(value) =>
                setForm({
                  ...form,
                  pegi: value.key,
                })
              }
              items={[
                {
                  key: PegiType.Pegi3,
                  name: "3+",
                },
                {
                  key: PegiType.Pegi6,
                  name: "6+",
                },
                {
                  key: PegiType.Pegi12,
                  name: "12+",
                },
                {
                  key: PegiType.Pegi16,
                  name: "16+",
                },
                {
                  key: PegiType.Pegi18,
                  name: "18+",
                },
              ]}
              defaultIndex={1}
            />
          </FormFlexDropdown>
          <FormFlexDropdown>
            <b>Статус перевода</b>
            <Dropdown
              cb={(value) =>
                setForm({
                  ...form,
                  transferStatus: value.key,
                })
              }
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
              defaultIndex={0}
            />
          </FormFlexDropdown>
        </FormTreflex>
        <BadgeTypeSelectManual
          placeholder="SEO-жанр"
          onChange={(values) =>
            setForm({
              ...form,
              seoGenre: values[0],
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Издатель"
          onChange={(values) =>
            setForm({
              ...form,
              publisher: values,
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Автор"
          onChange={(values) =>
            setForm({
              ...form,
              author: values,
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Художник"
          onChange={(values) =>
            setForm({
              ...form,
              artist: values,
            })
          }
        />
        <BadgeTypeSelect
          placeholder="Жанры"
          onChange={(values) => {
            setForm({
              ...form,
              genres: values.map((genre) => genre.value),
            });
          }}
          elements={MangaGenres}
        />
        <BadgeTypeSelect
          placeholder="Теги"
          onChange={(values) => {
            setForm({
              ...form,
              tags: values.map((tag) => tag.value),
            });
          }}
          elements={MangaTags}
        />
        <BadgeTypeSelect
          placeholder="Команды"
          onSearch={handleTeamSearch}
          onChange={(selectedTeams) => {
            setForm({
              ...form,
              translationTeams: selectedTeams.map((team) => String(team.index)),
            });
          }}
          elements={searchTeams.map((team) => {
            return {
              index: team._id,
              value: team.name,
            };
          })}
        />
        <Input
          placeholder="Описание"
          type="textarea"
          onChange={(e) =>
            setForm({
              ...form,
              description: e,
            })
          }
        />
        <Input
          placeholder="Ссылка"
          type="input"
          onChange={(e) =>
            setForm({
              ...form,
              alternativeName: e,
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Автоматически генерируется, используйте это значение, если вы хотите
            иметь пользовательский URL slug
          </WarningText>
        </WarningBlock>
        <Checkbox
          placeholder="Для Возрослых"
          cb={(e) =>
            setForm({
              ...form,
              isPorno: e,
            })
          }
        />
        <Checkbox
          placeholder="Лицензированная"
          cb={(e) =>
            setForm({
              ...form,
              license: e,
            })
          }
        />
        <Input
          placeholder="Описание Кнопки"
          type="input"
          onChange={(e) =>
            setForm({
              ...form,
              textForButton: e,
            })
          }
        />
        <Input
          placeholder="Ссылка На Соц. Сеть"
          type="input"
          onChange={(e) =>
            setForm({
              ...form,
              telegram: e,
            })
          }
        />
        <button
          className="button-filled"
          style={{ margin: "auto" }}
          onClick={() => submit()}
        >
          Сохранить
        </button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          message={error}
          action={action}
        />
      </SettingsBlockGridWrapper>
    </>
  );
};

export default AddTitlePageForm;
