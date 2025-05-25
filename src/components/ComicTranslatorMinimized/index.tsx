"use client";

import React from "react";
import type { ComicTranslator } from "@/api/types/comic-translator";
import Logo from "@icons/svg/logo.svg?url";
import {
  Banner,
  Wrapper,
  Header,
  Body,
  Avatar,
  Name,
  Description,
  Icons,
  IconLink,
  Icon,
  NameWrapper,
  LeaderboardIndex,
  PreviewStatsWrapper,
  PreviewStat,
  PreviewStatKey,
  PreviewStatValue,
} from "./styled";
import TelegramIcon from "@icons/svg/telegram.svg";
import DiscordIcon from "@icons/svg/discord.svg";
import DonationIcon from "@icons/svg/donation.svg";
import { DonationPanel } from "../DonationPanel";
import type { Team } from "@/api/types/team";

interface Props {
  translator: Team;
  preview?: boolean;
  leaderboardIndex?: number | undefined;
}

export const ComicTranslatorMinimized = ({
  translator,
  preview = false,
  leaderboardIndex,
}: Props) => {
  return (
    <Wrapper $preview={preview}>
      <Header>
        <Banner src={translator.banner} />
        <Avatar src={translator.avatar} alt="Logo" />
      </Header>
      <Body>
        <NameWrapper>
          <Name>{translator.name}</Name>
          {leaderboardIndex ? (
            <LeaderboardIndex>Топ {leaderboardIndex}</LeaderboardIndex>
          ) : (
            <></>
          )}
        </NameWrapper>
        <Description>{translator.description}</Description>
        {preview ? (
          <PreviewStatsWrapper>
            {translator.mangas ? (
              <PreviewStat>
                <PreviewStatKey>Добавлено манг:</PreviewStatKey>
                <PreviewStatValue>{translator.mangas.length}</PreviewStatValue>
              </PreviewStat>
            ) : (
              <></>
            )}
            <PreviewStat>
              <PreviewStatKey>Лайков:</PreviewStatKey>
              <PreviewStatValue>{translator.likes}</PreviewStatValue>
            </PreviewStat>
          </PreviewStatsWrapper>
        ) : (
          <></>
        )}
        <Icons>
          {translator.telegram && (
            <IconLink href={translator.telegram}>
              <Icon as={TelegramIcon} />
            </IconLink>
          )}
          {translator.boosty && (
            <IconLink href={translator.boosty}>
              <Icon as={DonationIcon} />
            </IconLink>
          )}
          {translator.discord && (
            <IconLink href={translator.discord}>
              <Icon as={DiscordIcon} />
            </IconLink>
          )}
        </Icons>
        {!preview && <DonationPanel cb={(b) => null} nested />}
      </Body>
    </Wrapper>
  );
};
