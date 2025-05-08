import BasePage from "@/components/BasePage";
import {
  Container,
  Pathname,
  PathnameHeader,
  PathnameSpacer,
} from "../../styled";
import SettingsPageForm from "./Form";
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";

const AdminPageNewComic = async () => {
  const session = await getSession();

  if (!session || session.role !== "owner") return redirect("/");

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
