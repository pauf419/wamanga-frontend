import type { Chapter } from "./chapter";
import type { Team } from "./team";

export enum ComicsType {
  Manga = "Манга",
  Manhva = "Манхва",
  Manhua = "Маньхуа",
  Comic = "Комикс",
  Manuscript = "Манускрипт",
}

type PegiType = "3+" | "6+" | "12+" | "16+" | "18+";

type StatusType =
  | "Онгоинг"
  | "Окончено"
  | "Приостановлено"
  | "Заброшено"
  | "Анонсировано";

export interface Comic {
  _id: string;
  id: string;
  name: string;
  englishName: string;
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
  translationTeams: Team[];
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
  seoGenre: string;
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

export interface CreateComicDto extends Comic {
  translationTeams: string[];
}

export interface ProcessingManga {
  manga: Comic;
  chaptersCompleted: number;
  chaptersTotal: number;
}
