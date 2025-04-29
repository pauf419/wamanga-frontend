import BasePage from "@/components/BasePage";
import {
  Container,
  Pathname,
  PathnameHeader,
  PathnameSpacer,
} from "../../styled";
import SettingsPageForm from "./Form";

const AdminPageNewComic = async () => {
  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/admin/title/new">New Title</Pathname>
        </PathnameHeader>
      </Container>
      <SettingsPageForm />
    </BasePage>
  );
};

export default AdminPageNewComic;
