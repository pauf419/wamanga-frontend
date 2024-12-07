"use client";

import React from "react";
import { Tab, TabsSC } from "./styled";

interface Props {
  tabs: string[];
}

export const Tabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const charWidth = 8.36;
  const gap = 8;

  const getMargin = () => {
    if (activeTab === 0) return 0;

    const newTabs = tabs.slice(0, activeTab);

    return newTabs.reduce((acc, tab) => acc + getWidth(tab), 0) + gap;
  };

  const getActiveTabWidth = () => {
    const activeTabWidth = tabs[activeTab].length * charWidth;
    if (activeTab === 0) return activeTabWidth - gap + 3;

    return activeTabWidth - gap + 2;
  };

  const getWidth = (tab: string) => {
    return tab.length * charWidth;
  };

  return (
    <TabsSC
      $tabsCount={tabs.length}
      $activeTab={activeTab}
      $activeTabWidth={getActiveTabWidth()}
      $marginLeft={getMargin()}
      $gap={gap}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          $isActive={activeTab === index}
          $width={getWidth(tab)}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </Tab>
      ))}
    </TabsSC>
  );
};
