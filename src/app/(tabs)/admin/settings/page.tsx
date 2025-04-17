import BasePage from "@/components/BasePage";
import { Container, Pathname, PathnameHeader, PathnameSpacer } from "../styled";
import SettingsPageForm from "./Form";

const AdminPage = async () => {
  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/Settings">Settings</Pathname>
        </PathnameHeader>
      </Container>
      <SettingsPageForm />
    </BasePage>
  );
};

export default AdminPage;
