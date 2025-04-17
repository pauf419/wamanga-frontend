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
        <GridContainer>
          {titles.map((title) => (
            <ComicUnit comic={title} key={title._id} />
          ))}
        </GridContainer>
      </Container>
    </BasePage>
  );
};

export default AdminPage;
