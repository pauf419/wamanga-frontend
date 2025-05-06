import { getBySlug, incrementMangaViews } from "@/api/title";
import ReaderBody from "./ReaderBody";
import { getChapterById, getChapterBySlug } from "@/api/chapter";
import AgeConfirmModal from "@/components/AgeConfirmModal";
import { getSession } from "@/app/lib";
import Footer from "@/components/Footer";

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

  const user = await getSession();
  const title = await getBySlug(titleAlternativeName);
  await incrementMangaViews(title._id);
  const chapterEl = await getChapterBySlug(title._id, chapter);

  return (
    <>
      {(title.pegi === "16+" || title.pegi === "18+") && title.isPorno && (
        <AgeConfirmModal href={`/${title.seoGenre}/${title.alternativeName}`} />
      )}
      <ReaderBody title={title} chapter={chapterEl} user={user} />
    </>
  );
};

export default ReaderPage;
