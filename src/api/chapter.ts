import { $apiWithoutAuth } from "./axiosInstance";
import type { Chapter } from "./types/chapter";

export async function getChapterById(chapterId: string): Promise<Chapter> {
  const res = await $apiWithoutAuth.get(`/chapters/${chapterId}`);

  return res.data;
}

export interface CreateChapterMultiuploadDto {
  mangaId: string;
  numberChapter: number;
  title: string;
  lang: "Russian" | "English";
  files: FileList | null;
  hide: boolean;
  views: number;
  teamId: string;
  mangaAlternativeName: string | undefined;
  volumeIndex: number;
}

export async function createChapter(body: CreateChapterMultiuploadDto) {
  const formData = new FormData();
  formData.append("mangaId", body.mangaId);
  formData.append("numberChapter", String(body.numberChapter));
  formData.append("title", body.title);
  formData.append("lang", body.lang);
  formData.append("hide", String(body.hide));
  formData.append("views", String(body.views));
  formData.append("teamId", body.teamId);
  formData.append("mangaAlternativeName", body.mangaAlternativeName || "Null");
  formData.append("volumeIndex", String(body.volumeIndex));

  if (body.files) {
    Array.from(body.files).forEach((file) => {
      formData.append("files", file);
    });
  }

  const res = await $apiWithoutAuth.post("/chapters/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function updateChapter(body: Chapter): Promise<Chapter> {
  const res = await $apiWithoutAuth.patch(`/chapters/${body._id}`, body);
  return res.data;
}

export async function uploadChapterPage(chapterId: string, blob: any) {
  const formData = new FormData();
  formData.append("file", blob);

  const res = await $apiWithoutAuth.post(
    `/chapters/create/page?chapterId=${chapterId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
}

export async function deleteChapterPages(
  chapterId: string,
  mangaId: string,
  chapterPages: string[]
) {
  const res = await $apiWithoutAuth.post(
    `/chapters/${chapterId}/pages?mangaId=${mangaId}`,
    {
      pageIds: chapterPages,
    }
  );
  return res.data;
}
