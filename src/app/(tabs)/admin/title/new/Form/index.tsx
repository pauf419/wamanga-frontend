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
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { Dropdown } from "@/components/Dropdown";
import type { CreateTitleDto } from "@/api/title";
import { ComicsType, createTitle, PegiType, StatusType } from "@/api/title";
import { BadgeTypeSelectManual } from "@/components/BadgeTypeSelect/Manual";
import type { Team } from "@/api/types/team";
import { simpleSearch } from "@/api/team";
import type { Comic } from "@/api/types/comic";
import { IconButton, Snackbar, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import CloseIcon from "@icons/svg/close.svg";

const AddTitlePageForm = () => {
  const [error, setError] = useState<string>();
  const [posterBlob, setPosterBlob] = useState<any>(null);
  const [posterUrl, setPosterUrl] = useState<string>("");
  const [bannerBlob, setBannerBlob] = useState<any>(null);
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [searchTeams, setSearchTeams] = useState<Team[]>([]);
  const [form, setForm] = useState<Comic>({
    name: "",

    description: "",

    altEnglishName: [],

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
      const title = await createTitle(form, posterBlob, bannerBlob);
      router.push(`/comics/${title.alternativeName}`);
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        setError(e.response.data.message);
        handleClick();
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
              name: value,
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
          placeholder="Язык По Умолчанию"
          type="input"
          onChange={(value) => null}
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
        <Input
          placeholder="Общее количество глав"
          type="input"
          onChange={(value) =>
            setForm({
              ...form,
              totalChapters: Number(value),
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
                  name: "Manga",
                },
                {
                  key: ComicsType.Manhva,
                  name: "Webtoon Manhva",
                },
                {
                  key: ComicsType.Manhua,
                  name: "Webtoon Manhua",
                },
                {
                  key: ComicsType.Comic,
                  name: "Comic",
                },
                {
                  key: ComicsType.LifeComic,
                  name: "Life Comic",
                },
                {
                  key: ComicsType.WebComic,
                  name: "Web Comic",
                },
                {
                  key: ComicsType.Manuscript,
                  name: "Manuscript",
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
              defaultIndex={0}
            />
          </FormFlexDropdown>
          <FormFlexDropdown>
            <b>Год релиза</b>
            <Dropdown
              cb={(value) =>
                setForm({
                  ...form,
                  year: Number(value.key),
                })
              }
              items={[
                { key: "2025", name: "2025" },
                { key: "2024", name: "2024" },
                { key: "2023", name: "2023" },
                { key: "2022", name: "2022" },
                { key: "2021", name: "2021" },
                { key: "2020", name: "2020" },
                { key: "2019", name: "2019" },
                { key: "2018", name: "2018" },
                { key: "2017", name: "2017" },
                { key: "2016", name: "2016" },
                { key: "2015", name: "2015" },
                { key: "2014", name: "2014" },
                { key: "2013", name: "2013" },
                { key: "2012", name: "2012" },
                { key: "2011", name: "2011" },
                { key: "2010", name: "2010" },
                { key: "2009", name: "2009" },
                { key: "2008", name: "2008" },
                { key: "2007", name: "2007" },
                { key: "2006", name: "2006" },
                { key: "2005", name: "2005" },
                { key: "2004", name: "2004" },
                { key: "2003", name: "2003" },
                { key: "2002", name: "2002" },
                { key: "2001", name: "2001" },
                { key: "2000", name: "2000" },
                { key: "1999", name: "1999" },
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
              defaultIndex={0}
            />
          </FormFlexDropdown>
          <Tooltip title="Эта функция еще в разработке">
            <FormFlexDropdown>
              <b>Загрузка глав</b>
              <Dropdown
                cb={(e) => null}
                items={[
                  {
                    key: "xd",
                    name: "hello",
                  },
                  {
                    key: "xd1",
                    name: "hello1",
                  },
                  {
                    key: "xd21",
                    name: "hello12",
                  },
                ]}
                defaultIndex={1}
              />
            </FormFlexDropdown>
          </Tooltip>
        </FormTreflex>
        <BadgeTypeSelectManual
          placeholder="Формат выпуска"
          onChange={(values) =>
            setForm({
              ...form,
              releaseFormat: values,
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
        />
        <BadgeTypeSelect
          placeholder="Теги"
          onChange={(values) => {
            setForm({
              ...form,
              tags: values.map((tag) => tag.value),
            });
          }}
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
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Автоматически генерируется, используйте это значение, если вы хотите
            иметь пользовательский URL slug
          </WarningText>
        </WarningBlock>
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
