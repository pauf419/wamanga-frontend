import { data } from "motion/react-client";
import { $api, $apiWithoutAuth } from "./axiosInstance";
import type { Comic, CreateComicDto } from "./types/comic";
import qs from "qs";

/*export interface SignUpResponse {
  status: string;
  tokens: Tokens;
  user: User;
}*/

export enum ComicsType {
  Manga = "Манга",
  Manhva = "Манхва",
  Manhua = "Маньхуа",
  Comic = "Комикс",
  Manuscript = "Манускрипт",
}
export enum PegiType {
  Pegi3 = "3+",
  Pegi6 = "6+",
  Pegi12 = "12+",
  Pegi16 = "16+",
  Pegi18 = "18+",
}

export enum StatusType {
  Started = "Онгоинг",
  Finished = "Окончено",
  Paused = "Приостановлено",
  Abandoned = "Заброшено",
  Announced = "Анонсировано",
}

export interface CreateTitleDto {
  name: string;

  description: string;

  rating: number;

  imagePath: string;

  bannerPath: string;

  type: ComicsType;

  author: string;

  telegram: string;

  textForButton: string;

  artist: string;

  year: number;

  isFinished: boolean;

  pegi: PegiType;

  status: StatusType;

  transferStatus: StatusType;

  views: number;

  likes: number;

  hidden: boolean;

  tags: string[];

  genres: string[];

  bookmark: number;

  publishedOn: Date;

  updatedAt: Date;
}

export async function simpleSearch(query: string): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get(`/manga/search?query=${query}`);

  return res.data;
}

export async function getRecommendedTitles(): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get("/user/reccomendation");

  return res.data;
}

export async function getBySlug(slug: string): Promise<Comic> {
  const res = await $apiWithoutAuth.get(`/manga/find/${slug}`);

  return res.data;
}

export async function getSimilar(id: string): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get(`/manga/similar/${id}`);

  return res.data;
}

export async function getRecentlyUpdated(): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get("/manga/recently-updated");

  return res.data;
}

export async function getRecentlyCreated(): Promise<Comic[]> {
  const res = await $api.get("/manga/recently-created");

  return res.data;
}

export async function getDayTop(): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get("/manga/top-daily");

  return res.data;
}

export async function getRandomComic(): Promise<Comic> {
  const res = await $apiWithoutAuth.get("/manga/random");

  return res.data;
}

export async function getUpdates(): Promise<Comic[]> {
  const res = await $api.get("/manga/updates");

  return res.data;
}

export async function getLatest(): Promise<Comic[]> {
  const res = await $api.get("/manga/latest");

  return res.data;
}

export async function getManyByIds(ids: string[]): Promise<Comic[]> {
  const res = await $api.post("/manga/ids", {
    ids,
  });
  return res.data;
}

export async function getByCategory(): Promise<Comic[]> {
  const res = await $api.get("/manga/by-category");

  return res.data;
}

export async function getRandom(): Promise<Comic> {
  const res = await $apiWithoutAuth.get("/manga/random");
  return res.data;
}

export async function getRandomList(count: number = 1): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get(`/manga/random?count=${count}`);

  return res.data;
}

export async function incrementMangaViews(mangaId: string): Promise<Comic> {
  const res = await $apiWithoutAuth.put(`/manga/${mangaId}/views`);

  return res.data;
}

export async function getNews(): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get("/manga/topNumberChapter");

  return res.data;
}

export async function searchManga(
  mangaType: ComicsType[],
  translationStatus: StatusType[],
  mangaStatus: StatusType[],
  genres: string[],
  tags: string[],
  pegi: PegiType[],
  sortKey: number | undefined,
  sortOrder: string | undefined,
  offset: number,
  limit: number,
  startYear: number | undefined,
  endYear: number | undefined
): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get("/manga/search", {
    params: {
      mangaType,
      translationStatus,
      mangaStatus,
      genres,
      tags,
      pegi,
      sortKey,
      sortOrder,
      offset,
      limit,
      startYear,
      endYear,
    },
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
  });
  return res.data;
}

export async function adminPaginateTitles(
  offset: number = 0,
  limit: number = 0,
  query: string = "",
  accessToken?: string,
  refreshToken?: string
): Promise<Comic[]> {
  const headers: Record<string, string> = {};

  if (accessToken && refreshToken) {
    headers["Cookie"] =
      `access_token=${accessToken}; refresh_token=${refreshToken}`;
  }

  const res = await $apiWithoutAuth.get(
    `/manga/adminPaginate?offset=${offset}&limit=${limit}&query=${encodeURIComponent(query)}`,
    { headers }
  );

  return res.data;
}

export async function paginateTitles(
  offset: number,
  limit: number = 30
): Promise<Comic[]> {
  const res = await $apiWithoutAuth.get(
    `/manga/paginate?offset=${offset}&limit=${limit}`
  );
  return res.data;
}

/*export class MangaCreateRequest {
  name: string;

  alternativeName: string;

  altEnglishName: string[];

  description: string;

  rating: number[];

  imagePath: string;

  bannerPath: string;

  type: ComicsType;

  author: string;

  publisher: string[];

  formatTitle: string[];

  telegram: string;

  textForButton: string;

  artist: string[];

  year: number;

  isFinished: boolean;

  pegi: PegiType;

  status: StatusType;

  transferStatus: StatusType;

  views: number;

  likes: number;

  hidden: boolean;

  tags: string[];

  genres: string[];

  bookmark: number;

  publishedOn: Date;

  updatedAt: Date;

  license: boolean;

  totalChapters: number;

  isPorno: boolean;

  constructor() {
    
  }
}*/

export async function editManga(body: Comic): Promise<Comic> {
  const response = await $apiWithoutAuth.put<Comic>(
    `/manga/update/${body._id}`,
    body
  );

  return response.data;
}

export async function createTitle(
  body: CreateComicDto,
  poster: File,
  banner: File
): Promise<Comic> {
  const formData = new FormData();

  const allowedKeys: string[] = [
    "name",
    "alternativeName",
    "altEnglishName",
    "englishName",
    "altName",
    "description",
    "rating",
    "imagePath",
    "bannerPath",
    "type",
    "author",
    "publisher",
    "formatTitle",
    "telegram",
    "textForButton",
    "artist",
    "year",
    "isFinished",
    "pegi",
    "status",
    "transferStatus",
    "translationTeams",
    "views",
    "likes",
    "hidden",
    "tags",
    "genres",
    "bookmark",
    "publishedOn",
    "updatedAt",
    "license",
    "totalChapters",
    "isPorno",
    "seoGenre",
  ];

  allowedKeys.forEach((key) => {
    const value = body[key as keyof Comic];
    if (value === null || value === undefined) return;

    if (value instanceof Date) {
      formData.append(key, value.toISOString());
    } else if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value.toString());
    }
  });

  // Файлы
  formData.append("image", poster);
  formData.append("banner", banner);

  const response = await $apiWithoutAuth.post<Comic>(
    "/manga/create",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}
