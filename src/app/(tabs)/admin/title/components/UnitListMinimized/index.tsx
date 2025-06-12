"use client";

import {
  GridContainer,
  MiniBoxRef,
  MiniBoxWrapper,
  SegmentSeparator,
} from "../../../styled";
import { LinkS } from "../ComicUnit/styled";
import Input from "@/components/Input";
import type { Chapter } from "@/api/types/chapter";
import { useState } from "react";
import {
  NoChaptersMessage,
  NoChaptersText,
  NoImage,
} from "@/components/Chapters/styled";
import NewIcon from "@icons/svg/admin-plus.svg";
import { useRouter } from "next/navigation";
import { ActionsWrapper, DeleteHandler } from "./styled";
import { deleteChapter } from "@/api/chapter";

interface Props {
  slug: string;
  chapters: Chapter[];
}

const ChapterListMinimized = ({ slug, chapters }: Props) => {
  const router = useRouter();
  const [chaptersDynamic, setChaptersDynamic] = useState<Chapter[]>(chapters);

  const handleDelete = async (chapterId: string) => {
    try {
      await deleteChapter(chapterId);
      setChaptersDynamic((prev) => {
        return prev.filter((chapter) => chapter._id !== chapterId);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const [filter, setFilter] = useState<string>();
  if (!chapters.length)
    return (
      <NoChaptersMessage>
        <NoImage src="/no-comments.png" />
        <NoChaptersText>
          Глав нет...{" "}
          <LinkS
            className="a-primary"
            href={`/admin/title/${slug}/chapters/new`}
          >
            Создать новую ?
          </LinkS>
        </NoChaptersText>
      </NoChaptersMessage>
    );

  return (
    <>
      <SegmentSeparator>
        <button
          className="button-filled"
          onClick={() => router.push(`/admin/title/${slug}/chapters/new`)}
        >
          Создать новую главу
        </button>
        <h1>Главы:</h1>
        <Input
          type="input"
          placeholder="Фильтры"
          onChange={(_) => setFilter(_)}
        />
      </SegmentSeparator>
      <GridContainer>
        {chaptersDynamic
          .sort((a, b) => b.numberChapter - a.numberChapter)
          .filter((chapter) => !filter || chapter.title.includes(filter))
          .map((chapter) => (
            <MiniBoxWrapper key={chapter._id} $uploaded={false}>
              <h3>Глава {chapter.numberChapter}</h3>
              <ActionsWrapper>
                <LinkS href={`/admin/title/${slug}/chapters/${chapter.slug}`}>
                  Редактировать
                </LinkS>
                <DeleteHandler onClick={() => handleDelete(chapter._id)}>
                  Удалить
                </DeleteHandler>
              </ActionsWrapper>
            </MiniBoxWrapper>
          ))}
      </GridContainer>
    </>
  );
};

export default ChapterListMinimized;
