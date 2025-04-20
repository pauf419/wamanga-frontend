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
} from "../../styled";
import { redirect } from "next/navigation";
import { getBySlug } from "@/api/title";
import { Link } from "../components/ComicUnit/styled";
import Input from "@/components/Input";
import ChapterListMinimized from "../components/UnitListMinimized";
import { Checkbox } from "@/components/Checkbox";
import ComicEditableDataList from "../components/DataListEditable/Comic";

const AdminPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const title = await getBySlug(slug);

  if (!slug || !title) redirect("/admin/title");

  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/admin/title">Comics</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}`}>{slug}</Pathname>
        </PathnameHeader>
        <Block>
          <h1>{title.name}</h1>
          <FlexBlock>
            <Poster src={title.imagePath} />
            <ComicEditableDataList title={title} />
          </FlexBlock>
        </Block>
        <ChapterListMinimized chapters={title.chapters} slug={slug} />
      </Container>
    </BasePage>
  );
};

export default AdminPage;
