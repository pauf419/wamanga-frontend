"use client";

import {
  ChapterPageGridContainer,
  ContentSegment,
  GridContainer,
  MiniBoxContent,
  MiniBoxImage,
  MiniBoxWrapper,
  SegmentSeparator,
  SegmentTools,
} from "../../../../styled";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import type { ChapterPage } from "@/api/types/chapter-page";
import { Checkbox } from "@/components/Checkbox";
import { deleteChapterPages, uploadChapterPage } from "@/api/chapter";
import type { Chapter } from "@/api/types/chapter";
import {
  NoChaptersMessage,
  NoChaptersText,
  NoImage,
} from "@/components/Chapters/styled";

export interface ChapterPageDynamic extends ChapterPage {
  blob?: any;
  new?: boolean;
  uploaded?: boolean;
}

interface Props {
  pages: ChapterPage[];
  chapter: Chapter;
}

const ChapterPageListMinimized = ({ chapter, pages }: Props) => {
  const [filter, setFilter] = useState<string>("");
  const [fileInfo, setFileInfo] = useState<
    Record<string, { name: string; size: number }>
  >({});
  const [pagesSelected, setPagesSelected] = useState<ChapterPageDynamic[]>([]);
  const [loading, setLoading] = useState(true);
  const [localPages, setLocalPages] = useState<ChapterPageDynamic[]>(pages);
  const [errors, setErrors] = useState<string[]>([]);
  const [uploadModalActive, setUploadModalActive] = useState<boolean>(false);
  const [pagesUploaded, setPagesUploaded] = useState<number>(0);

  useEffect(() => {
    async function fetchFileInfo() {
      const newFileInfo: Record<string, { name: string; size: number }> = {};

      await Promise.all(
        localPages.map(async (page) => {
          try {
            const response = await fetch(page.path);
            const blob = await response.blob();
            const fileName = page.path.split("/").pop() || "Unknown";
            newFileInfo[page._id] = { name: fileName, size: blob.size };
          } catch (error) {
            console.error("Ошибка загрузки файла:", error);
          }
        })
      );

      setFileInfo(newFileInfo);
      setLoading(false);
    }

    if (localPages.length) {
      setLoading(true);
      fetchFileInfo();
    }
  }, [localPages]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const newPages: ChapterPage[] = Array.from(event.target.files).map(
      (file, index) => ({
        _id: `new-${Date.now()}-${index}`,
        order: localPages.length + index + 1,
        path: URL.createObjectURL(file),
        blob: file,
        new: true,
        uploaded: false,
      })
    );

    setLocalPages([...localPages, ...newPages]);
  };

  const uploadPage = async (page: ChapterPageDynamic) => {
    try {
      await uploadChapterPage(chapter._id, page.blob);
      setLocalPages((prevPages) =>
        prevPages.map((p) =>
          p._id === page._id ? { ...p, uploaded: true, new: false } : p
        )
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onStartUpload = async () => {
    setPagesUploaded(0);
    setErrors([]);
    setUploadModalActive(true);
    const pages = localPages.filter((page) => page.new || page.blob);
    for (let i = 0; i < pages.length; i++) {
      try {
        await uploadPage(pages[i]);
        setPagesUploaded((prev) => prev + 1);
      } catch (e) {
        console.error(e);
        if (e.response.data.message)
          setErrors((prev) => [...prev, e.response.data.message]);
      }
    }
  };

  const onStopUpload = async () => {};

  const deleteSelected = async () => {
    try {
      const ids = pagesSelected.map((page) => page._id);
      await deleteChapterPages(chapter._id, chapter.mangaId, ids);
      setLocalPages((prev) =>
        prev.filter((localPage) => !ids.includes(localPage._id))
      );
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSingle = async (page: ChapterPageDynamic) => {
    try {
      await deleteChapterPages(chapter._id, chapter.mangaId, [page._id]);
      setLocalPages((prev) =>
        prev.filter((localPage) => localPage._id !== page._id)
      );
    } catch (e) {
      console.error(e);
    }
  };

  if (!localPages.length)
    return (
      <NoChaptersMessage>
        <NoImage src="/no-comments.png" />
        <NoChaptersText>Страниц нет...</NoChaptersText>
      </NoChaptersMessage>
    );

  return (
    <>
      <SegmentSeparator>
        <h1>Страницы:</h1>
        <Input
          type="input"
          placeholder="Фильтры"
          onChange={(e) => setFilter(e)}
        />
      </SegmentSeparator>
      <SegmentTools>
        <input
          type="file"
          multiple
          hidden
          id="fileInput"
          onChange={handleFileSelect}
        />
        <button
          className="button-transparent button-primary-light"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          Добавить страницы
        </button>
        <button
          className="button-transparent button-primary"
          onClick={onStartUpload}
        >
          Начать загрузку
        </button>
        <button className="button-transparent button-primary">
          Отменить загрузку
        </button>
        <button
          className="button-transparent button-red"
          onClick={() => deleteSelected()}
        >
          Удалить выбранное
        </button>
      </SegmentTools>
      {loading ? (
        <h2>Загрузка...</h2>
      ) : (
        <ChapterPageGridContainer>
          {localPages
            .sort((a, b) => a.order - b.order)
            .filter((page) => !filter || page.order === Number(filter))
            .map((page) => {
              const file = fileInfo[page._id];
              return (
                <MiniBoxWrapper
                  key={page._id}
                  $uploaded={!page.uploaded && page.new ? true : false}
                >
                  <MiniBoxContent>
                    <ContentSegment>
                      <MiniBoxImage $background={page.path} />
                      <b>{file ? file.name : "Новый файл"}</b>
                    </ContentSegment>
                    <ContentSegment>
                      <b>{file ? (file.size / 1024).toFixed(2) + "KB" : "—"}</b>
                    </ContentSegment>
                    <ContentSegment>
                      <Checkbox
                        raw
                        cb={(b) => {
                          setPagesSelected((prev) => {
                            if (!b) {
                              return prev.filter(
                                (_page) => _page._id !== page._id
                              );
                            }
                            return [...prev, page];
                          });
                        }}
                      />
                      <button
                        onClick={() => deleteSingle(page)}
                        className="button-transparent button-red"
                      >
                        Удалить
                      </button>
                    </ContentSegment>
                  </MiniBoxContent>
                </MiniBoxWrapper>
              );
            })}
        </ChapterPageGridContainer>
      )}
    </>
  );
};

export default ChapterPageListMinimized;
