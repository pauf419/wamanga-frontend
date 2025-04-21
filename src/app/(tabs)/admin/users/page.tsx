import BasePage from "@/components/BasePage";
import { Container, Pathname, PathnameHeader, PathnameSpacer } from "../styled";
import { getAllUsers } from "@/api/user";
import { getTokens } from "@/app/lib";
import UsersBody from "./UsersBody";

const AdminPageUsers = async () => {
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
        <UsersBody users={users} />
      </Container>
    </BasePage>
  );
};

export default AdminPageUsers;
