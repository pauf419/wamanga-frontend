"use client";

import React, { useState } from "react";
import {
  Block,
  ChapterControllsBlock,
  ChaptersController,
  ChaptersControlls,
  ControllerDisabledMessage,
  HeaderBottom,
  HeaderSC,
  PagePopup,
  PagePopupWrapper,
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
import { DisplaysWhenMobile, HidesWhenMobile } from "../styled";

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
}

const ReaderHeader = ({
  title,
  chapter,
  page,
  setSettingsSidebarActive,
  goToPage,
  setChaptersSidebarActive,
}: Props) => {
  const [sidebarActive, setSidebarActive] = React.useState<boolean>(false);
  const [pagePopupActive, setPagePopupActive] = useState<boolean>(false);

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
      <HeaderSC>
        <Block>
          <ToggleButton onClick={toggleSidebar}>
            <SideBarToggleIcon />
          </ToggleButton>
          <Spacer />
          <a
            href={`/comics/${title.alternativeName}`}
            className="button-transparent button-fully-transparent icon-button-inline"
          >
            <ReturnIcon />
            <HidesWhenMobile>{title.name}</HidesWhenMobile>
            <DisplaysWhenMobile>К тайтлу</DisplaysWhenMobile>
          </a>
        </Block>
        <ChapterControllsBlock>
          <ChaptersController
            $disabled={!chapter.prevChapter}
            onClick={(e) => {
              if (!chapter.prevChapter) {
                e.preventDefault();
                return false;
              }
            }}
            href={`/reader/${title.alternativeName}/${chapter.prevChapter?._id}`}
          >
            <ControllerDisabledMessage>
              Упс, это первый раздел
            </ControllerDisabledMessage>
            <ArrowLeft />
          </ChaptersController>
          <ChaptersControlls onClick={() => setChaptersSidebarActive(true)}>
            {chapter.title}
            <HidesWhenMobile>
              {chapter.description ? `: ${chapter.description}` : ""}
            </HidesWhenMobile>
          </ChaptersControlls>
          <ChaptersController
            $disabled={!chapter.nextChapter}
            onClick={(e) => {
              if (!chapter.nextChapter) {
                e.preventDefault();
                return false;
              }
            }}
            href={`/reader/${title.alternativeName}/${chapter.nextChapter?._id}`}
          >
            <ArrowRight />
            <ControllerDisabledMessage>
              Упс, это последний раздел
            </ControllerDisabledMessage>
          </ChaptersController>
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
        <HeaderBottom>
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
    </>
  );
};

export default ReaderHeader;
