"use client";

import React, { useState } from "react";
import {
  Body,
  Container,
  DropdownsWrapper,
  FiltersBlurer,
  FiltersContent,
  FiltersWrapper,
  Header,
  HeaderGroup,
  SortingButton,
  TitlesWrapper,
} from "../styled";
import { Dropdown } from "@/components/Dropdown";
import SortingIcon from "@icons/svg/sorting.svg";
import { getTeamProjects } from "@/api/mocks/queries/use-get-team-projects";
import { ComicPreviewVertical } from "../../home/ComicPreviewVertical";
import ReloadIcon from "@icons/svg/reload.svg";
import CatalogDropdown from "@/components/CatalogDropdown";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import FiltersIcon from "@icons/svg/filters.svg";
import { Checkbox } from "@/components/Checkbox";
import RangeSlider from "@/components/RangeInput";
import FiltersBeyond from "@assets/icons/svg/filters-position-beyond.svg";
import FiltersSticky from "@assets/icons/svg/filters-position-sticky.svg";

const CatalogBody = () => {
  const [filtersActive, setFiltersActive] = useState<boolean>(false);
  const [filtersFixed, setFiltersFixed] = useState<boolean>(true);

  const titles = getTeamProjects();

  return (
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
            </CatalogDropdown>
            <CatalogDropdown placeholder="Теги">
              <BadgeTypeSelect
                placeholder="Введите теги"
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
  );
};

export default CatalogBody;
