"use client";

import {
  Acknowledgments,
  Avatar,
  Banner,
  ChaptersIcon,
  Content,
  CursorIconWrapper,
  Icon,
  LikesIcon,
  Link,
  LinkIcon,
  Links,
  LinksTitle,
  LongName,
  Names,
  Profile,
  ProjectsWrapper,
  ShortName,
  SortingButton,
  StatsAmount,
  StatsBlock,
  StatsBlocks,
  StatsContent,
  StatsDesc,
  StatsWrapper,
  TabsWrapper,
  TabTitle,
  TitlesIcon,
  Tools,
  ViewsIcon,
  SortingIcon,
  Wrapper,
  TeamProjects,
  MembersWrapper,
} from "./styled";
import { getComicTranslator } from "@/api/mocks/queries/use-get-comic-translator";
import AcknowledgmentIcon from "@icons/svg/acknowledgment.svg";
import { useState } from "react";
import { Tabs } from "@/components/Tabs";
import { DonationPanel } from "@/components/DonationPanel";
import LikeIcon from "@icons/svg/like.svg";
import TitleIcon from "@icons/svg/chapter-book.svg";
import ChapterIcon from "@icons/svg/chapters.svg";
import ViewIcon from "@icons/svg/view.svg";
import TelegramIcon from "@icons/svg/telegram.svg";
import SortingIco from "@icons/svg/sorting.svg";
import { Dropdown } from "@/components/Dropdown";
import { getTeamProjects } from "@/api/mocks/queries/use-get-team-projects";
import { ComicPreviewMinimized } from "@/app/(tabs)/home/ComicPreviewMinimized";
import { getTeamMembers } from "@/api/mocks/queries/use-get-team-members";
import { Member } from "@/components/Members";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sortingType, setSortingType] = useState<number>(0);
  const [tabs, setTabs] = useState<string[]>([
    "Профиль",
    "Проекты",
    "Участники",
  ]);

  const teamProjects = getTeamProjects();

  const teamMembers = getTeamMembers();

  const { data } = getComicTranslator();

  return (
    <Wrapper>
      <Banner $background={data.banner}>
        <Acknowledgments>
          <Icon as={AcknowledgmentIcon} />
          Подяк:
          <span>{data.acknowledgments}</span>
        </Acknowledgments>
        <Profile>
          <Avatar $avatar={data.avatar} />
          <Names>
            <ShortName>{data.name}</ShortName>
            <LongName>{data.longName}</LongName>
          </Names>
        </Profile>
        <TabsWrapper>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </TabsWrapper>
      </Banner>
      {activeTab === 0 && (
        <Content>
          <StatsWrapper>
            <StatsBlocks>
              <StatsBlock>
                <LikesIcon as={LikeIcon} />
                <StatsContent>
                  <StatsAmount>178.26k</StatsAmount>
                  <StatsDesc>Лайков</StatsDesc>
                </StatsContent>
              </StatsBlock>
              <StatsBlock>
                <TitlesIcon as={TitleIcon} />
                <StatsContent>
                  <StatsAmount>45</StatsAmount>
                  <StatsDesc>Тайтлов</StatsDesc>
                </StatsContent>
              </StatsBlock>
              <StatsBlock>
                <ChaptersIcon as={ChapterIcon} />
                <StatsContent>
                  <StatsAmount>1.68k</StatsAmount>
                  <StatsDesc>Разделов</StatsDesc>
                </StatsContent>
              </StatsBlock>
              <StatsBlock>
                <ViewsIcon as={ViewIcon} />
                <StatsContent>
                  <StatsAmount>374.94k</StatsAmount>
                  <StatsDesc>Просмотров</StatsDesc>
                </StatsContent>
              </StatsBlock>
            </StatsBlocks>
            <Links>
              <LinksTitle>Ссылки</LinksTitle>

              <Link>
                <CursorIconWrapper>
                  <LinkIcon as={TelegramIcon} />
                </CursorIconWrapper>
                Наш телеграм канал
              </Link>
              <Link>
                <CursorIconWrapper>
                  <LinkIcon as={TelegramIcon} />
                </CursorIconWrapper>
                Наш телеграм канал
              </Link>
              <Link>
                <CursorIconWrapper>
                  <LinkIcon as={TelegramIcon} />
                </CursorIconWrapper>
                Наш телеграм канал
              </Link>
            </Links>
          </StatsWrapper>
          <DonationPanel cb={() => null} />
        </Content>
      )}
      {activeTab === 1 && (
        <ProjectsWrapper>
          <TabTitle>Проекты команды</TabTitle>
          <Tools>
            <Dropdown
              cb={() => null}
              items={[
                {
                  name: "Все",
                  key: 0,
                },
                {
                  name: "Скоро",
                  key: 0,
                },
                {
                  name: "Переводится",
                  key: 0,
                },
                {
                  name: "Приостоновлено",
                  key: 0,
                },
                {
                  name: "Завершено",
                  key: 0,
                },
              ]}
            />
            <SortingButton
              onClick={() => setSortingType(sortingType === 1 ? 0 : 1)}
            >
              <SortingIcon as={SortingIco} $active={sortingType === 1} />
            </SortingButton>
          </Tools>
          <TeamProjects>
            {teamProjects.data.map((el, i) => (
              <ComicPreviewMinimized nested comic={el} key={i} />
            ))}
          </TeamProjects>
        </ProjectsWrapper>
      )}
      {activeTab === 2 && (
        <MembersWrapper>
          <TabTitle>Участники</TabTitle>
          <TeamProjects>
            {teamMembers.data.map((el) => (
              <Member member={el} key={el.id} />
            ))}
          </TeamProjects>
        </MembersWrapper>
      )}
    </Wrapper>
  );
};

export default TeamPage;
