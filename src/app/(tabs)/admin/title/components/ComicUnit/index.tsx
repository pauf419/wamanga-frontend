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
import { RoleSegregator } from "@/components/RoleSegregator";

interface Props {
  comic: Comic;
}

export const ComicUnit = ({ comic }: Props) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href={`/admin/title/${comic.alternativeName}`}>
        <Poster src={comic.imagePath} />
      </Link>
      <RoleSegregator allowedRoles={["owner", "admin"]}>
        <EditButton href={`/admin/title/${comic.alternativeName}/edit`}>
          <PencilIcon />
        </EditButton>
      </RoleSegregator>
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
