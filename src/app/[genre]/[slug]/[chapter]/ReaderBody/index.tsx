"use client";

import { getComics } from "@/api/mocks/queries/use-get-comics";
import ReaderHeader from "../ReaderHeader";
import {
  ChaptersBlock,
  Container,
  DisplaysWhenMobile,
  HidesWhenMobile,
  InfoBlock,
  InfoBlockTranslator,
  InfoContainer,
  ReaderButton,
  ReaderContentImage,
  ReaderMain,
  ReaderPageWrapper,
} from "../styled";
import { Comments } from "@/components/Comments";
import { ComicTranslatorMinimized } from "@/components/ComicTranslatorMinimized";
import { getComicTranslator } from "@/api/mocks/queries/use-get-comic-translator";
import { getTitleVolumeConfig } from "@/api/mocks/queries/use-get-title-volume-config";
import { useState, useEffect, useRef } from "react";
import type { Volume } from "@/api/types/volume";
import type { Chapter } from "@/api/types/chapter";
import type { ChapterPage } from "@/api/types/chapter-page";
import {
  ChaptersList,
  ChaptersListElement,
  SegmentButton,
  SegmentContent,
  SegmentIcon,
  SegmentTitle,
  SettingsBlurer,
  SettingsSidebar,
  SidebarBody,
  SidebarBodySegment,
  SidebarHeader,
  SidebarHeaderTools,
} from "../ReaderHeader/styled";
import { SortingButton } from "@/app/team/[slug]/styled";
import RangeInputSingle from "@/components/RangeInputSingle";
import { useQueryParams } from "@/utils/set-query-param";
import type { Comic } from "@/api/types/comic";

import dynamic from "next/dynamic";

const ArrowLeft = dynamic(() => import("@icons/svg/arrow-left.svg"), {
  ssr: false,
});
const ArrowRight = dynamic(() => import("@icons/svg/arrow-right.svg"), {
  ssr: false,
});
const LikeIcon = dynamic(() => import("@icons/svg/like.svg"), { ssr: false });
const ReloadIcon = dynamic(() => import("@icons/svg/reload.svg"), {
  ssr: false,
});
const CloseIcon = dynamic(() => import("@icons/svg/close.svg"), { ssr: false });
const VerticalViewIcon = dynamic(() => import("@icons/svg/vertical-view.svg"), {
  ssr: false,
});
const BookViewIcon = dynamic(() => import("@icons/svg/book-view.svg"), {
  ssr: false,
});
const TouchIcon = dynamic(() => import("@icons/svg/touch.svg"), { ssr: false });
const SwipeIcon = dynamic(() => import("@icons/svg/swipe.svg"), { ssr: false });
const EyeClosedIcon = dynamic(() => import("@icons/svg/eye-closed.svg"), {
  ssr: false,
});
const EyeIcon = dynamic(() => import("@icons/svg/view.svg"), { ssr: false });

import AlignTopIcon from "@icons/svg/align-top.svg";
import AlignCenterIcon from "@icons/svg/align-center.svg";
import AlignBottomIcon from "@icons/svg/align-botton.svg";
import type { User } from "@/api/types/user";
import { useUserStore } from "@/app/store";

interface Props {
  title: Comic;
  chapter: Chapter;
  user: User;
}

export type ReaderScrollType = "center" | "end" | "start";

