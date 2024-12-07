"use client";

import React, { useEffect, useState } from "react";
import { Tab, TabsSC } from "./styled";

interface Props {
  tabs: string[];
}

export const Tabs = ({ tabs }: Props) => {
  const GAP = 8;

  const refs = tabs.map(() => React.createRef<HTMLDivElement>());
  const [activeTab, setActiveTab] = React.useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [activeTabWidth, setActiveTabWidth] = useState(0);

  useEffect(() => {
    const totalWidth = refs
      .slice(0, activeTab)
      .reduce((acc, ref) => acc + (ref.current?.offsetWidth || 0), 0);

    const margin = totalWidth + GAP * activeTab;
    const width = refs[activeTab].current?.offsetWidth || 0;

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
