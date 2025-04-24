"use client";

import type { Comic } from "@/api/types/comic";
import {
  Description,
  EditButton,
  Link,
  Poster,
  Tools,
  Wrapper,
} from "./styled";
import PencilIcon from "@icons/svg/pencil-stroked.svg";
import { useRouter } from "next/navigation";

interface Props {
  comic: Comic;
}

export const ComicUnit = ({ comic }: Props) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Poster
        src={comic.imagePath}
        onClick={() => router.push(`/comics/${comic.alternativeName}`)}
      />
      <EditButton href={`/admin/title/${comic.alternativeName}`}>
        <PencilIcon />
      </EditButton>
      <Description>
        <h4>{comic.name}</h4>
        <Tools>
          <Link href={`/admin/title/${comic.alternativeName}/chapters/new`}>
            Добавить главу
          </Link>
          <Link href="">Статистика</Link>
        </Tools>
      </Description>
    </Wrapper>
  );
};
