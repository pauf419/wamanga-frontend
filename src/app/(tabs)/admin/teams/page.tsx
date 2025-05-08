import BasePage from "@/components/BasePage";
import { Container, Pathname, PathnameHeader, PathnameSpacer } from "../styled";
import { getAllUsers } from "@/api/user";
import { getSession, getTokens } from "@/app/lib";
import TeamsBody from "./TeamsBody";
import { redirect } from "next/navigation";

const AdminPageTeams = async () => {
  const session = await getSession();

  if (!session || session.role !== "owner") return redirect("/");
  const tokens = await getTokens();
  const users = await getAllUsers(tokens);

  if (!users) return <h1>no users</h1>;

  return (
    <BasePage>
      <Container>
        <PathnameHeader>
          <Pathname href="/admin">Admin</Pathname>
          <PathnameSpacer>\</PathnameSpacer>
          <Pathname href="/users">users</Pathname>
        </PathnameHeader>
        <TeamsBody users={users} />
      </Container>
    </BasePage>
  );
};

export default AdminPageTeams;
