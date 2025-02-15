import React from "react";
import {
  AdaptivePadding,
  BackButton,
  Background,
  BackText,
  Badge,
  Comics,
  ComicsPageSC,
  Content,
  FavouriteButton,
  Left,
  ListTitle,
  MobileBadge,
  MobileInfo,
  Poster,
  ReadButton,
  SameTitlesList,
  Stats,
  StatsBadge,
  StatsContent,
  SubTitle,
  Title,
  TitlesList,
} from "./styled";
import BackIcon from "@icons/svg/back-filled.svg";
import BookIcon from "@icons/svg/book.svg";
import FavouriteIcon from "@icons/svg/favourites.svg";
import LikeIcon from "@icons/svg/stat-like.svg";
import ViewIcon from "@icons/svg/stat-view.svg";
import { getComics } from "@/api/mocks/queries/use-get-comics";
import { MainSection } from "./MainSection";
import {
  DisplaysWhenMobile,
  HidesWhenMobile,
} from "@/components/Adaptive/styled";
import { getSameTitles } from "@/api/mocks/queries/use-get-same-titles";
import { SameTitlePreview } from "@/components/SameTitlePreview";

const ComicsPage = () => {
  const comics = getComics();
  const { data } = getSameTitles();

  return (
    <ComicsPageSC isImageBehind>
      <Background $backgroundImage={comics.bannerPath}></Background>
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
            <HidesWhenMobile>
              <Badge>{comics.typeComic}</Badge>
            </HidesWhenMobile>
            <DisplaysWhenMobile>
              <MobileInfo>
                <MobileBadge>{comics.typeComic}</MobileBadge>
                <Title>{comics.name}</Title>
                <SubTitle>
                  Some altrnative title because backend didn&apos;t add one
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
              </MobileInfo>
            </DisplaysWhenMobile>
          </Comics>
          <AdaptivePadding>
            <ReadButton>
              <BookIcon />
              Читать
            </ReadButton>
            <FavouriteButton>
              <FavouriteIcon />В закладки
            </FavouriteButton>
            <HidesWhenMobile>
              <SameTitlesList>
                <ListTitle>Похожие тайтлы</ListTitle>
                <TitlesList>
                  {data.map((el) => (
                    <SameTitlePreview title={el} key={el.id} />
                  ))}
                </TitlesList>
              </SameTitlesList>
            </HidesWhenMobile>
          </AdaptivePadding>
        </Left>
        <AdaptivePadding>
          <HidesWhenMobile>
            <Title>{comics.name}</Title>
            <SubTitle>
              Some altrnative title because backend didn&apos;t add one
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
          </HidesWhenMobile>
          <MainSection comics={comics} />
          <DisplaysWhenMobile>
            <SameTitlesList>
              <ListTitle>Похожие тайтлы</ListTitle>
              <TitlesList>
                {data.map((el) => (
                  <SameTitlePreview title={el} key={el.id} />
                ))}
              </TitlesList>
            </SameTitlesList>
          </DisplaysWhenMobile>
        </AdaptivePadding>
      </Content>
    </ComicsPageSC>
  );
};

export default ComicsPage;
