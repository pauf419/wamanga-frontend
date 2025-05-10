import { getUserInfo } from "@/api/user";
import BasePage from "@/components/BasePage";
import { redirect } from "next/navigation";
import ProfilePageBody from "../UserBody";
import type { Metadata } from "next";
import { getSettings } from "@/api/settings";

export type paramsType = Promise<{
  params: {
    userId: string;
  };
}>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ userId: string }>;
}): Promise<Metadata> {
  const { userId } = await params;
  const user = await getUserInfo(userId);
  const settings = await getSettings();
  return {
    title: `${settings.title} - ${user.username}`,
    description: settings.longTitle,
    metadataBase: new URL(settings.metadataBase),
    creator: settings.creator,
    publisher: settings.publisher,
    icons: {
      icon: settings.logo,
      shortcut: settings.logo,
      apple: settings.logo,
    },
    openGraph: {
      title: `${settings.title} - ${user.username}`,
      description: settings.longTitle,
      siteName: `${settings.title} - ${user.username}`,
      images: [
        {
          url: user.avatar,
          width: 1200,
          height: 630,
          alt: settings.title,
        },
      ],
      type: "website",
    },
  };
}

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
