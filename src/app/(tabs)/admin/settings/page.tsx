import BasePage from "@/components/BasePage";
import { Container, Pathname, PathnameHeader, PathnameSpacer } from "../styled";
import SettingsPageForm from "./Form";
import { getSettings } from "@/api/settings";
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getSession();

  if (!session || session.role !== "owner") return redirect("/");
  const settings = await getSettings();

  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/Settings">Settings</Pathname>
        </PathnameHeader>
      </Container>
      <SettingsPageForm settingsPreset={settings} />
    </BasePage>
  );
};

export default AdminPage;
