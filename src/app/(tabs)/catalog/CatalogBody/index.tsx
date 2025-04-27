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
import { MangaGenres, MangaTags } from "../../admin/title/new/Form";

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
                elements={MangaGenres}
              />
            </CatalogDropdown>
            <CatalogDropdown placeholder="Теги">
              <BadgeTypeSelect
                placeholder="Введите теги"
                elements={MangaTags}
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
