import BasePage from "@/components/BasePage";
import { Container, Pathname, PathnameHeader, PathnameSpacer } from "./styled";

const AdminPage = async () => {
  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/admin">Root</Pathname>
        </PathnameHeader>
      </Container>
    </BasePage>
  );
};

export default AdminPage;
