"use server";

import React from "react";
import BasePage from "@/components/BasePage";
import CatalogBody from "./CatalogBody";
import { searchManga } from "@/api/title";

import type { Metadata, ResolvingMetadata } from "next";
import { getSettings } from "@/api/settings";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: `${settings.title} - Каталог`,
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
      title: `${settings.title} - Каталог`,
      description: settings.longTitle,
      siteName: `${settings.title} - Каталог`,
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
  };
}

const CatalogPage = async () => {
  const recommendedTitles = await searchManga(
    [],
    [],
    [],
    [],
    [],
    [],
    undefined,
    undefined,
    0,
    30
  );

  return (
    <BasePage isImageBehind>
      <CatalogBody defaultTitles={recommendedTitles} />
    </BasePage>
  );
};

export default CatalogPage;
