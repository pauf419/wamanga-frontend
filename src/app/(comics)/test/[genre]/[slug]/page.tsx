import React from "react";
import {
  AdaptivePadding,
  BackButton,
  Background,
  BackText,
  Badge,
  Comics,
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
import { getBySlug, getSimilar } from "@/api/title";
import BasePage from "@/components/BasePage";
import BookmarkIcon from "@icons/svg/bookmark.svg";
import { Tooltip } from "@mui/material";

export type paramsType = Promise<{
  params: {
    slug: string;
    genre: string;
  };
}>;

const ComicsPage = async ({
  params,
}: {
  params: Promise<{ slug: string; genre: string }>;
}) => {
  const { slug, genre } = await params;
  const comics = await getBySlug(slug);
  if (comics.seoGenre !== genre) return <h1>404 not found</h1>;
  const similarComics = await getSimilar(comics._id);
  const { data } = getSameTitles();

  return (
    <BasePage isImageBehind>
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
              <Badge>{comics.type}</Badge>
            </HidesWhenMobile>
            <DisplaysWhenMobile>
              <MobileInfo>
                <MobileBadge>{comics.type}</MobileBadge>
                <Title>{comics.name}</Title>
                <SubTitle>
                  {comics.altName.map((n, index) => {
                    if (index === 0) return n;
                    return `/ ${n}`;
                  })}
                </SubTitle>
                <Stats>
                  <StatsBadge>
                    <LikeIcon />
                    <StatsContent>{comics.likes}</StatsContent>
                  </StatsBadge>
                  <StatsBadge>
                    <ViewIcon />
                    <StatsContent>{comics.views}</StatsContent>
                  </StatsBadge>
                  <StatsBadge>
                    <BookmarkIcon />
                    <StatsContent>
                      {comics.bookmark ? comics.bookmark : "0"}
                    </StatsContent>
                  </StatsBadge>
                </Stats>
              </MobileInfo>
            </DisplaysWhenMobile>
          </Comics>
          <AdaptivePadding>
            {comics.chapters.length ? (
              <a
                href={`/${comics.seoGenre}/${comics.alternativeName}/${comics.chapters[0]._id}`}
                className="button-filled"
              >
                <BookIcon />
                Читать
              </a>
            ) : (
              <Tooltip title="Нет доступных для чтения глав">
                <button className="button-filled button-filled-disabled button-filled-popped">
                  <BookIcon />
                  Читать
                </button>
              </Tooltip>
            )}
            <Tooltip title="Эта функция еще в разработке">
              <button className="button-filled button-filled-disabled button-filled-popped">
                <FavouriteIcon />В закладки
              </button>
            </Tooltip>
            <HidesWhenMobile>
              <SameTitlesList>
                <ListTitle>Похожие тайтлы</ListTitle>
                <TitlesList>
                  {similarComics.map((el) => (
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
              {comics.altName.map((n, index) => {
                if (index === 0) return n;
                return `/ ${n}`;
              })}
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
              <StatsBadge>
                <BookmarkIcon />В закладках у:{" "}
                <StatsContent>
                  {comics.bookmark ? comics.bookmark : "0"}
                </StatsContent>
              </StatsBadge>
            </Stats>
          </HidesWhenMobile>
          <MainSection comics={comics} />
          <DisplaysWhenMobile>
            <SameTitlesList>
              <ListTitle>Похожие тайтлы</ListTitle>
              <TitlesList>
                {similarComics.map((el) => (
                  <SameTitlePreview title={el} key={el.id} />
                ))}
              </TitlesList>
            </SameTitlesList>
          </DisplaysWhenMobile>
        </AdaptivePadding>
      </Content>
    </BasePage>
  );
};

export default ComicsPage;
