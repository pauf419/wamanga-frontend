"use client";

import React from "react";
import type { ComicTranslator } from "@/api/types/comic-translator";
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
} from "./styled";
import TelegramIcon from "@icons/svg/telegram.svg";
import DiscordIcon from "@icons/svg/discord.svg";
import DonationIcon from "@icons/svg/donation.svg";
import { DonationPanel } from "../DonationPanel";

interface Props {
  translator: ComicTranslator;
}

export const ComicTranslatorMinimized = ({ translator }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Banner src={translator.banner} />
        <Avatar src={translator.avatar} />
      </Header>
      <Body>
        <Name href="/team/0239203">{translator.name}</Name>
        <Description>{translator.description}</Description>
        <Icons>
          {translator.telegram && (
            <IconLink href={translator.telegram}>
              <Icon as={TelegramIcon} />
            </IconLink>
          )}
          <IconLink>
            <Icon as={DonationIcon} />
          </IconLink>
          {translator.discord && (
            <IconLink href={translator.discord}>
              <Icon as={DiscordIcon} />
            </IconLink>
          )}
        </Icons>
        <DonationPanel cb={(b) => null} nested />
      </Body>
    </Wrapper>
  );
};
