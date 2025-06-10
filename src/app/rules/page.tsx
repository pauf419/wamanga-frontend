import React from "react";
import {
  Background,
  Block,
  BlockDescription,
  BlockLeft,
  Blocks,
  BlockTitle,
  Content,
  Description,
  DescriptionText,
  Icon,
  ImageSpacer,
  RulesImage,
  Title,
} from "./styled";
import { PrimaryButton } from "@/components/Button";
import BasePage from "@/components/BasePage";
import type { Metadata } from "next";
import { getSettings } from "@/api/settings";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: `${settings.title} - Правила сайта`,
    description: settings.longTitle,
    metadataBase: new URL(settings.metadataBase),
    creator: settings.creator,
    publisher: settings.publisher,
    icons: {
      icon: settings.logo,
      shortcut: settings.logo,
      apple: settings.logo,
    },
    openGraph: {
      title: `${settings.title} - Правила сайта`,
      description: settings.longTitle,
      siteName: `${settings.title} - Правила сайта`,
      images: [
        {
          url: settings.logo,
          width: 1200,
          height: 630,
          alt: `${settings.title} - Правила сайта`,
        },
      ],
      type: "website",
    },
  };
}

const RulesPage = () => {
  return (
    <BasePage isImageBehind>
      <Background>
        <Content>
          <Title>Правила сайта</Title>
          <Description>
            <RulesImage
              quality={100}
              src="/rules.png"
              alt="rules"
              width={512}
              height={512}
            />
            <ImageSpacer />
            <Blocks>
              <Block>
                <BlockLeft>
                  <BlockTitle>Общие правила</BlockTitle>
                </BlockLeft>
                <Link className="button-filled" href="/rules/general">
                  Открыть
                </Link>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Авторские права</BlockTitle>
                </BlockLeft>
                <Link className="button-filled" href="/rules/copyright">
                  Открыть
                </Link>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Пользовательское соглашение</BlockTitle>
                </BlockLeft>
                <Link className="button-filled" href="/rules/user-agreement">
                  Открыть
                </Link>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Правообладателям</BlockTitle>
                </BlockLeft>
                <Link className="button-filled" href="/rules/copyright-holders">
                  Открыть
                </Link>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Правила для команд</BlockTitle>
                  <BlockDescription>(Переводчикам и авторам)</BlockDescription>
                </BlockLeft>
                <Link className="button-filled" href="/rules/teams">
                  Открыть
                </Link>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Часто задаваемые вопросы</BlockTitle>
                  <BlockDescription>(FAQ - Вопрос/Ответ)</BlockDescription>
                </BlockLeft>
                <Link className="button-filled" href="/rules/faq">
                  Открыть
                </Link>
              </Block>
            </Blocks>
          </Description>
        </Content>
      </Background>
    </BasePage>
  );
};

export default RulesPage;
