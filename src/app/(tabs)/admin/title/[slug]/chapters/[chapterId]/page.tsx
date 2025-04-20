"use server";

import { redirect } from "next/navigation";
import BasePage from "@/components/BasePage";
import {
  Block,
  Container,
  FlexBlock,
  Pathname,
  PathnameHeader,
  PathnameSpacer,
  Poster,
} from "../../../../styled";
import { getChapterById } from "@/api/chapter";
import { getBySlug } from "@/api/title";
import ChapterPageListMinimized from "../../../components/UnitListMinimized/ChapterPageList";
import ChapterEditableDataList from "../../../components/DataListEditable/Chapter";

export type paramsType = {
  slug: string;
  chapterId: string;
};

const AdminPage = async ({
  params,
}: {
  params: Promise<{ slug: string; chapterId: string }>;
}) => {
  const { slug, chapterId } = await params;

  const title = await getBySlug(slug);
  const chapter = await getChapterById(chapterId);

  if (!slug || !title) redirect(`/admin/title/${slug}`);

  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/admin/title">Comics</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}`}>{slug}</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}`} aria-disabled>
            chapters
          </Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}/chapters/${chapterId}`}>
            {chapterId}
          </Pathname>
        </PathnameHeader>
        <Block>
          <h1>{chapter.title}</h1>
          <FlexBlock>
            <Poster src={title.imagePath} />
            <ChapterEditableDataList chapter={chapter} />
          </FlexBlock>
        </Block>
        <ChapterPageListMinimized chapter={chapter} pages={chapter.pages} />
      </Container>
    </BasePage>
  );
};

export default AdminPage;
