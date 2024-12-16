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
  id: number;
  name: string;
  alternativeName?: string;
  description: string;
  rating: number;
  imagePath: string;
  bannerPath: string;
  typeComic: ComicType;
  author: string;
  originalAuthor: string;
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
  bookmark: number;
}
