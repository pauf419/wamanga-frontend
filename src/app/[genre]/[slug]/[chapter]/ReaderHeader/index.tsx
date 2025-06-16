"use client";

import React, { useEffect, useState } from "react";
import {
  Block,
  ChapterControllsBlock,
  ChaptersController,
  ChaptersControlls,
  ControllerDisabledMessage,
  HeaderBottom,
  HeaderSC,
  MobileReaderButtonWrapper,
  PagePopup,
  PagePopupWrapper,
  ReaderMangaTitle,
  SettingsBlock,
  SettingsBlurer,
  Spacer,
  ToggleButton,
} from "./styled";
import SideBarToggleIcon from "@icons/svg/sidebar-mobile-toggle.svg";
import SideBarMobile from "@/components/SideBarMobile";
import { SortingButton, SortingIcon } from "@/app/team/[slug]/styled";
import ReaderBookmarkIcon from "@icons/svg/reader-bookmark.svg";
import ListIcon from "@icons/svg/list.svg";
import BellIcon from "@icons/svg/bell.svg";
import GearIcon from "@icons/svg/gear.svg";
import type { Comic } from "@/api/types/comic";
import ArrowLeft from "@icons/svg/arrow-left.svg";
import ArrowRight from "@icons/svg/arrow-right.svg";
import ReturnIcon from "@icons/svg/return.svg";
import type { ChapterPage } from "@/api/types/chapter-page";
import type { Chapter } from "@/api/types/chapter";
import type { Volume } from "@/api/types/volume";
import {
  DisplaysWhenMobile,
  HidesWhenMobile,
  ReaderButton,
  ReaderButtonClose,
  ReaderButtonWrapper,
} from "../styled";
import { Tooltip } from "@mui/material";
import Link from "next/link";

export interface ModalState {
  signUp: boolean;
  signIn: boolean;
}

interface Props {
  title: Comic;
  chapter: Chapter;
  page: ChapterPage;
  setSettingsSidebarActive: (b: boolean) => void;
  goToPage: (page: ChapterPage) => void;
  setChaptersSidebarActive: (b: boolean) => void;
  menusActive: boolean;
}