const ReaderBody = ({ title, chapter, user }: Props) => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
  const comic = getComics();
  const comicTranslator = getComicTranslator();

  const resolveScrollType = (): ReaderScrollType => {
    const storedScrollType = localStorage.getItem("scrollType");
    if (
      storedScrollType === "center" ||
      storedScrollType === "start" ||
      storedScrollType === "end"
    ) {
      return storedScrollType;
    }
    return "center";
  };

  const { getQueryParam, setQueryParam } = useQueryParams();

  const [settingsModalActive, setSettingsModalActive] = useState(false);
  const [chaptersModalActive, setChaptersModalActive] = useState(false);
  const [readerWidth, setReaderWidth] = useState<number>(
    Number(localStorage.getItem("readerWidth"))
  );
  const [readerType, setReaderType] = useState<string>("vertical");

  const [scrollType, setScrollType] =
    useState<ReaderScrollType>(resolveScrollType());

  const [currentPage, setCurrentPage] = useState<ChapterPage>(chapter.pages[0]);

  const pageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const currentChapter = chapter;

  useEffect(() => {
    const storedType = localStorage.getItem("readerType");
    if (storedType) setReaderType(storedType);
  }, []);

  useEffect(() => {
    localStorage.setItem("readerWidth", String(readerWidth));
  }, [readerWidth]);

  useEffect(() => {
    localStorage.setItem("readerType", readerType);
  }, [readerType]);

  useEffect(() => {
    localStorage.setItem("scrollType", scrollType);
  }, [scrollType]);

  useEffect(() => {
    const query = Number(getQueryParam("page")) || 1;
    const page = currentChapter.pages.find((p) => p.order === query);
    if (page) setCurrentPage(page);
  }, []);

  const goToPage = (page: ChapterPage) => {
    if (page.order === currentPage?.order) return;
    setQueryParam("page", String(page.order));

    if (readerType === "book") {
      setCurrentPage(page);
    } else {
      const pageElement = pageRefs.current[page.order - 1];
      if (pageElement) {
        pageElement.scrollIntoView({
          behavior: "smooth",
          block: scrollType,
        });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const index = pageRefs.current.findIndex(
            (el) => el === visible.target
          );
          if (index !== -1) {
            setCurrentPage(currentChapter.pages[index]);
          }
        }
      },
      { threshold: 0.01 }
    );

    pageRefs.current.forEach((page) => {
      if (page) observer.observe(page);
    });

    return () => observer.disconnect();
  }, [currentChapter, readerType]);

  return (
    <ReaderPageWrapper>
      <SettingsBlurer
        $notadaptive={false}
        $active={settingsModalActive}
        onClick={() => {
          setSettingsModalActive(false);
        }}
      ></SettingsBlurer>
      <SettingsBlurer
        $notadaptive={false}
        $active={chaptersModalActive}
        onClick={() => {
          setChaptersModalActive(false);
        }}
      ></SettingsBlurer>
      <SettingsSidebar $type="chapters" $active={chaptersModalActive}>
        <SidebarHeader>
          <b>Разделы{` (${title.chapters.length})`}</b>
          <SidebarHeaderTools>
            <SortingButton onClick={() => setChaptersModalActive(false)}>
              <CloseIcon />
            </SortingButton>
          </SidebarHeaderTools>
        </SidebarHeader>
        <SidebarBody>
          <ChaptersList>
            {title.chapters.map((chapter: Chapter) => {
              const isCurrent = currentChapter._id === chapter._id;
              return (
                <ChaptersListElement
                  href={`/${title.seoGenre}/${title.alternativeName}/${chapter.slug}`}
                  $active={isCurrent}
                  key={chapter._id}
                >
                  {`${chapter.title}${chapter.description ? `: ${chapter.description}` : ""}`}
                  {isCurrent ? <EyeIcon /> : <EyeClosedIcon />}
                </ChaptersListElement>
              );
            })}
          </ChaptersList>
        </SidebarBody>
      </SettingsSidebar>
      <SettingsSidebar $type="settings" $active={settingsModalActive}>
        <SidebarHeader>
          <b>Настройки</b>
          <SidebarHeaderTools>
            <SortingButton onClick={() => setSettingsModalActive(true)}>
              <ReloadIcon />
            </SortingButton>
            <SortingButton onClick={() => setSettingsModalActive(false)}>
              <CloseIcon />
            </SortingButton>
          </SidebarHeaderTools>
        </SidebarHeader>
        <SidebarBody>
          <SidebarBodySegment>
            <SegmentTitle>Тип читалки</SegmentTitle>
            <SegmentContent>
              <SegmentButton $active={readerType === "vertical"}>
                <SegmentIcon
                  as={VerticalViewIcon}
                  onClick={() => setReaderType("vertical")}
                />
                Вертикально
              </SegmentButton>
              <SegmentButton
                $active={readerType === "book"}
                onClick={() => setReaderType("book")}
              >
                <SegmentIcon as={BookViewIcon} />
                Книга
              </SegmentButton>
            </SegmentContent>
          </SidebarBodySegment>
          <SidebarBodySegment>
            <SegmentTitle>Ширина страницы</SegmentTitle>
            <RangeInputSingle
              min={500}
              max={1500}
              defaultValue={readerWidth}
              onChange={(value) => setReaderWidth(value)}
            />
          </SidebarBodySegment>
          <SidebarBodySegment>
            <SegmentTitle>При выборе страницы листать к</SegmentTitle>
            <SegmentContent>
              <SegmentButton
                $active={scrollType === "start"}
                onClick={() => setScrollType("start")}
              >
                <SegmentIcon
                  as={AlignTopIcon}
                  onClick={() => setScrollType("start")}
                />
                Верху
              </SegmentButton>
              <SegmentButton
                $active={scrollType === "center"}
                onClick={() => setScrollType("center")}
              >
                <SegmentIcon
                  as={AlignCenterIcon}
                  onClick={() => setScrollType("center")}
                />
                Центру
              </SegmentButton>
              <SegmentButton
                $active={scrollType === "end"}
                onClick={() => setScrollType("end")}
              >
                <SegmentIcon
                  as={AlignCenterIcon}
                  onClick={() => setScrollType("end")}
                />
                Низу
              </SegmentButton>
            </SegmentContent>
          </SidebarBodySegment>
          <SidebarBodySegment>
            <SegmentTitle>
              Увеличивать изображение, если страница маленькая?
            </SegmentTitle>
            <SegmentContent>
              <SegmentButton
                $active={readerType === "book"}
                onClick={() => setReaderType("book")}
              >
                Увеличивать изображение
              </SegmentButton>
              <SegmentButton
                $active={readerType === "vertical"}
                onClick={() => setReaderType("vertical")}
              >
                Показывать оригинальный размер
              </SegmentButton>
            </SegmentContent>
          </SidebarBodySegment>
          <SidebarBodySegment>
            <SegmentTitle>Показывать и прятать меню при</SegmentTitle>
            <SegmentContent>
              <SegmentButton
                $active={readerType === "book"}
                onClick={() => setReaderType("book")}
              >
                <SegmentIcon as={SwipeIcon} />
                Пролистывании страницы
              </SegmentButton>
              <SegmentButton
                $active={readerType === "book"}
                onClick={() => setReaderType("book")}
              >
                <SegmentIcon as={TouchIcon} />
                Нажатии на центр страницы
              </SegmentButton>
            </SegmentContent>
          </SidebarBodySegment>
        </SidebarBody>
      </SettingsSidebar>
      <ReaderHeader
        setChaptersSidebarActive={setChaptersModalActive}
        goToPage={goToPage}
        setSettingsSidebarActive={setSettingsModalActive}
        title={title}
        chapter={currentChapter}
        page={currentPage}
      />
      <Container>
        <ReaderMain>
          {readerType === "vertical" ? (
            currentChapter.pages.map((page, index) => {
              return (
                <ReaderContentImage
                  $width={readerWidth}
                  src={page.path}
                  ref={(el) => {
                    pageRefs.current[index] = el;
                  }}
                  key={page._id}
                />
              );
            })
          ) : (
            <ReaderContentImage $width={readerWidth} src={currentPage.path} />
          )}
        </ReaderMain>
        <HidesWhenMobile>
          <ChaptersBlock>
            <a
              className={`button-filled button-dark ${!chapter.prevChapter && "button-disabled"}`}
              title={!chapter.prevChapter ? "Упс, это первый раздел" : ""}
              onClick={(e) => {
                if (!chapter.prevChapter) {
                  e.preventDefault();
                  return false;
                }
              }}
              href={`/${title.seoGenre}/${title.alternativeName}/${chapter.prevChapter?.slug}`}
            >
              <ArrowLeft />
              Предыдущий раздел
            </a>
            <button className="button-transparent button-like">
              <div>
                <h4>Поставь лайк</h4>
                <LikeIcon />
              </div>
              <span>Поставили лайков: 233</span>
            </button>
            <a
              className={`button-filled button-dark ${!chapter.nextChapter && "button-disabled"}`}
              title={!chapter.nextChapter ? "Упс, это последний раздел" : ""}
              onClick={(e) => {
                if (!chapter.nextChapter) {
                  e.preventDefault();
                  return false;
                }
              }}
              href={`/${title.seoGenre}/${title.alternativeName}/${chapter.nextChapter?.slug}`}
            >
              Следующий раздел
              <ArrowRight />
            </a>
          </ChaptersBlock>
        </HidesWhenMobile>
        <DisplaysWhenMobile>
          <ChaptersBlock style={{ marginBottom: 16 }}>
            <button className="button-transparent button-like">
              <div>
                <h4>Поставь лайк</h4>
                <LikeIcon />
              </div>
              <span>Поставили лайков: 233</span>
            </button>
          </ChaptersBlock>
          <ChaptersBlock style={{ marginTop: 0, marginBottom: 24 }}>
            <button className="button-filled button-dark">
              <ArrowLeft />
              Предыдущий раздел
            </button>
            <button className="button-filled button-dark">
              Следующий раздел
              <ArrowRight />
            </button>
          </ChaptersBlock>
        </DisplaysWhenMobile>
        <InfoContainer>
          <InfoBlock>
            <h3>Коментарии</h3>
            <Comments type="chapter" comic={comic} chapter={chapter} />
          </InfoBlock>
          <InfoBlockTranslator>
            <HidesWhenMobile>
              <h3>Переводчик</h3>
            </HidesWhenMobile>
            <ComicTranslatorMinimized translator={title.translationTeams[0]} />
          </InfoBlockTranslator>
        </InfoContainer>
      </Container>
    </ReaderPageWrapper>
  );
};

export default ReaderBody;
