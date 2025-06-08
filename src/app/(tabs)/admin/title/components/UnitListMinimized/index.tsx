"use client";

import {
  GridContainer,
  MiniBoxRef,
  MiniBoxWrapper,
  SegmentSeparator,
} from "../../../styled";
import { Link } from "../ComicUnit/styled";
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

interface Props {
  slug: string;
  chapters: Chapter[];
}

const ChapterListMinimized = ({ slug, chapters }: Props) => {
  const router = useRouter();

  const [filter, setFilter] = useState<string>();
  if (!chapters.length)
    return (
      <NoChaptersMessage>
        <NoImage src="/no-comments.png" />
        <NoChaptersText>
          Глав нет...{" "}
          <a className="a-primary" href={`/admin/title/${slug}/chapters/new`}>
            Создать новую ?
          </a>
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
        {chapters
          .sort((a, b) => b.numberChapter - a.numberChapter)
          .filter((chapter) => !filter || chapter.title.includes(filter))
          .map((chapter) => (
            <MiniBoxWrapper key={chapter._id} $uploaded={false}>
              <h3>Глава {chapter.numberChapter}</h3>
              <Link href={`/admin/title/${slug}/chapters/${chapter.slug}`}>
                Редактировать
              </Link>
            </MiniBoxWrapper>
          ))}
      </GridContainer>
    </>
  );
};

export default ChapterListMinimized;
