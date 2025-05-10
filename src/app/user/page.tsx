import BasePage from "@/components/BasePage";
import ProfilePageBody from "./UserBody";
import { getSession } from "../lib";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getSettings } from "@/api/settings";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; genre: string }>;
}): Promise<Metadata> {
  const { slug, genre } = await params;
  const settings = await getSettings();
  return {
    title: `${settings.title} - Профиль`,
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
      title: `${settings.title} - Профиль`,
      description: settings.longTitle,
      siteName: `${settings.title} - Профиль`,
      type: "website",
    },
  };
}

const ProfilePage = async () => {
  const session = await getSession();

  if (!session) redirect("/");

  return (
    <BasePage>
      <ProfilePageBody user={session} current />
    </BasePage>
  );
};

export default ProfilePage;
