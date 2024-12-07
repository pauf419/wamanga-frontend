import React from "react";
import {
  BackButton,
  Background,
  BackText,
  Badge,
  Comics,
  ComicsPageSC,
  Content,
  FavouriteButton,
  Left,
  Poster,
  ReadButton,
  Right,
  Stats,
  StatsBadge,
  StatsContent,
  SubTitle,
  Title,
} from "./styled";
import BackIcon from "@icons/svg/back-filled.svg";
import BookIcon from "@icons/svg/book.svg";
import FavouriteIcon from "@icons/svg/favourites.svg";
import LikeIcon from "@icons/svg/stat-like.svg";
import ViewIcon from "@icons/svg/stat-view.svg";
import { getComics } from "@/api/mocks/queries/use-get-comics";

const ComicsPage = ({ params }: { params: { slug: string } }) => {
  const comics = getComics();

  return (
    <ComicsPageSC isImageBehind>
      <Background $backgroundImage={comics.bannerPath}>
        <Content>
          <BackButton href={"/"}>
            <BackIcon />
            <BackText>Назад</BackText>
          </BackButton>
          <Left>
            <Comics>
              <Poster
                src={comics.imagePath}
                alt={comics.name}
                width={600}
                height={300}
              />
              <Badge>{comics.typeComics}</Badge>
            </Comics>
            <ReadButton>
              <BookIcon />
              Читать
            </ReadButton>
            <FavouriteButton>
              <FavouriteIcon />В закладки
            </FavouriteButton>
          </Left>
          <Right>
            <Title>{comics.name}</Title>
            <SubTitle>
              Some altrnative title because backend didn't add one
            </SubTitle>
            <Stats>
              <StatsBadge>
                <LikeIcon />
                Лайков: <StatsContent>{comics.likes}</StatsContent>
              </StatsBadge>
              <StatsBadge>
                <ViewIcon />
                Просмотров: <StatsContent>{comics.views}</StatsContent>
              </StatsBadge>
            </Stats>
          </Right>
        </Content>
      </Background>
    </ComicsPageSC>
  );
};

export default ComicsPage;
