"use client";

import { ImageInputExtended } from "@/components/ImageInputExtended";
import { useState } from "react";
import {
  AdminTitle,
  ImageInputWrapper,
  SettingsBlockFlexWrapper,
  SettingsBlockGridWrapper,
} from "../../styled";
import Input from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { WarningBlock, WarningIcon, WarningText } from "@/app/user/styled";
import InfoIcon from "@icons/svg/info-filled.svg";
import type { Settings } from "@/api/types/settings";
import React from "react";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@icons/svg/close.svg";
import { updateSettings } from "@/api/settings";

interface Props {
  settingsPreset: Settings;
}

const SettingsPageForm = ({ settingsPreset }: Props) => {
  const [settings, setSettings] = useState<Settings>(settingsPreset);
  const [posterBlob, setPosterBlob] = useState<any>(null);
  const [posterUrl, setPosterUrl] = useState<string>("");

  const savePoster = (url: string, data: string) => {
    setPosterUrl(url);
    setPosterBlob(data);
  };

  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const submit = async () => {
    try {
      await updateSettings(settings);
      setError("Изменения успешно сохранены.");
      setOpen(true);
    } catch (e) {
      console.error(e);
      if (e && typeof e === "object" && "response" in e) {
        const err = e as { response: { data: { message: string } } };
        setError(err.response.data.message);
        handleClick();
      }
    }
  };

  const handleClick = () => {
    setOpen(true);
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
      <AdminTitle>Настройки</AdminTitle>
      <SettingsBlockFlexWrapper>
        <ImageInputWrapper>
          <h4>Логотип</h4>
          <ImageInputExtended
            key={2323}
            defaultImg={posterUrl}
            onChange={savePoster}
            type="category"
          />
        </ImageInputWrapper>
        <ImageInputWrapper>
          <h4>Обложка</h4>
          <ImageInputExtended
            key={2323}
            defaultImg={posterUrl}
            onChange={savePoster}
            type="category"
          />
        </ImageInputWrapper>
      </SettingsBlockFlexWrapper>
      <SettingsBlockGridWrapper>
        <Input
          placeholder="Название"
          type="input"
          presetValue={settings.title}
          onChange={(e) => null}
        />
        <Input
          placeholder="Длинное Название"
          presetValue={settings.longTitle}
          type="input"
          onChange={(e) => null}
        />
        <Checkbox
          placeholder="По Умолчанию Манги Скрыты"
          cb={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                mangasHiddenByDefault: e,
              };
            })
          }
          defaultCheckedValue={settings.mangasHiddenByDefault}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Установите флажок, чтобы установить скрытый флажок по умолчанию при
            создании комикса.
          </WarningText>
        </WarningBlock>
        <Checkbox
          placeholder="По Умолчанию Главы Скрыты"
          cb={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                chaptersHiddenByDefault: e,
              };
            })
          }
          defaultCheckedValue={settings.chaptersHiddenByDefault}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Установите флажок, чтобы установить скрытый флажок по умолчанию при
            создании главы.
          </WarningText>
        </WarningBlock>
        <Checkbox
          placeholder="Установите Первую Страницу В Качестве Миниатюры Главы По Умолчанию."
          cb={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Миниатюра отображается, когда глава связана в соц.сетях. Если флажок
            снят, используется миниатюра комикса.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Homepage HTML Top"
          presetValue={settings.homepageHtmlTop}
          type="textarea"
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                homepageHtmlTop: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Рекламный блок в верхней части главной страницы
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Homepage HTML Bottom"
          presetValue={settings.homepageHtmlBottom}
          type="textarea"
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                homepageHtmlBottom: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Рекламный блок в нижней части главной страницы
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Manga Page HTML Top"
          presetValue={settings.mangaPageHtmlTop}
          type="textarea"
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                mangaPageHtmlTop: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Рекламный блок в разделе &quot;Главы&quot; страницы тайтла
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Manga Page HTML Bottom"
          presetValue={settings.mangaPageHtmlBottom}
          type="textarea"
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                mangaPageHtmlBottom: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Рекламный блок в нижней части страницы тайтла
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Reader Page HTML"
          presetValue={settings.chapterPageHtml}
          type="textarea"
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                chapterPageHtml: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Рекламные блоки в читалке</WarningText>
        </WarningBlock>
        <Input
          placeholder="Catalog Page HTML Top"
          presetValue={settings.catalogPageHtmlTop}
          type="textarea"
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                catalogPageHtmlTop: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Рекламный блок в верхней части каталога</WarningText>
        </WarningBlock>
        <Input
          placeholder="Catalog Page HTML Bottom"
          type="textarea"
          presetValue={settings.catalogPageHtmlBottom}
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                catalogPageHtmlBottom: e,
              };
            })
          }
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Рекламный блок в нижней части каталога.</WarningText>
        </WarningBlock>
        <Input
          placeholder="Footer HTML"
          type="textarea"
          presetValue={settings.footerHtml}
          onChange={(e) =>
            setSettings((prev) => {
              return {
                ...prev,
                footerHtml: e,
              };
            })
          }
        />
        <button
          onClick={() => submit()}
          className="button-filled"
          style={{ margin: "auto" }}
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

export default SettingsPageForm;
