import BasePage from "@/components/BasePage";
import {
  Container,
  GridContainer,
  Pathname,
  PathnameHeader,
  PathnameSpacer,
} from "../styled";
import { paginateTitles } from "@/api/title";
import { ComicUnit } from "./components/ComicUnit";
import AvailableTitlesBody from "./AvailableTitlesBody";

const AdminPage = async () => {
  const titles = await paginateTitles(0);

  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/titles">Comics</Pathname>
        </PathnameHeader>

        <AvailableTitlesBody titles={titles} />
      </Container>
    </BasePage>
  );
};

export default AdminPage;
