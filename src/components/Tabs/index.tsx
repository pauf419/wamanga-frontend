"use client";

import React, { useEffect, useState } from "react";
import { Tab, TabsSC } from "./styled";

interface Props {
  tabs: string[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {
  const GAP = 8;
  const refs = tabs.map(() => React.createRef<HTMLDivElement>());
  const [marginLeft, setMarginLeft] = useState(0);
  const [activeTabWidth, setActiveTabWidth] = useState(0);

  useEffect(() => {
    const left = refs[0]?.current?.getBoundingClientRect().left || 0;
    const current = refs[activeTab]?.current?.getBoundingClientRect();
    const width = current?.width || 0;
    const currentLeft = current?.left || 0;
    const margin = currentLeft - left;

    setMarginLeft(margin);
    setActiveTabWidth(width);
  }, [activeTab, refs]);

  return (
    <TabsSC
      $gap={GAP}
      $marginLeft={marginLeft}
      $activeTabWidth={activeTabWidth}
    >
      {tabs.map((tab, index) => (
        <Tab
          ref={refs[index]}
          key={index}
          $isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </Tab>
      ))}
    </TabsSC>
  );
};
