"use client";

import {
  GridContainer,
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

interface Props {
  slug: string;
  chapters: Chapter[];
}

const ChapterListMinimized = ({ slug, chapters }: Props) => {
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
        <h1>Главы:</h1>
        <Input
          type="input"
          placeholder="Фильтры"
          onChange={(_) => setFilter(_)}
        />
      </SegmentSeparator>
      <GridContainer>
        {chapters
          .sort((a, b) => a.volumeIndex - b.volumeIndex)
          .filter((chapter) => !filter || chapter.title.includes(filter))
          .map((chapter) => (
            <MiniBoxWrapper key={chapter._id}>
              <h3>{chapter.title}</h3>
              <Link href={`/admin/title/${slug}/chapters/${chapter._id}`}>
                Редактировать
              </Link>
            </MiniBoxWrapper>
          ))}
      </GridContainer>
    </>
  );
};

export default ChapterListMinimized;
