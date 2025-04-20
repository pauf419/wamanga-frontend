import { getBySlug } from "@/api/title";
import ReaderBody from "./ReaderBody";
import { getChapterById } from "@/api/chapter";

export type paramsType = Promise<{
  params: {
    slug: string;
    chapterId: string;
  };
}>;
const ReaderPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const titleAlternativeName = slug[0];
  const chapterId = slug[1];

  const title = await getBySlug(titleAlternativeName);
  const chapter = await getChapterById(chapterId);

  return <ReaderBody title={title} chapter={chapter} />;
};

export default ReaderPage;
