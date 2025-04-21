"use client";

import React, { useEffect } from "react";
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

interface Props {
  type: "comic" | "chapter";
  comic: Comic;
  chapter?: Chapter;
}

export const Comments = ({ comic, type = "comic", chapter }: Props) => {
  const mutation = useMutation({
    mutationFn: () => getComments(type, comic.id),
    onSuccess: (result: ComicComment[]) => {
      console.log(result);
    },
    onError: (err: Error) => {
      console.log(err);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const { data } = getComicComments();

  return (
    <CommentsWrapper>
      <Reply cb={() => null} />
      <List>
        {data.length ? (
          data.map((el) => <Comment comment={el} key={el.id} />)
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
