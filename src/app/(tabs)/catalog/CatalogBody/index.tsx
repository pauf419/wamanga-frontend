"use client";

import React, { useEffect, useState } from "react";
import {
  Body,
  Container,
  DropdownsWrapper,
  FiltersBlurer,
  FiltersContent,
  FiltersWrapper,
  Header,
  HeaderGroup,
  NoTitlesWrapper,
  OverviewWrapper,
  SortingButton,
  TitlesWrapper,
} from "../styled";
import { Dropdown } from "@/components/Dropdown";
import SortingIcon from "@icons/svg/sorting.svg";
import SortingIconDesc from "@icons/svg/sorting-desc.svg";
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
import type { Comic } from "@/api/types/comic";
import { searchManga, StatusType } from "@/api/title";
import { ComicsType } from "@/api/title";
import { PegiType } from "@/api/title";
import {
  NoChaptersMessage,
  NoChaptersText,
  NoImage,
} from "@/components/Chapters/styled";
import { AdsFrame } from "@/components/AdsFrame";
import { AdsFrameNames } from "@/api/types/settings";
import {
  DisplaysWhenMobile,
  HidesWhenMobile,
} from "@/components/Adaptive/styled";

interface Props {
  defaultTitles: Comic[];
}

const CatalogBody = ({ defaultTitles }: Props) => {
  const LIMIT = 30;
  const [filtersActive, setFiltersActive] = useState<boolean>(false);
  const [filtersFixed, setFiltersFixed] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [titles, setTitles] = useState<Comic[]>(defaultTitles);
  const [mangaType, setMangaType] = useState<ComicsType[]>([]);
  const [translationStatus, setTranslationStatus] = useState<StatusType[]>([]);
  const [mangaStatus, setMangaStatus] = useState<StatusType[]>([]);
  const [sortKey, setSortKey] = useState<number>();
  const [sortOrder, setSortOrder] = useState<string>();
  const [genres, setGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [pegi, setPegi] = useState<PegiType[]>([]);

  // Set filtersFixed depending on screen size
  useEffect(() => {
    const checkWidth = () => {
      setFiltersFixed(window.innerWidth >= 1200);
    };

    checkWidth(); // Set on mount

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const filterTitles = async (paginating: boolean = false) => {
    if (!paginating) {
      setOffset(0);
    } else {
      setCanLoadMore(true);
    }

    setLoading(true);
    try {
      const fetched = await searchManga(
        mangaType,
        translationStatus,
        mangaStatus,
        genres,
        tags,
        pegi,
        sortKey,
        sortOrder,
        paginating ? offset : 0,
        LIMIT
      );
      if (paginating) {
        setTitles((prev) => [...prev, ...fetched]);
      } else {
        setTitles(fetched);
      }
      if (fetched.length < LIMIT) setCanLoadMore(false);
      else setCanLoadMore(true);
    } catch (e) {
      setCanLoadMore(false);
      if (!paginating) {
        setTitles([]);
      }
    }
    setLoading(false);
    console.log(filtersFixed);
    if (!filtersFixed) setFiltersActive(true);
  };

  useEffect(() => {
    if (offset !== 0) filterTitles(true);
  }, [offset]);

  useEffect(() => {
    if (sortOrder) filterTitles();
  }, [sortOrder]);

  useEffect(() => {
    if (sortKey !== undefined) filterTitles();
  }, [sortKey]);

  return (
    <Container>
      <Body>
        <Header>
          <HeaderGroup>
            <Dropdown
              cb={(e) => setSortKey(e.key)}
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
              adaptive
            />
            <SortingButton
              onClick={() =>
                setSortOrder((prev) => {
                  if (prev === "ASCENDING") return "DESCENDING";
                  if (prev === "DESCENDING") return "ASCENDING";
                  return "ASCENDING";
                })
              }
            >
              {sortOrder === "ASCENDING" ? (
                <SortingIconDesc />
              ) : (
                <SortingIcon />
              )}
            </SortingButton>
          </HeaderGroup>
          <HidesWhenMobile>
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
          </HidesWhenMobile>
          <DisplaysWhenMobile>
            <button
              className="icon-button icon-button-primary"
              onClick={() => setFiltersActive(!filtersActive)}
            >
              <FiltersIcon className="icon-button-icon" />
            </button>
          </DisplaysWhenMobile>
        </Header>
        <OverviewWrapper>
          <AdsFrame frameName={AdsFrameNames.CatalogTop} />
          {titles.length ? (
            <TitlesWrapper>
              {titles.map((el, i) => (
                <ComicPreviewVertical comic={el} key={el._id} />
              ))}
            </TitlesWrapper>
          ) : (
            <NoTitlesWrapper>
              <NoChaptersMessage>
                <NoImage src="/no-comments.png" />
                <NoChaptersText>
                  По вашему запросу ничего не найдено...
                </NoChaptersText>
              </NoChaptersMessage>
            </NoTitlesWrapper>
          )}

          {titles.length && canLoadMore ? (
            <button
              className="button-transparent"
              onClick={() => setOffset((prev) => prev + LIMIT)}
            >
              Показать больше
            </button>
          ) : (
            <></>
          )}
          <AdsFrame frameName={AdsFrameNames.CatalogBottom} />
        </OverviewWrapper>
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
            <CatalogDropdown
              first
              placeholder={`Категория ${mangaType.length ? `(${mangaType.length})` : ""}`}
            >
              <Checkbox
                placeholder={ComicsType.Manga}
                cb={(b) => {
                  if (!b) {
                    return setMangaType((prev) => {
                      return prev.filter((type) => type !== ComicsType.Manga);
                    });
                  }
                  return setMangaType((prev) => [...prev, ComicsType.Manga]);
                }}
              />
              <Checkbox
                placeholder={ComicsType.Manhva}
                cb={(b) => {
                  if (!b) {
                    return setMangaType((prev) => {
                      return prev.filter((type) => type !== ComicsType.Manhva);
                    });
                  }
                  return setMangaType((prev) => [...prev, ComicsType.Manhva]);
                }}
              />
              <Checkbox
                placeholder={ComicsType.Manhua}
                cb={(b) => {
                  if (!b) {
                    return setMangaType((prev) => {
                      return prev.filter((type) => type !== ComicsType.Manhua);
                    });
                  }
                  return setMangaType((prev) => [...prev, ComicsType.Manhua]);
                }}
              />
              <Checkbox
                placeholder={ComicsType.Comic}
                cb={(b) => {
                  if (!b) {
                    return setMangaType((prev) => {
                      return prev.filter((type) => type !== ComicsType.Comic);
                    });
                  }
                  return setMangaType((prev) => [...prev, ComicsType.Comic]);
                }}
              />
              <Checkbox
                placeholder={ComicsType.Manuscript}
                cb={(b) => {
                  if (!b) {
                    return setMangaType((prev) => {
                      return prev.filter(
                        (type) => type !== ComicsType.Manuscript
                      );
                    });
                  }
                  return setMangaType((prev) => [
                    ...prev,
                    ComicsType.Manuscript,
                  ]);
                }}
              />
            </CatalogDropdown>
            <CatalogDropdown
              placeholder={`Статус перевода ${translationStatus.length ? `(${translationStatus.length})` : ""}`}
            >
              <Checkbox
                placeholder={StatusType.Started}
                cb={(b) => {
                  if (!b) {
                    return setTranslationStatus((prev) => {
                      return prev.filter((type) => type !== StatusType.Started);
                    });
                  }
                  return setTranslationStatus((prev) => [
                    ...prev,
                    StatusType.Started,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Finished}
                cb={(b) => {
                  if (!b) {
                    return setTranslationStatus((prev) => {
                      return prev.filter(
                        (type) => type !== StatusType.Finished
                      );
                    });
                  }
                  return setTranslationStatus((prev) => [
                    ...prev,
                    StatusType.Finished,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Paused}
                cb={(b) => {
                  if (!b) {
                    return setTranslationStatus((prev) => {
                      return prev.filter((type) => type !== StatusType.Paused);
                    });
                  }
                  return setTranslationStatus((prev) => [
                    ...prev,
                    StatusType.Paused,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Abandoned}
                cb={(b) => {
                  if (!b) {
                    return setTranslationStatus((prev) => {
                      return prev.filter(
                        (type) => type !== StatusType.Abandoned
                      );
                    });
                  }
                  return setTranslationStatus((prev) => [
                    ...prev,
                    StatusType.Abandoned,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Announced}
                cb={(b) => {
                  if (!b) {
                    return setTranslationStatus((prev) => {
                      return prev.filter(
                        (type) => type !== StatusType.Announced
                      );
                    });
                  }
                  return setTranslationStatus((prev) => [
                    ...prev,
                    StatusType.Announced,
                  ]);
                }}
              />
            </CatalogDropdown>
            <CatalogDropdown
              placeholder={`Статус тайтла ${mangaStatus.length ? `(${mangaStatus.length})` : ""}`}
            >
              <Checkbox
                placeholder={StatusType.Started}
                cb={(b) => {
                  if (!b) {
                    return setMangaStatus((prev) => {
                      return prev.filter((type) => type !== StatusType.Started);
                    });
                  }
                  return setMangaStatus((prev) => [
                    ...prev,
                    StatusType.Started,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Finished}
                cb={(b) => {
                  if (!b) {
                    return setMangaStatus((prev) => {
                      return prev.filter(
                        (type) => type !== StatusType.Finished
                      );
                    });
                  }
                  return setMangaStatus((prev) => [
                    ...prev,
                    StatusType.Finished,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Paused}
                cb={(b) => {
                  if (!b) {
                    return setMangaStatus((prev) => {
                      return prev.filter((type) => type !== StatusType.Paused);
                    });
                  }
                  return setMangaStatus((prev) => [...prev, StatusType.Paused]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Abandoned}
                cb={(b) => {
                  if (!b) {
                    return setMangaStatus((prev) => {
                      return prev.filter(
                        (type) => type !== StatusType.Abandoned
                      );
                    });
                  }
                  return setMangaStatus((prev) => [
                    ...prev,
                    StatusType.Abandoned,
                  ]);
                }}
              />
              <Checkbox
                placeholder={StatusType.Announced}
                cb={(b) => {
                  if (!b) {
                    return setMangaStatus((prev) => {
                      return prev.filter(
                        (type) => type !== StatusType.Announced
                      );
                    });
                  }
                  return setMangaStatus((prev) => [
                    ...prev,
                    StatusType.Announced,
                  ]);
                }}
              />
            </CatalogDropdown>
            <CatalogDropdown
              placeholder={`Жанры ${genres.length ? `(${genres.length})` : ""}`}
            >
              <BadgeTypeSelect
                placeholder="Введите жанры"
                elements={MangaGenres}
                onChange={(genres) =>
                  setGenres(genres.map((genre) => genre.value))
                }
              />
            </CatalogDropdown>
            <CatalogDropdown
              placeholder={`Теги ${tags.length ? `(${tags.length})` : ""}`}
            >
              <BadgeTypeSelect
                placeholder="Введите теги"
                elements={MangaTags}
                onChange={(tags) => setTags(tags.map((tag) => tag.value))}
              />
            </CatalogDropdown>
            <CatalogDropdown
              placeholder={`Возрастные ограничения ${pegi.length ? `(${pegi.length})` : ""}`}
            >
              <Checkbox
                placeholder={PegiType.Pegi3}
                cb={(b) => {
                  if (!b) {
                    return setPegi((prev) => {
                      return prev.filter((type) => type !== PegiType.Pegi3);
                    });
                  }
                  return setPegi((prev) => [...prev, PegiType.Pegi3]);
                }}
              />
              <Checkbox
                placeholder={PegiType.Pegi6}
                cb={(b) => {
                  if (!b) {
                    return setPegi((prev) => {
                      return prev.filter((type) => type !== PegiType.Pegi6);
                    });
                  }
                  return setPegi((prev) => [...prev, PegiType.Pegi6]);
                }}
              />
              <Checkbox
                placeholder={PegiType.Pegi12}
                cb={(b) => {
                  if (!b) {
                    return setPegi((prev) => {
                      return prev.filter((type) => type !== PegiType.Pegi12);
                    });
                  }
                  return setPegi((prev) => [...prev, PegiType.Pegi12]);
                }}
              />
              <Checkbox
                placeholder={PegiType.Pegi16}
                cb={(b) => {
                  if (!b) {
                    return setPegi((prev) => {
                      return prev.filter((type) => type !== PegiType.Pegi16);
                    });
                  }
                  return setPegi((prev) => [...prev, PegiType.Pegi16]);
                }}
              />
              <Checkbox
                placeholder={PegiType.Pegi18}
                cb={(b) => {
                  if (!b) {
                    return setPegi((prev) => {
                      return prev.filter((type) => type !== PegiType.Pegi18);
                    });
                  }
                  return setPegi((prev) => [...prev, PegiType.Pegi18]);
                }}
              />
            </CatalogDropdown>
            <CatalogDropdown last placeholder="Дата выхода">
              <RangeSlider />
            </CatalogDropdown>
          </DropdownsWrapper>
          <button
            disabled={loading}
            className={`outline-button button-filled ${loading ? "primary-disabled" : ""}`}
            onClick={() => filterTitles()}
          >
            {loading ? "Загрузка..." : "Применить"}
          </button>
        </FiltersContent>
      </FiltersWrapper>
    </Container>
  );
};

export default CatalogBody;
