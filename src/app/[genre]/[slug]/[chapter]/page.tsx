import {
  getBySlug,
  getMangaChaptersMinimalInfo,
  incrementMangaViews,
} from "@/api/title";
import ReaderBody from "./ReaderBody";
import {
  getChapterById,
  getChapterBySlug,
  incrementChapterViews,
} from "@/api/chapter";
import AgeConfirmModal from "@/components/AgeConfirmModal";
import { getSession, getTokens } from "@/app/lib";
import Footer from "@/components/Footer";
import { getSettings } from "@/api/settings";
import type { Metadata } from "next";
import { createChapterNonce } from "@/api/nonce";
import OkakPage from "@/app/not-found";

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

  try {
    const settings = await getSettings();
    const comics = await getBySlug(slug);
    const chapterEl = await getChapterBySlug(comics._id, chapter);

    return {
      title: `${settings.title} - ${comics.type} - ${comics.name} - ${chapterEl.title}`,
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
  } catch (e) {
    console.error(e);
    return {};
  }
}

const ReaderPage = async ({
  params,
}: {
  params: Promise<{ chapter: string; slug: string; genre: string }>;
}) => {
  const { slug, chapter, genre } = await params;
  const titleAlternativeName = slug;

  const user = await getSession();

  try {
    const title = await getBySlug(titleAlternativeName);
    if (!title) return <OkakPage />;
    const chapterEl = await getChapterBySlug(title._id, chapter);
    if (!chapterEl) return <OkakPage />;
    incrementChapterViews(chapterEl._id);
    const info = await getMangaChaptersMinimalInfo(title._id, true);
    if (info.chapters) title.chapters = info.chapters;
    const tokens = await getTokens();
    const nonce = await createChapterNonce(chapterEl._id, tokens);
    return (
      <>
        {(title.pegi === "16+" || title.pegi === "18+") && title.isPorno && (
          <AgeConfirmModal
            href={`/${title.seoGenre}/${title.alternativeName}`}
          />
        )}
        <ReaderBody
          nonce={nonce}
          title={title}
          chapter={chapterEl}
          user={user}
        />
      </>
    );
  } catch (e) {
    console.error(e);
    return <OkakPage />;
  }
};

export default ReaderPage;
