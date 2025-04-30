import BasePage from "@/components/BasePage";
import {
  Block,
  Container,
  DataList,
  DataListInput,
  DataListItem,
  FlexBlock,
  GridContainer,
  MiniBoxWrapper,
  Pathname,
  PathnameHeader,
  PathnameSpacer,
  Poster,
  SegmentSeparator,
} from "../../../../styled";
import { getChapterById } from "@/api/chapter";
import { getBySlug } from "@/api/title";
import { redirect } from "next/navigation";
import ChapterPageListMinimized from "../../../components/UnitListMinimized/ChapterPageList";
import ChapterEditableDataList from "../../../components/DataListEditable/Chapter";
import { Action, ActionContainer, Controller, HeaderTitle } from "./styled";
import ControllerComponent from "./components/Controller";
import ActionPanel from "./components/ActionPanel";
import { getTeamById } from "@/api/team";

const AdminPage = async ({
  params,
}: {
  params: Promise<{ slug: string; chapterId: string }>;
}) => {
  const { slug, chapterId } = await params;

  const title = await getBySlug(slug);

  if (!slug || !title) redirect(`/admin/title/${slug}`);

  const team = await getTeamById(title.translationTeams[0]);

  return (
    <BasePage>
      <Container
        style={{
          minHeight: "calc(100dvh - 80px)",
          alignContent: "start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/admin/title">Comics</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}`}>{slug}</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}`} aria-disabled>
            chapters
          </Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}/chapters/new`}>New</Pathname>
        </PathnameHeader>
        <HeaderTitle>Добавить Главу</HeaderTitle>
        <ActionPanel title={title} team={team}/>
      </Container>
    </BasePage>
  );
};

export default AdminPage;
