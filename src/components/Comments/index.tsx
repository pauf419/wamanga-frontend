"use client";

import React, { useEffect, useState } from "react";
import {
  CommentsWrapper,
  List,
  NoCommentsMessage,
  NoImage,
  NoCommentsText,
} from "./styled";
import type { Comic } from "@/api/types/comic";
import { getComicComments } from "@/api/mocks/queries/use-get-comments";
import { Comment } from "./Comment";
import { Reply } from "./Reply";
import type { Chapter } from "@/api/types/chapter";
import { useMutation } from "@tanstack/react-query";
import { getComments } from "@/api/comments";
import type { ComicComment } from "@/api/types/comic-comment";
import { useUserStore } from "@/app/store";
import {
  createCommentForManga,
  deleteComment,
  getCommentsForChapter,
  getCommentsForManga,
  type CreateCommentDto,
} from "@/api/comment";
import type { IComment } from "@/api/types/comment";

interface Props {
  type: "comic" | "chapter" | "user";
  comic: Comic;
  chapter?: Chapter;
}

export const Comments = ({ comic, type = "comic", chapter }: Props) => {
  const user = useUserStore((state) => state.user);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteComment_ = async (commentId: string) => {
    try {
      const res = await deleteComment(commentId);
      setComments((prev) => {
        return prev.filter((comment) => comment._id !== commentId);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchComments = async () => {
    let res;
    switch (type) {
      case "comic":
        res = await getCommentsForManga(comic._id);
        break;
      case "chapter":
        res = await getCommentsForChapter(chapter?._id);
        break;
      default:
        res = [];
    }
    setComments(res);
  };

  const createComment = async (data: CreateCommentDto) => {
    setIsLoading(true);
    try {
      const res = await createCommentForManga(data);
      setComments((prev) => [...prev, res]);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  const { data } = getComicComments();

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CommentsWrapper>
      <Reply
        manga={comic}
        chapter={chapter}
        cb={createComment}
        isLoading={isLoading}
      />
      <List>
        {comments.length ? (
          [...comments]
            .reverse()
            .map((el) => (
              <Comment
                comment={el}
                deleteComment={deleteComment_}
                key={el._id}
              />
            ))
        ) : (
          <NoCommentsMessage>
            <NoImage src="/no-comments.png" />
            <NoCommentsText>
              Что-то никто не комментирует, может, начнем 👉👈?
            </NoCommentsText>
          </NoCommentsMessage>
        )}
      </List>
    </CommentsWrapper>
  );
};
