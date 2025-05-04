"use server";

import React from "react";
import BasePage from "@/components/BasePage";
import CatalogBody from "./CatalogBody";
import { searchManga } from "@/api/title";

const CatalogPage = async () => {
  const recommendedTitles = await searchManga([], [], [], [], [], [], 0, 30);

  return (
    <BasePage isImageBehind>
      <CatalogBody defaultTitles={recommendedTitles} />
    </BasePage>
  );
};

export default CatalogPage;
