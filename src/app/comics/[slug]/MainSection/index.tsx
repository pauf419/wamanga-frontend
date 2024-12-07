"use client";

import React, { useState } from "react";
import { Content, MainSectionSC } from "./styled";
import { Tabs } from "@/components/Tabs";

export const MainSection = () => {
  const tabs = ["Описание", "Главы"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <MainSectionSC>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content>{activeTab === 0 ? "Описание" : "Главы"}</Content>
    </MainSectionSC>
  );
};
