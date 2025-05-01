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
} from "./styled";
import TelegramIcon from "@icons/svg/telegram.svg";
import DiscordIcon from "@icons/svg/discord.svg";
import DonationIcon from "@icons/svg/donation.svg";
import { DonationPanel } from "../DonationPanel";
import type { Team } from "@/api/types/team";

interface Props {
  translator: Team;
}

export const ComicTranslatorMinimized = ({ translator }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Banner src={translator.banner} />
        <Avatar src={translator.avatar} alt="Logo" />
      </Header>
      <Body>
        <Name>{translator.name}</Name>
        <Description>{translator.description}</Description>
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
        <DonationPanel cb={(b) => null} nested />
      </Body>
    </Wrapper>
  );
};