const ReaderHeader = ({
  title,
  chapter,
  page,
  setSettingsSidebarActive,
  goToPage,
  setChaptersSidebarActive,
  menusActive,
}: Props) => {
  const [sidebarActive, setSidebarActive] = React.useState<boolean>(false);
  const [pagePopupActive, setPagePopupActive] = useState<boolean>(false);
  const [buttonActive, setButtonActive] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebarActive((prev) => !prev);
  };

  const handleGoToPage = (page: ChapterPage) => {
    setPagePopupActive(false);
    goToPage(page);
  };

  return (
    <>
      <SideBarMobile active={sidebarActive} setActive={setSidebarActive} />
      <HeaderSC $active={menusActive}>
        <Block>
          <ToggleButton onClick={toggleSidebar}>
            <SideBarToggleIcon />
          </ToggleButton>
          <Spacer />
          <Link
            href={`/${title.seoGenre}/${title.alternativeName}`}
            className="button-transparent button-fully-transparent icon-button-inline"
          >
            <ReturnIcon />
            <HidesWhenMobile>
              <ReaderMangaTitle>{title.name}</ReaderMangaTitle>
            </HidesWhenMobile>
            <DisplaysWhenMobile>К тайтлу</DisplaysWhenMobile>
          </Link>
        </Block>
        <ChapterControllsBlock>
          {chapter.prevChapter ? (
            <ChaptersController
              $disabled={!chapter.prevChapter}
              onClick={(e) => {
                if (!chapter.prevChapter) {
                  e.preventDefault();
                  return false;
                }
              }}
              href={`/${title.seoGenre}/${title.alternativeName}/${chapter.prevChapter?.slug}`}
            >
              <ArrowLeft />
            </ChaptersController>
          ) : (
            <Tooltip title="Упс, это первая глава">
              <ChaptersController
                href={`/${title.seoGenre}/${title.alternativeName}/${chapter.slug}}`}
                $disabled={!chapter.prevChapter}
                onClick={(e) => {
                  if (!chapter.prevChapter) {
                    e.preventDefault();
                    return false;
                  }
                }}
              >
                <ArrowLeft />
              </ChaptersController>
            </Tooltip>
          )}
          <ChaptersControlls onClick={() => setChaptersSidebarActive(true)}>
            {chapter.title}
            <HidesWhenMobile>
              {chapter.description ? `: ${chapter.description}` : ""}
            </HidesWhenMobile>
          </ChaptersControlls>
          {chapter.nextChapter ? (
            <ChaptersController
              $disabled={!chapter.nextChapter}
              onClick={(e) => {
                if (!chapter.nextChapter) {
                  e.preventDefault();
                  return false;
                }
              }}
              href={`/${title.seoGenre}/${title.alternativeName}/${chapter.nextChapter?.slug}`}
            >
              <ArrowRight />
            </ChaptersController>
          ) : (
            <Tooltip title="Упс, это последняя глава">
              <ChaptersController
                href={`/${title.seoGenre}/${title.alternativeName}/${chapter.slug}`}
                $disabled={!chapter.nextChapter}
                onClick={(e) => {
                  if (!chapter.nextChapter) {
                    e.preventDefault();
                    return false;
                  }
                }}
              >
                <ArrowRight />
              </ChaptersController>
            </Tooltip>
          )}
        </ChapterControllsBlock>
        <HidesWhenMobile>
          <SettingsBlock>
            <SettingsBlurer
              $notadaptive
              $active={pagePopupActive}
              onClick={() => setPagePopupActive(false)}
            />
            <SortingButton
              onClick={() => !pagePopupActive && setPagePopupActive(true)}
            >
              <PagePopupWrapper $active={pagePopupActive} $mobile={false}>
                {chapter.pages.map((el, index) => (
                  <PagePopup
                    onClick={() => handleGoToPage(el)}
                    $active={page.order === el.order}
                    key={index}
                  >
                    Страница {el.order}
                  </PagePopup>
                ))}
              </PagePopupWrapper>
              <span>
                {page.order}
                <div>/</div>
                {chapter.pages.length}
              </span>
            </SortingButton>
            <SortingButton onClick={() => setChaptersSidebarActive(true)}>
              <ListIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
            <SortingButton onClick={() => null}>
              <ReaderBookmarkIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
            <SortingButton onClick={() => setSettingsSidebarActive(true)}>
              <GearIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
            <SortingButton onClick={() => null}>
              <BellIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
          </SettingsBlock>
        </HidesWhenMobile>
      </HeaderSC>
      <DisplaysWhenMobile>
        {title.textForButton && title.telegram && (
          <MobileReaderButtonWrapper $active={menusActive}>
            {buttonActive ? (
              <ReaderButton href={title.telegram}>
                <ReaderButtonClose
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setButtonActive(false);
                  }}
                >
                  X
                </ReaderButtonClose>
                {title.textForButton}
              </ReaderButton>
            ) : (
              <></>
            )}
          </MobileReaderButtonWrapper>
        )}
        <HeaderBottom $active={menusActive}>
          <SettingsBlock>
            <SettingsBlurer
              $notadaptive
              $active={pagePopupActive}
              onClick={() => setPagePopupActive(false)}
            />
            <SortingButton
              onClick={() => !pagePopupActive && setPagePopupActive(true)}
            >
              <PagePopupWrapper $active={pagePopupActive} $mobile>
                {chapter.pages.map((el) => (
                  <PagePopup
                    onClick={() => handleGoToPage(el)}
                    $active={page.order === el.order}
                    key={el.order}
                  >
                    Страница {el.order}
                  </PagePopup>
                ))}
              </PagePopupWrapper>
              <span>
                {page.order}
                <div>/</div>
                {chapter.pages.length}
              </span>
            </SortingButton>
            <SortingButton onClick={() => setChaptersSidebarActive(true)}>
              <ListIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
            <SortingButton onClick={() => null}>
              <ReaderBookmarkIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
            <SortingButton onClick={() => setSettingsSidebarActive(true)}>
              <GearIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
            <SortingButton onClick={() => null}>
              <BellIcon style={{ width: 20, height: 20 }} />
            </SortingButton>
          </SettingsBlock>
        </HeaderBottom>
      </DisplaysWhenMobile>
      <HidesWhenMobile>
        {title.textForButton && title.telegram && (
          <ReaderButtonWrapper>
            {buttonActive ? (
              <ReaderButton href={title.telegram}>
                <ReaderButtonClose
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setButtonActive(false);
                  }}
                >
                  X
                </ReaderButtonClose>
                {title.textForButton}
              </ReaderButton>
            ) : (
              <></>
            )}
          </ReaderButtonWrapper>
        )}
      </HidesWhenMobile>
    </>
  );
};

export default ReaderHeader;
