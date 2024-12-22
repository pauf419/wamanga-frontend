"use client";

import React from "react";
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

interface Props {
  comic: Comic;
}

export const Comments = ({ comic }: Props) => {
  //Здесь потом будем передавать comicId
  const { data } = getComicComments();

  //Просто приттиер заебал в нулину. Мне лень что-то с этим делать. Просто так оставлю, похуй
  comic.alternativeName = comic.name;

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
