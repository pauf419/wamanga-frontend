import HomePage from "./(tabs)/home/page";
import { StyledEngineProvider } from "@mui/material/styles";

import type { Metadata, ResolvingMetadata } from "next";
import { getSettings } from "@/api/settings";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: `${settings.title} - Манга, манхва на русском, Слив манги для вас`,
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
      title: settings.title,
      description: settings.longTitle,
      siteName: settings.title,
      images: [
        {
          url: settings.logo,
          width: 1200,
          height: 630,
          alt: settings.title,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `${settings.metadataBase}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

export default function Home() {
  return <HomePage />;
}
