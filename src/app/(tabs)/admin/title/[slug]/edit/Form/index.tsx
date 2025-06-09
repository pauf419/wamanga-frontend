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
} from "../../../../styled";
import Input from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { WarningBlock, WarningIcon, WarningText } from "@/app/user/styled";
import InfoIcon from "@icons/svg/info-filled.svg";
import type { BadgeTypeSelectElement } from "@/components/BadgeTypeSelect";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { Dropdown } from "@/components/Dropdown";
import type { CreateTitleDto } from "@/api/title";
import {
  ComicsType,
  createTitle,
  editManga,
  PegiType,
  StatusType,
} from "@/api/title";
import { BadgeTypeSelectManual } from "@/components/BadgeTypeSelect/Manual";
import type { Team } from "@/api/types/team";
import { simpleSearch } from "@/api/team";
import type { Comic } from "@/api/types/comic";
import { IconButton, Snackbar, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import CloseIcon from "@icons/svg/close.svg";
import { MangaGenres, MangaTags } from "../../../new/Form";
import {
  pegiItems,
  statusItems,
  typeItems,
} from "../../../components/DataListEditable/Comic";

interface Props {
  preset: Comic;
}

const EditTitlePageForm = ({ preset }: Props) => {
  const [error, setError] = useState<string>();
  const [posterBlob, setPosterBlob] = useState<any>(null);
  const [posterUrl, setPosterUrl] = useState<string>("");
  const [bannerBlob, setBannerBlob] = useState<any>(null);
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [searchTeams, setSearchTeams] = useState<Team[]>([]);
  const [form, setForm] = useState<Comic>({
    ...preset,
    chapters: [],
    tags: [],
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

  const statusDefault = statusItems.findIndex(
    (item) => item.key === preset.status
  );

  const pegiDefault = pegiItems.findIndex((item) => item.key === preset.pegi);

  const typeDefault = typeItems.findIndex((item) => item.key === preset.type);

  const translationStatusDefault = statusItems.findIndex(
    (item) => item.key === preset.transferStatus
  );

  const submit = async () => {
    try {
      const title = await editManga(form, posterBlob, bannerBlob);
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
      <AdminTitle>Редактирование {preset.name}</AdminTitle>
      <SettingsBlockFlexWrapper>
        <ImageInputWrapper>
          <h4>Обложка</h4>
          <ImageInputExtended
            key={2323}
            defaultImg={preset.imagePath}
            onChange={savePoster}
            type="category"
          />
        </ImageInputWrapper>
        <ImageInputWrapper>
          <h4>Фон</h4>
          <ImageInputExtended
            key={2313}
            defaultImg={preset.bannerPath}
            onChange={saveBanner}
            type="category"
          />
        </ImageInputWrapper>
      </SettingsBlockFlexWrapper>
      <SettingsBlockGridWrapper>
        <Input
          placeholder="Название на русском"
          type="input"
          presetValue={preset.name}
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
          presetValue={preset.englishName}
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
          presetValue={preset.altName.join("\n")}
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
          presetValue={String(preset.year)}
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
              defaultIndex={typeDefault}
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
              defaultIndex={statusDefault}
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
              ]}
              defaultIndex={pegiDefault}
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
              defaultIndex={translationStatusDefault}
            />
          </FormFlexDropdown>
        </FormTreflex>
        <BadgeTypeSelectManual
          placeholder="SEО-жанр"
          preset={[preset.seoGenre]}
          onChange={(values) =>
            setForm({
              ...form,
              seoGenre: values[0],
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Издатель"
          preset={preset.publisher}
          onChange={(values) =>
            setForm({
              ...form,
              publisher: values,
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Автор"
          preset={preset.author}
          onChange={(values) =>
            setForm({
              ...form,
              author: values,
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Художник"
          preset={preset.artist}
          onChange={(values) =>
            setForm({
              ...form,
              artist: values,
            })
          }
        />
        <BadgeTypeSelectManual
          placeholder="Жанры"
          preset={preset.genres}
          onChange={(genres) => {
            setForm({
              ...form,
              genres,
            });
          }}
        />
        <Input
          presetValue={preset.description}
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
          presetValue={preset.alternativeName}
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
          defaultCheckedValue={preset.isPorno}
          cb={(e) =>
            setForm({
              ...form,
              isPorno: e,
            })
          }
        />
        <Checkbox
          defaultCheckedValue={preset.license}
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
          presetValue={preset.textForButton}
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
          presetValue={preset.telegram}
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

export default EditTitlePageForm;
