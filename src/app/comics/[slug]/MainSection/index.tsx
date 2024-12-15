"use client";

import React, { useState } from "react";
import {
  Content,
  Description,
  InfoTag,
  InfoTagBadge,
  InfoTags,
  InfoTagText,
  InfoTagTitle,
  Left,
  MainSectionSC,
  Right,
} from "./styled";
import { Tabs } from "@/components/Tabs";
import type{ Comics } from "@/api/types/comics";

interface Props {
  comics: Comics;
}

export const MainSection = ({ comics }: Props) => {
  const tabs = ["Описание", "Главы"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <MainSectionSC>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? (
        <Content>
          <Left>
            <Description>{comics.description}</Description>
          </Left>
          <Right>
            <InfoTags>
              <InfoTag>
                <InfoTagTitle>Статус Перевода</InfoTagTitle>
                <InfoTagBadge>{comics.status}</InfoTagBadge>
              </InfoTag>
              <InfoTag>
                <InfoTagTitle>Статус тайтла</InfoTagTitle>
                <InfoTagBadge>{comics.status}</InfoTagBadge>
              </InfoTag>

              <InfoTag>
                <InfoTagTitle>Год выпуска</InfoTagTitle>
                <InfoTagText>{comics.year}</InfoTagText>
              </InfoTag>
            </InfoTags>
          </Right>
        </Content>
      ) : (
        "Главы"
      )}
    </MainSectionSC>
  );
};
