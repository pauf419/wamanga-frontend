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

const SettingsPageForm = () => {
  const [posterBlob, setPosterBlob] = useState<any>(null);
  const [posterUrl, setPosterUrl] = useState<string>("");

  const savePoster = (url: string, data: string) => {
    setPosterUrl(url);
    setPosterBlob(data);
  };

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
        <Input placeholder="Название" type="input" onChange={(e) => null} />
        <Input
          placeholder="Длинное Название"
          type="input"
          onChange={(e) => null}
        />
        <Input
          placeholder="Футер текст"
          type="textarea"
          onChange={(e) => null}
        />
        <Checkbox placeholder="По Умолчанию Манги Скрыты" cb={(e) => null} />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Установите флажок, чтобы установить скрытый флажок по умолчанию при
            создании комикса.
          </WarningText>
        </WarningBlock>
        <Checkbox placeholder="По Умолчанию Главы Скрыты" cb={(e) => null} />
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
          placeholder="Вкладки меню"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Каждая строка - это дополнительная вкладка меню.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Homepage HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Она отображается в правой части главной страницы.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="All Comics Top HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Он отображается над списком комиксов на вкладке “все комиксы”.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="All Comics Bottom HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Он отображается над списком комиксов на вкладке “все комиксы”.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Comic Top HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Она отображается над “Главами” на вкладке “Комиксы”.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Comic Bottom HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>
            Она отображается над “Главами” на вкладке “Комиксы”.
          </WarningText>
        </WarningBlock>
        <Input
          placeholder="Reader HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Это показано ниже контроллеров Reader.</WarningText>
        </WarningBlock>
        <Input
          placeholder="Banner Top"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Это показано выше сканирования.</WarningText>
        </WarningBlock>
        <Input
          placeholder="Banner Bottom"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Это показано выше сканирования.</WarningText>
        </WarningBlock>
        <Input
          placeholder="Footer HTML"
          type="textarea"
          onChange={(e) => null}
        />
        <WarningBlock>
          <WarningIcon as={InfoIcon} />
          <WarningText>Это показано выше сканирования.</WarningText>
        </WarningBlock>
        <button className="button-filled" style={{ margin: "auto" }}>
          Сохранить
        </button>
      </SettingsBlockGridWrapper>
    </>
  );
};

export default SettingsPageForm;
