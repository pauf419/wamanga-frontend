"use client";

import type { Comic } from "@/api/types/comic";
import {
  TypeBadge,
  Content,
  Info,
  Poster,
  Segment,
  Wrapper,
  Title,
  Icon,
} from "./styled";
import InfoIcon from "@icons/svg/info-filled.svg";

interface Props {
  title: Comic;
}

export const SameTitlePreview = ({ title }: Props) => {
  return (
    <Wrapper>
      <Poster src={title.imagePath} />
      <Content>
        <Info>
          <TypeBadge>{title.typeComic}</TypeBadge>
          <Title>{title.name}</Title>
        </Info>
        <Segment>
          <Icon as={InfoIcon} />
        </Segment>
      </Content>
    </Wrapper>
  );
};
