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

} from "./styled";
import { Tabs } from "@/components/Tabs";
import type{ Comic } from "@/api/types/comic";

interface Props {
  comics: Comic;
}

export const MainSection = ({ comics }: Props) => {
  const tabs = ["Описание", "Главы"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? (
        <Content>
          <div>
            <Description>{comics.description}</Description>
          </div>
          <div>
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
          </div>
        </Content>
      ) : (
        "Главы"
      )}
    </div>
  );
};
