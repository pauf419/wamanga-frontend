"use client";

import React, { useState } from "react";
import {
  Body,
  CatalogSC,
  Container,
  DropdownsWrapper,
  FiltersBlurer,
  FiltersContent,
  FiltersWrapper,
  Header,
  HeaderGroup,
  SortingButton,
  TitlesWrapper,
} from "./styled";
import { Dropdown } from "@/components/Dropdown";
import SortingIcon from "@icons/svg/sorting.svg";
import { getTeamProjects } from "@/api/mocks/queries/use-get-team-projects";
import { ComicPreviewVertical } from "../home/ComicPreviewVertical";
import ReloadIcon from "@icons/svg/reload.svg";
import CatalogDropdown from "@/components/CatalogDropdown";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import FiltersIcon from "@icons/svg/filters.svg";
import { Checkbox } from "@/components/Checkbox";
import RangeSlider from "@/components/RangeInput";
import FiltersBeyond from "@assets/icons/svg/filters-position-beyond.svg";
import FiltersSticky from "@assets/icons/svg/filters-position-sticky.svg";

const CatalogPage = () => {
  const [filtersActive, setFiltersActive] = useState<boolean>(false);
  const [filtersFixed, setFiltersFixed] = useState<boolean>(true);

  const titles = getTeamProjects();

  return (
    <CatalogSC isImageBehind>
      <Container>
        <Body>
          <Header>
            <HeaderGroup>
              <Dropdown
                cb={() => null}
                items={[
                  {
                    key: 0,
                    name: "По новизне",
                  },
                  {
                    key: 1,
                    name: "По дате выхода",
                  },
                  { key: 2, name: "По количеству просмотров" },
                  { key: 3, name: "По количеству лайков" },
                  {
                    key: 4,
                    name: "По последним обновлениям",
                  },
                ]}
              />
              <SortingButton>
                <SortingIcon />
              </SortingButton>
            </HeaderGroup>
            <HeaderGroup>
              <div className="mini-switch-wrapper switch-minimal">
                <div
                  className={`mini-switch-toggler ${filtersFixed === false && "mini-switch-active"}`}
                  aria-disabled={filtersFixed === false}
                  onClick={() => setFiltersFixed(false)}
                >
                  <FiltersBeyond className="mini-switch-icon" />
                </div>
                <div
                  className={`mini-switch-toggler ${filtersFixed === true && "mini-switch-active"}`}
                  aria-disabled={filtersFixed === true}
                  onClick={() => setFiltersFixed(true)}
                >
                  <FiltersSticky className="mini-switch-icon" />
                </div>
              </div>
              <button
                className="icon-button icon-button-primary"
                onClick={() => setFiltersActive(!filtersActive)}
              >
                <FiltersIcon className="icon-button-icon" />
                <span>Фильтры</span>
              </button>
            </HeaderGroup>
          </Header>
          <TitlesWrapper>
            {titles.data.map((el, i) => (
              <ComicPreviewVertical comic={el} key={i} />
            ))}
          </TitlesWrapper>
        </Body>
        <FiltersBlurer
          $active={!filtersActive && !filtersFixed}
          onClick={() => setFiltersActive(true)}
        ></FiltersBlurer>
        <FiltersWrapper $active={filtersActive} $beyond={!filtersFixed}>
          <FiltersContent>
            <button className="outline-button">
              <ReloadIcon />
              Аннулировать фильтры
            </button>
            <DropdownsWrapper>
              <CatalogDropdown first placeholder="Категория">
                <Checkbox placeholder="Мальопис" cb={() => null} />
                <Checkbox placeholder="Манґа" cb={() => null} />
                <Checkbox placeholder="Манхва" cb={() => null} />
                <Checkbox placeholder="Маньхва" cb={() => null} />
                <Checkbox placeholder="Вебкомiкс" cb={() => null} />
                <Checkbox placeholder="Комiкс" cb={() => null} />
                <Checkbox placeholder="Iнше" cb={() => null} />
                <Checkbox placeholder="Ранобе" cb={() => null} />
              </CatalogDropdown>
              <CatalogDropdown placeholder="Статус перевода">
                <Checkbox placeholder="Скоро" cb={() => null} />
                <Checkbox placeholder="Переводится" cb={() => null} />
                <Checkbox placeholder="Приостановлено" cb={() => null} />
                <Checkbox placeholder="Завершено" cb={() => null} />
              </CatalogDropdown>
              <CatalogDropdown placeholder="Статус тайтла">
                <Checkbox placeholder="Скоро" cb={() => null} />
                <Checkbox placeholder="Выдается" cb={() => null} />
                <Checkbox placeholder="Приостановлено" cb={() => null} />
                <Checkbox placeholder="Завершен" cb={() => null} />
              </CatalogDropdown>
              <CatalogDropdown placeholder="Жанры">
                <BadgeTypeSelect
                  placeholder="Введите жанры"
                  elements={[
                    { index: 0, value: "Ігри" },
                    { index: 1, value: "Ісекай" },
                    { index: 2, value: "Історія" },
                    { index: 3, value: "Апокаліпсис" },
                    { index: 4, value: "Бойовик" },
                    { index: 5, value: "Бойові мистецтва" },
                    { index: 6, value: "Ваншот" },
                    { index: 7, value: "Вестерн" },
                    { index: 8, value: "Яой" },
                    { index: 9, value: "Юрі" },
                    { index: 10, value: "Шьонен-ай" },
                    { index: 11, value: "Шьонен" },
                    { index: 12, value: "Шьодзьо-ай" },
                    { index: 13, value: "Шьодзьо" },
                    { index: 14, value: "Фентезі" },
                    { index: 15, value: "Філософія" },
                    { index: 16, value: "Фантастика" },
                    { index: 17, value: "Триллер" },
                    { index: 18, value: "Трагедія" },
                    { index: 19, value: "Темне фентезі" },
                    { index: 20, value: "Сентай" },
                    { index: 21, value: "Спокон" },
                    { index: 22, value: "Сейнен" },
                    { index: 23, value: "Романтика" },
                    { index: 24, value: "Психологія" },
                    { index: 25, value: "Пригоди" },
                    { index: 26, value: "Постапокаліпсис" },
                    { index: 27, value: "Поліція" },
                    { index: 28, value: "Повсякденність" },
                    { index: 29, value: "Пародія" },
                    { index: 30, value: "Омегаверс" },
                    { index: 31, value: "Наукова фантастика" },
                    { index: 32, value: "Надприродне" },
                    { index: 33, value: "Містика" },
                    { index: 34, value: "Меха" },
                    { index: 35, value: "Махо-шьонен" },
                    { index: 36, value: "Махо-шьодзьо" },
                    { index: 37, value: "Комедія" },
                    { index: 38, value: "Йонкома" },
                    { index: 39, value: "Жахи" },
                    { index: 40, value: "Еччі" },
                    { index: 41, value: "Еротика" },
                    { index: 42, value: "Екшн" },
                    { index: 43, value: "Драма" },
                    { index: 44, value: "Додзінші" },
                    { index: 45, value: "Детектив" },
                    { index: 46, value: "Джосей" },
                    { index: 47, value: "Деменція" },
                    { index: 48, value: "Готика" },
                    { index: 49, value: "Героїчне фентезі" },
                  ]}
                />
              </CatalogDropdown>
              <CatalogDropdown placeholder="Теги">
                <BadgeTypeSelect
                  placeholder="Введите теги"
                  elements={[
                    { index: 0, value: "Імперії" },
                    { index: 1, value: "Артефакти" },
                    { index: 2, value: "Аристократія" },
                    { index: 3, value: "Бойовик" },
                    { index: 4, value: "Божевілля" },
                    { index: 5, value: "Якудза" },
                    { index: 6, value: "Школа" },
                    { index: 7, value: "Чудовиська" },
                    { index: 8, value: "Фетиш" },
                    { index: 9, value: "Чарівники" },
                    { index: 10, value: "Університет" },
                    { index: 11, value: "Тварини" },
                    { index: 12, value: "Спорт" },
                    { index: 13, value: "Суперсила" },
                    { index: 14, value: "Самураї" },
                    { index: 15, value: "Система" },
                    { index: 16, value: "Реінкарнація" },
                    { index: 17, value: "Пригоди" },
                    { index: 18, value: "Підземелля" },
                    { index: 19, value: "Поліція" },
                    { index: 20, value: "Політика" },
                    { index: 21, value: "Подорожі у часі" },
                    { index: 22, value: "Парапсихологія" },
                    { index: 23, value: "Побут" },
                    { index: 24, value: "Одержимість" },
                    { index: 25, value: "Обмін тілами" },
                    { index: 26, value: "Насилля" },
                    { index: 27, value: "Бої на мечах" },
                    { index: 28, value: "Бої" },
                    { index: 29, value: "Вампіри" },
                    { index: 30, value: "Виживання" },
                    { index: 31, value: "Війна" },
                    { index: 32, value: "ГГ жінка" },
                    { index: 33, value: "ГГ розумний" },
                    { index: 34, value: "ГГ чоловік" },
                    { index: 35, value: "Гарем" },
                    { index: 36, value: "Гендерна інтрига" },
                    { index: 37, value: "Гільдії" },
                    { index: 38, value: "Дорослі відносини" },
                    { index: 39, value: "Для дітей" },
                    { index: 40, value: "Дорослі стосунки" },
                    { index: 41, value: "Дружба" },
                    { index: 42, value: "Друзі дитинства" },
                    { index: 43, value: "Екшн" },
                    { index: 44, value: "Епізод життя" },
                    { index: 45, value: "Жорстокість" },
                    { index: 46, value: "Еспер" },
                    { index: 47, value: "Звіролюди" },
                    { index: 48, value: "Зміна статі" },
                    { index: 49, value: "Злочин" },
                    { index: 50, value: "Казка" },
                    { index: 51, value: "Космос" },
                    { index: 52, value: "Кохання" },
                    { index: 53, value: "Культивація" },
                    { index: 54, value: "Кулінарія" },
                    { index: 55, value: "Кіберпанк" },
                    { index: 56, value: "Любовний трикутник" },
                    { index: 57, value: "Магія" },
                    { index: 58, value: "Мафія" },
                    { index: 59, value: "Музика" },
                    { index: 60, value: "Медицина" },
                    { index: 61, value: "Міфічні істоти" },
                  ]}
                />
              </CatalogDropdown>
              <CatalogDropdown placeholder="Возрастные ограничения">
                <Checkbox placeholder="0+" cb={() => null} />
                <Checkbox placeholder="16+" cb={() => null} />
                <Checkbox placeholder="18+" cb={() => null} />
              </CatalogDropdown>
              <CatalogDropdown last placeholder="Дата выхода">
                <RangeSlider />
              </CatalogDropdown>
            </DropdownsWrapper>
            <button className="outline-button button-filled">Применить</button>
          </FiltersContent>
        </FiltersWrapper>
      </Container>
    </CatalogSC>
  );
};

export default CatalogPage;
