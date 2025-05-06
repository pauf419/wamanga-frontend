import { $apiWithoutAuth } from "./axiosInstance";
import type { IComment } from "./types/comment";

export interface CreateCommentDto {
  authorId: string;
  text: string;
  userId?: string;
  mangaId?: string;
  chapterId?: string;
  isSpoilered?: boolean;
}

export async function createCommentForManga(
  data: CreateCommentDto
): Promise<IComment> {
  const res = await $apiWithoutAuth.post("/comments", data);
  return res.data;
}

export async function deleteComment(commentId: string) {
  const res = await $apiWithoutAuth.delete(`/comments/${commentId}`);
}

export async function getCommentsForManga(
  mangaId: string
): Promise<IComment[]> {
  const res = await $apiWithoutAuth.get(`/comments/manga/${mangaId}`);
  return res.data;
}

export async function getCommentsForChapter(
  chapterId: string
): Promise<IComment[]> {
  const res = await $apiWithoutAuth.get(`/comments/chapter/${chapterId}`);
  return res.data;
}
