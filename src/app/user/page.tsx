import BasePage from "@/components/BasePage";
import ProfilePageBody from "./UserBody";
import { getSession } from "../lib";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session) redirect("/");

  return (
    <BasePage>
      <ProfilePageBody user={session} />
    </BasePage>
  );
};

export default ProfilePage;
