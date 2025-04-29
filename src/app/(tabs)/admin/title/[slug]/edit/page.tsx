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
} from "../../../styled";
import { redirect } from "next/navigation";
import { getBySlug } from "@/api/title";
import Input from "@/components/Input";
import EditTitlePageForm from "./Form";

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
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href={`/admin/title/${slug}/edit`}>Edit</Pathname>
        </PathnameHeader>
        <EditTitlePageForm preset={title} />
      </Container>
    </BasePage>
  );
};

export default AdminPage;
