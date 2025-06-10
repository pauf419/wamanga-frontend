import React from "react";
import {
  AdaptivePadding,
  BackButton,
  Background,
  BackText,
  Badge,
  Comics,
  Content,
  EditButton,
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
import {
  getBySlug,
  getSimilar,
  getTitleLikes,
  incrementMangaViews,
} from "@/api/title";
import BasePage from "@/components/BasePage";
import BookmarkIcon from "@icons/svg/bookmark.svg";
import { Tooltip } from "@mui/material";
import AgeConfirmModal from "@/components/AgeConfirmModal";
import { getSettings } from "@/api/settings";
import type { Metadata } from "next";
import { RoleSegregator } from "@/components/RoleSegregator";
import OkakPage from "@/app/not-found";
import Link from "next/link";

export type paramsType = Promise<{
  params: {
    slug: string;
    genre: string;
  };
}>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; genre: string }>;
}): Promise<Metadata> {
  const { slug, genre } = await params;

  try {
    const settings = await getSettings();
    const comics = await getBySlug(slug);
    return {
      title: `${settings.title} - ${comics.type} - ${comics.name}`,
      description: settings.longTitle,
      metadataBase: new URL(settings.metadataBase),
      creator: settings.creator,
      publisher: settings.publisher,
      icons: {
        icon: settings.logo,
        shortcut: settings.logo,
        apple: settings.logo,
      },
      openGraph: {
        title: `${settings.title} - ${comics.name}`,
        description: settings.longTitle,
        siteName: `${settings.title} - ${comics.name}`,
        images: [
          {
            url: comics.imagePath,
            width: 1200,
            height: 630,
            alt: settings.title,
          },
        ],
        type: "website",
      },
    };
  } catch (e) {
    console.error(e);
    return {};
  }
}

const ComicsPage = async ({
  params,
}: {
  params: Promise<{ slug: string; genre: string }>;
}) => {
  const { slug, genre } = await params;

  let comics;
  let similarComics;

  try {
    comics = await getBySlug(slug);
    if (!comics || comics.seoGenre !== genre) return <OkakPage />;
    similarComics = await getSimilar(comics._id);
    const totalData = await getTitleLikes(comics._id);
    if (totalData.totalLikes) comics.likes = totalData.totalLikes;
    if (totalData.totalViews) comics.views = totalData.totalViews;
  } catch (e) {
    console.error(e);
    return <OkakPage />;
  }

  if (comics.englishName) comics.altName.unshift(comics.englishName);

  return (
    <BasePage isImageBehind>
      <Background $backgroundImage={comics.bannerPath}></Background>
      <Content>
        <BackButton href={"/"}>
          <BackIcon />
          <BackText>Назад</BackText>
        </BackButton>
        <RoleSegregator allowedRoles={["owner", "admin"]}>
          <EditButton href={`/admin/title/${comics.alternativeName}/edit`}>
            <BackText>Редактировать</BackText>
          </EditButton>
        </RoleSegregator>
        <Left>
          <Comics>
            <Poster
              src={comics.imagePath}
              alt={comics.name}
              width={600}
              height={300}
              unoptimized
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
              <Link
                href={`/${comics.seoGenre}/${comics.alternativeName}/${comics.chapters[0].slug}`}
                className="button-filled"
              >
                <BookIcon />
                Читать
              </Link>
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
