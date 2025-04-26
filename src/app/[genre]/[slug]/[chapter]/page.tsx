import { getBySlug } from "@/api/title";
import ReaderBody from "./ReaderBody";
import { getChapterById } from "@/api/chapter";

export type paramsType = Promise<{
  params: {
    slug: string;
    chapter: string;
    genre: string;
  };
}>;
const ReaderPage = async ({
  params,
}: {
  params: Promise<{ chapter: string; slug: string; genre: string }>;
}) => {
  const { slug, chapter, genre } = await params;
  const titleAlternativeName = slug;

  const title = await getBySlug(titleAlternativeName);
  const chapterEl = await getChapterById(chapter);

  return <ReaderBody title={title} chapter={chapterEl} />;
};

export default ReaderPage;
