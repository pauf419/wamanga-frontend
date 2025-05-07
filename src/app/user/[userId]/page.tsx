import { getUserInfo } from "@/api/user";
import BasePage from "@/components/BasePage";
import { redirect } from "next/navigation";
import ProfilePageBody from "../UserBody";

export type paramsType = Promise<{
  params: {
    userId: string;
  };
}>;

const UserPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  const user = await getUserInfo(userId);

  if (!user) redirect("/");

  return (
    <BasePage>
      <ProfilePageBody user={user} />
    </BasePage>
  );
};

export default UserPage;
