import BasePage from "@/components/BasePage";
import {
  Container,
  GridContainer,
  Pathname,
  PathnameHeader,
  PathnameSpacer,
} from "../styled";
import { adminPaginateTitles, paginateTitles } from "@/api/title";
import { ComicUnit } from "./components/ComicUnit";
import AvailableTitlesBody from "./AvailableTitlesBody";
import { getTokens } from "@/app/lib";

const AdminPage = async () => {
  const tokens = await getTokens();
  const titles = await adminPaginateTitles(
    0,
    0,
    "",
    tokens.accessToken,
    tokens.refreshToken
  );

  if (!titles) return <>sds</>;

  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/titles">Comics</Pathname>
        </PathnameHeader>

        <AvailableTitlesBody preset={titles} />
      </Container>
    </BasePage>
  );
};

export default AdminPage;
