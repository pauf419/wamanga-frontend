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
  getCommentsForManga,
  type CreateCommentDto,
} from "@/api/comment";
import type { IComment } from "@/api/types/comment";

interface Props {
  type: "comic" | "chapter";
  comic: Comic;
  chapter?: Chapter | null;
}

export const Comments = ({ comic, type = "comic", chapter }: Props) => {
  const user = useUserStore((state) => state.user);
  const [comments, setComments] = useState<IComment[]>([]);

  const fetchComments = async () => {
    const res = await getCommentsForManga(comic._id);
    setComments(res);
  };

  const createComment = async (data: CreateCommentDto) => {
    const res = await createCommentForManga(data);
    return res;
  };

  const { data } = getComicComments();

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CommentsWrapper>
      <Reply manga={comic} chapter={chapter} cb={createComment} />
      <List>
        {comments.length ? (
          comments.map((el) => <Comment comment={el} key={el._id} />)
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
