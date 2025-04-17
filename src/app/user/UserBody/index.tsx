"use client";

import {
  Banner,
  ChaptersIcon,
  LikesIcon,
  Profile,
  ProjectsWrapper,
  ShortName,
  SortingButton,
  StatsAmount,
  StatsBlock,
  StatsBlocks,
  StatsContent,
  StatsDesc,
  TabsWrapper,
  TitlesIcon,
  ViewsIcon,
  SortingIcon,
  Wrapper,
  MembersWrapper,
  Acknowledgments,
} from "../../team/[slug]/styled";
import { getComicTranslator } from "@/api/mocks/queries/use-get-comic-translator";
import { useCallback, useEffect, useState } from "react";
import { Tabs } from "@/components/Tabs";
import LikeIcon from "@icons/svg/like.svg";
import GearIcon from "@icons/svg/gear.svg";
import ViewIcon from "@icons/svg/view.svg";
import BookmarkIcon from "@icons/svg/bookmark.svg";
import CommentIcon from "@icons/svg/comment.svg";
import NewIcon from "@icons/svg/new.svg";
import { Dropdown } from "@/components/Dropdown";
import { ComicPreviewMinimized } from "@/app/(tabs)/home/ComicPreviewMinimized";
import {
  BookmarkEditorContainer,
  BookmarksContainer,
  DefaultContainer,
  EditBannerButton,
  Flexbox,
  FlexboxInputWrapper,
  GridBox,
  IDStat,
  ImageWrapper,
  InputTitle,
  LevelBarThumb,
  LevelBarWrapper,
  LevelIndicator,
  LevelStat,
  LevelStats,
  ParamName,
  ParamsWrapper,
  ProfileContent,
  ProfileStats,
  RankIndicator,
  SettingsBlock,
  SettingsBlockParam,
  SettingsBlockTitle,
  SettingsWrapper,
  StatKey,
  StatValue,
  TeamAvatar,
  TeamContent,
  TeamDescription,
  TeamInfo,
  TeamTitle,
  TeamWrapper,
  ToolsBlock,
  ToolsFlex,
  UserSettingsBlock,
  UserSettingsWrapper,
  WarningBlock,
  WarningIcon,
  WarningText,
} from "../styled";
import type { Comic } from "@/api/types/comic";
import { Comments } from "@/components/Comments";
import { MessageBlock } from "@/components/MessageBlock";
import { getBookmarkComic } from "@/api/mocks/queries/use-get-user-bookmark-comic";
import { getUserBookmarks } from "@/api/mocks/queries/user-get-user-bookmarks";
import Modal from "@/components/Modal";
import BookmarkEditor from "@/components/BookmarkListEditor";
import { BookmarkCreateContainer } from "@/components/BookmarkListEditor/styled";
import { ImageInput } from "@/components/ImageInput";
import InfoIcon from "@icons/svg/info-filled.svg";
import { Checkbox } from "@/components/Checkbox";
import { TeamLink } from "@/components/TeamLink";
import Input from "@/components/Input";
import { getUserTeams } from "@/api/mocks/queries/use-get-user-teams";
import { Switch } from "@/components/Switch";
import InputSelect from "@/components/InputSelect";
import type { User } from "@/api/types/user";
import { Blurer } from "@/components/SideBarMobile/styled";
import CropFileInput from "@/components/CropFileInput";
import { $apiWithoutAuth } from "@/api/axiosInstance";

interface Props {
  user: User;
}

