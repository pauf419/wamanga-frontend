import type { Chapter } from "./chapter";

type ComicType =
  | "Manga"
  | "Webtoon"
  | "Comic"
  | "Life Comic"
  | "Web Comic"
  | "Manuscript";

type PegiType = "3+" | "6+" | "12+" | "16+" | "18+";

type StatusType =
  | "В процессе"
  | "Окончено"
  | "Приостановлено"
  | "Заброшено"
  | "Анонсировано";

export interface Comic {
  _id: string;
  id: string;
  name: string;
  alternativeName?: string;
  altEnglishName: string[];
  altName: string[];
  description: string;
  rating: number;
  imagePath: string;
  bannerPath: string;
  releaseFormat: string[];
  publisher: string[];
  author: string[];
  artist: string[];
  type: ComicType;
  translationTeams: string[];
  originalAuthor: string;
  publishedOn: Date;
  year: number;
  isFinished: boolean;
  pegi: PegiType;
  status: StatusType;
  transferStatus: StatusType;
  views: number;
  likes: number;
  hidden: boolean;
  publishedOn?: Date;
  updatedAt?: Date;
  tags: string[];
  genres: string[];
  chapters: Chapter[];
  chaptersAvailable: number;
  totalChapters: number | null;
  bookmark: number;
  textForButton: string;
  telegram: string;
  license: boolean;
  isPorno: boolean;
}
