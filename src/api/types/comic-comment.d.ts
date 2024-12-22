import type { User } from "./user";

export interface Like {
  id: number;
  accountId: number;
  commentId: number;
}

export interface ComicComment {
  id: number;
  text: string;
  imageId: string | null;
  chapterId: number | null;
  chapterPageId: number | null;
  comicId: number;
  userId: number;
  isSpoiler: boolean;
  hasReplies: boolean;
  createdAt: number;
  likes: Like[];
  user: User;
}
