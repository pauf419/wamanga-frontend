import type { ChapterPage } from "./chapter-page";
import type { ComicComment } from "./comic-comment";

/*export interface Chapter {
  refer: number;
  index: number;
  id: number;
  name: string;
  refer: string;
  pages: ChapterPage[];
  totalPages: number;
  description: string;
}*/

export interface Chapter {
  _id: string;
  numberChapter: number;
  title: string;
  volumeIndex: number;
  hide: boolean;
  views: number;
  lang: string;
  pages: ChapterPage[];
  comments: ComicComment[];
  teamId: string;
  mangaId: string;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
  uploadDate: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  titleSys: boolean;
  slug: string;
}
