import React from "react";

import type { Metadata } from "next";
import { getSettings } from "@/api/settings";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: `${settings.title} - Правила сайта`,
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
      title: `${settings.title} - Правила сайта`,
      description: settings.longTitle,
      siteName: `${settings.title} - Правила сайта`,
      images: [
        {
          url: settings.logo,
          width: 1200,
          height: 630,
          alt: `${settings.title} - Правила сайта`,
        },
      ],
      type: "website",
    },
  };
}

const TeamsRulesPage = () => {
  return <div>TeamsRulesPage</div>;
};

export default TeamsRulesPage;
