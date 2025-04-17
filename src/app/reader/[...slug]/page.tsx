import { getBySlug } from "@/api/title";
import ReaderBody from "./ReaderBody";
import { getChapterById } from "@/api/chapter";

interface ReaderPageProps {
  params: {
    slug: string;
  };
}

const ReaderPage = async ({ params }: ReaderPageProps) => {
  const titleAlternativeName = await params.slug[0];
  const chapterId = await params.slug[1];

  const title = await getBySlug(titleAlternativeName);
  const chapter = await getChapterById(chapterId);

  return <ReaderBody title={title} chapter={chapter} />;
};

export default ReaderPage;