const ProfilePageBody = ({ user }: Props) => {
  const bookmarks = getUserBookmarks();

  const [editBannerActive, setEditBannerActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sortingType, setSortingType] = useState<number>(0);
  const [comic, setComic] = useState<Comic>({} as Comic);
  const [bookmarkComics, setBookmarkComics] = useState<Comic[]>([]);
  const [bookmarkComicsSearch, setBookmarkComicsSearch] = useState<string>("");
  const [editBookmarksModalActive, setEditBookmarksModalAcitve] =
    useState<boolean>(false);
  const [bookmarkComicsSearched, setBookmarkComicsSearcher] = useState<Comic[]>(
    []
  );
  const [bookmarkSelected, setBookmarkSelected] = useState<string>(
    bookmarks.data[0].id
  );
  const [createTeamModalActive, setCreateTeamModalActive] =
    useState<boolean>(false);
  const [preloadedFile, setPreloadedFile] = useState<any>(null);
  const [localPreview, setLocalPreview] = useState<string>("");
  const [avatarBlob, setAvatarBlob] = useState<any>(null);
  const [avararBUrl, setAvatarBUrl] = useState<string>("");
  const [teamLinks, setTeamLinks] = useState<number>(0);

  const teams = getUserTeams();

  const { data } = getComicTranslator();

  const loadBookmarkComics = async (bookmarkId: string) => {
    const data = await getBookmarkComic(bookmarkId || "");
    setBookmarkComics(data.data);
  };

  const saveAvatar = (url: string, data: string) => {
    setAvatarBUrl(url);
    setAvatarBlob(data);
  };

  const savePreloadedFile = (url: string, data: string) => {
    setPreloadedFile(data);
    setLocalPreview(url);
  };

  const updateBanner = async (url: string, blob: Blob) => {
    user.banner = url;
    setEditBannerActive(false);
    const formData = new FormData();
    formData.append("file", blob);
    await $apiWithoutAuth.post("/user/banner", formData, {
      headers: {
        "Content-Type": "x-ww-form-urlencoded",
      },
    });
  };

  useEffect(() => {
    updateAvatar();
  }, [avatarBlob]);

  const updateAvatar = async () => {
    if (!avatarBlob) return;
    user.avatar = localPreview;
    const formData = new FormData();
    formData.append("file", avatarBlob);
    await $apiWithoutAuth.post("/user/avatar", formData, {
      headers: {
        "Content-Type": "x-ww-form-urlencoded",
      },
    });
  };

  useEffect(() => {
    loadBookmarkComics(bookmarkSelected);
  }, [bookmarkSelected]);

  useEffect(() => {
    setBookmarkComicsSearcher(
      bookmarkComics.filter(
        (comic) => !comic.name.includes(bookmarkComicsSearch)
      )
    );
  }, [bookmarkComicsSearch]);

  return (
    <Wrapper>
      <Modal
        state={editBannerActive}
        setState={setEditBannerActive}
        title="Редактировать баннер"
      >
        <CropFileInput onCropComplete={updateBanner} />
      </Modal>
      <Banner $background={user.banner}>
        <EditBannerButton
          className="button-filled"
          onClick={() => setEditBannerActive(true)}
        >
          Редактировать
        </EditBannerButton>
        <Profile>
          <ImageInput
            key={2323}
            defaultImg={user.avatar}
            onChange={saveAvatar}
            type="category"
          />
          <ProfileStats>
            <ShortName>
              {user.username}
              <RankIndicator $rank={user.role}>
                {user.role &&
                  `
                            ${user.role === "user" ? "Читатель" : ""}
                            ${user.role === "moderator" ? "Модератор" : ""}
                            ${user.role === "admin" ? "Администратор" : ""}
                            ${user.role === "owner" ? "Владелец" : ""}
                        `}
              </RankIndicator>
            </ShortName>
            <LevelStats>
              <LevelIndicator>
                Уровень:
                <span>
                  {user.role &&
                    `
                            ${user.role === "user" ? "0" : ""}
                            ${user.role === "moderator" ? "1" : ""}
                            ${user.role === "admin" ? "2" : ""}
                            ${user.role === "owner" ? "3" : ""}
                        `}
                </span>
              </LevelIndicator>
              <LevelBarWrapper>
                <LevelBarThumb style={{ width: user.xp }}></LevelBarThumb>
              </LevelBarWrapper>
              <LevelStat>{user.xp} / 100</LevelStat>
            </LevelStats>
            <IDStat>
              <StatKey>ID:</StatKey>
              <StatValue>{user._id}</StatValue>
            </IDStat>
          </ProfileStats>
        </Profile>
        <TabsWrapper>
          <Tabs
            tabs={["Профиль", "Закладки", "Мои Команды", "Настройки"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </TabsWrapper>
      </Banner>
      {activeTab === 0 && (
        <ProfileContent>
          <StatsBlocks>
            <StatsBlock>
              <LikesIcon as={LikeIcon} />
              <StatsContent>
                <StatsAmount>178.26k</StatsAmount>
                <StatsDesc>Лайков</StatsDesc>
              </StatsContent>
            </StatsBlock>
            <StatsBlock>
              <TitlesIcon as={BookmarkIcon} />
              <StatsContent>
                <StatsAmount>45</StatsAmount>
                <StatsDesc>Закладок</StatsDesc>
              </StatsContent>
            </StatsBlock>
            <StatsBlock>
              <ChaptersIcon as={ViewIcon} />
              <StatsContent>
                <StatsAmount>1.68k</StatsAmount>
                <StatsDesc>Просмотров</StatsDesc>
              </StatsContent>
            </StatsBlock>
            <StatsBlock>
              <ViewsIcon as={CommentIcon} />
              <StatsContent>
                <StatsAmount>374.94k</StatsAmount>
                <StatsDesc>Коментариев</StatsDesc>
              </StatsContent>
            </StatsBlock>
          </StatsBlocks>
          <Comments type="comic" comic={comic} />
        </ProfileContent>
      )}
      {activeTab === 1 && (
        <ProjectsWrapper>
          <ToolsFlex>
            <ToolsBlock>
              <Dropdown
                cb={(e) => setBookmarkSelected(e.key)}
                items={bookmarks.data.map((el) => ({
                  name: el.name,
                  key: el.id,
                }))}
              />
              <SortingButton onClick={() => setEditBookmarksModalAcitve(true)}>
                <SortingIcon as={GearIcon} $active={sortingType === 1} />
              </SortingButton>
              <Modal
                title="Редактирование закладок"
                setState={setEditBookmarksModalAcitve}
                state={editBookmarksModalActive}
              >
                <BookmarkEditorContainer>
                  {bookmarks.data.map((bookmark) => (
                    <BookmarkEditor
                      bookmark={bookmark}
                      onUpdate={() => null}
                      key={bookmark.id}
                    />
                  ))}
                  <BookmarkCreateContainer>
                    <input
                      placeholder="Название нового списка"
                      className="input-default"
                    />
                    <button
                      style={{ width: 86 }}
                      className="button-transparent"
                    >
                      Создать
                    </button>
                  </BookmarkCreateContainer>
                </BookmarkEditorContainer>
              </Modal>
            </ToolsBlock>
            <ToolsBlock>
              <input
                className="input-default"
                placeholder="Поиск"
                onChange={(e) => setBookmarkComicsSearch(e.target.value)}
              />
              <SortingButton
                onClick={() => setSortingType(sortingType === 1 ? 0 : 1)}
              >
                <SortingIcon as={NewIcon} $active={sortingType === 1} />
              </SortingButton>
            </ToolsBlock>
          </ToolsFlex>
          {bookmarkComics.length || bookmarkComicsSearched.length ? (
            <>
              {bookmarkComicsSearch ? (
                <BookmarksContainer>
                  {bookmarkComicsSearched.map((el) => {
                    return (
                      <ComicPreviewMinimized nested comic={el} key={el.id} />
                    );
                  })}
                </BookmarksContainer>
              ) : (
                <BookmarksContainer>
                  {bookmarkComics.map((el) => {
                    return (
                      <ComicPreviewMinimized nested comic={el} key={el.id} />
                    );
                  })}
                </BookmarksContainer>
              )}
            </>
          ) : (
            <DefaultContainer>
              <MessageBlock>У вас нет закладок</MessageBlock>
              <button className="button-filled">Перейти в каталог</button>
            </DefaultContainer>
          )}
        </ProjectsWrapper>
      )}
      {activeTab === 2 && (
        <MembersWrapper>
          <ToolsFlex>
            <ToolsBlock>
              <h2>Команды</h2>
            </ToolsBlock>
            <ToolsBlock>
              <button
                className="button-filled"
                onClick={() => setCreateTeamModalActive(true)}
              >
                Создать команду
              </button>
            </ToolsBlock>
            <Modal
              setState={setCreateTeamModalActive}
              state={createTeamModalActive}
              title="Создать команду"
            >
              <GridBox>
                <Flexbox>
                  <ImageWrapper>
                    <ImageInput
                      key={2323}
                      defaultImg={
                        "https://cdn.savageuniversal.com/media/catalog/product/cache/b957c6da7b66a4418290e73ac836efb5/b/a/backgrounds-savage-vinyl-backgrounds-sa-v20-01.jpg"
                      }
                      onChange={savePreloadedFile}
                      type="category"
                    />
                  </ImageWrapper>
                  <GridBox>
                    <FlexboxInputWrapper>
                      <Input
                        onChange={() => null}
                        type="input"
                        placeholder="Введите название команды"
                      />
                    </FlexboxInputWrapper>
                    <FlexboxInputWrapper>
                      <Input
                        onChange={() => null}
                        type="input"
                        placeholder="Введите описание команды"
                      />
                    </FlexboxInputWrapper>
                  </GridBox>
                </Flexbox>
                <GridBox style={{ marginTop: 24 }}>
                  <FlexboxInputWrapper>
                    <InputTitle>Информация для верификации команды</InputTitle>
                    <Input
                      onChange={() => null}
                      placeholder="Ваш канал или ссылка где мы можем связаться с вами."
                      type="textarea"
                    />
                    <WarningBlock>
                      <WarningIcon as={InfoIcon} />
                      <WarningText>
                        Оставьте, пожалуйста, ссылку на ваш канал или напишите
                        над какими тайтлами вы работаете. Если мы не сможем
                        верифицировать вашу команду, ваш запрос будет
                        проигнорирован. Мы уважаем вашу конфиденциальность,
                        поэтому если вы не хотите оставлять контакты для связи,
                        напишут любой символ.
                      </WarningText>
                    </WarningBlock>
                  </FlexboxInputWrapper>
                </GridBox>
              </GridBox>
              <GridBox style={{ marginTop: 48 }}>
                <b>Добавьте ссылки на соц. сети или донаты</b>
                <GridBox>
                  {Array(teamLinks)
                    .fill(teamLinks)
                    .map((el, index) => {
                      return <TeamLink key={index} onChange={() => null} />;
                    })}
                </GridBox>
                <button
                  className="button-filled"
                  onClick={() => setTeamLinks(teamLinks + 1)}
                >
                  Добавить ссылку
                </button>
                <Checkbox
                  placeholder="Я прочитал/ла и согласен/согласна с правилами публикации контента и возрастными ограничениями."
                  cb={() => null}
                />
              </GridBox>
            </Modal>
          </ToolsFlex>
          <BookmarksContainer>
            {teams.data.map((team) => {
              return (
                <TeamWrapper key={team.id}>
                  <TeamInfo>
                    <TeamAvatar src={team.avatar} />
                    <TeamContent>
                      <TeamTitle>{team.name}</TeamTitle>
                      <TeamDescription>{team.description}</TeamDescription>
                    </TeamContent>
                  </TeamInfo>
                  <button
                    style={{ width: "auto" }}
                    className="button-transparent"
                  >
                    Перейти
                  </button>
                </TeamWrapper>
              );
            })}
          </BookmarksContainer>
        </MembersWrapper>
      )}
      {activeTab === 3 && (
        <SettingsWrapper>
          <SettingsBlock>
            <SettingsBlockTitle>Настройки</SettingsBlockTitle>
            <UserSettingsWrapper>
              <UserSettingsBlock $type>
                <Input onChange={() => null} type="input" placeholder="Email" />
                <Input
                  onChange={() => null}
                  type="input"
                  placeholder="Юзернейм"
                />
              </UserSettingsBlock>
              <UserSettingsBlock $type={false}>
                <InputSelect
                  elements={[
                    {
                      index: 0,
                      value: "Он",
                    },
                    {
                      index: 0,
                      value: "Она",
                    },
                    {
                      index: 0,
                      value: "Они",
                    },
                  ]}
                  placeholder="Обращение"
                />
                <Input
                  onChange={() => null}
                  placeholder="Описание"
                  type="textarea"
                />
              </UserSettingsBlock>
            </UserSettingsWrapper>
            <button className="button-filled">Обновить</button>
          </SettingsBlock>
          <SettingsBlock>
            <SettingsBlockTitle>Доступ к контенту</SettingsBlockTitle>
            <ParamsWrapper>
              <SettingsBlockParam>
                <ParamName>Хочу просматривать тайтлы 16+</ParamName>
                <Switch placeholder="" cb={() => null} />
              </SettingsBlockParam>
              <SettingsBlockParam>
                <ParamName>Хочу просматривать тайтлы 18+</ParamName>
                <Switch placeholder="" cb={() => null} />
              </SettingsBlockParam>
              <SettingsBlockParam>
                <ParamName>Спрятать свои команды</ParamName>
                <Switch placeholder="" cb={() => null} />
              </SettingsBlockParam>
              <SettingsBlockParam>
                <ParamName>Спрятать свои закладки</ParamName>
                <Switch placeholder="" cb={() => null} />
              </SettingsBlockParam>
            </ParamsWrapper>
          </SettingsBlock>
        </SettingsWrapper>
      )}
    </Wrapper>
  );
};

export default ProfilePageBody;
