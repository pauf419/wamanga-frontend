import { getBySlug, incrementMangaViews } from "@/api/title";
import ReaderBody from "./ReaderBody";
import { getChapterById, getChapterBySlug } from "@/api/chapter";
import AgeConfirmModal from "@/components/AgeConfirmModal";
import { getSession } from "@/app/lib";
import Footer from "@/components/Footer";
import { getSettings } from "@/api/settings";
import type { Metadata } from "next";

export type paramsType = Promise<{
  params: {
    slug: string;
    chapter: string;
    genre: string;
  };
}>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; genre: string; chapter: string }>;
}): Promise<Metadata> {
  const { slug, genre, chapter } = await params;
  const settings = await getSettings();
  const comics = await getBySlug(slug);
  const chapterEl = await getChapterBySlug(comics._id, chapter);

  return {
    title: `${settings.title} - ${comics.name} - ${chapterEl.title}`,
    description: settings.longTitle,
    metadataBase: new URL(settings.metadataBase),
    creator: settings.creator,
    publisher: settings.publisher,
    icons: {
      icon: settings.logo,
      shortcut: settings.logo,
      apple: settings.logo,
    },
    openGraph: {
      title: `${settings.title} - ${comics.name} - ${chapterEl.title}`,
      description: settings.longTitle,
      siteName: `${settings.title} - ${comics.name} - ${chapterEl.title}`,
      images: [
        {
          url: comics.imagePath,
          width: 1200,
          height: 630,
          alt: settings.title,
        },
      ],
      type: "website",
    },
  };
}

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
