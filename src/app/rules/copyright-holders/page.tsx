import React from "react";
import {
  Background,
  Block,
  BlockDescription,
  BlockDetail,
  BlockLeft,
  Blocks,
  BlockTitle,
  Content,
  Description,
  DescriptionText,
  Icon,
  ImageSpacer,
  ListItem,
  ListWrapper,
  RawContainer,
  RulesImage,
  Title,
} from "../styled";
import { PrimaryButton } from "@/components/Button";
import BasePage from "@/components/BasePage";
import CatalogDropdown from "@/components/CatalogDropdown";
import { Checkbox } from "@/components/Checkbox";
import { DropdownsWrapper } from "@/app/(tabs)/catalog/styled";

import type { Metadata } from "next";
import { getSettings } from "@/api/settings";

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

const CopyrightHoldersPage = () => {
  return (
    <BasePage isImageBehind>
      <Background>
        <Content>
          <Title>Правообладателям</Title>
          <Description>
            <RulesImage
              quality={100}
              src="/rules-2.png"
              alt="rules"
              width={512}
              height={512}
            />
            <ImageSpacer />
            <Blocks>
              <RawContainer>
                Уважаемые правообладатели! Сайт wamanga.me уважает авторские
                права и интеллектуальную собственность. Мы не являемся
                правообладателями размещаемого на сайте контента и не загружаем
                материалы от имени администрации. Весь контент публикуется
                пользователями самостоятельно. Мы открыты к диалогу и всегда
                готовы оперативно реагировать на обоснованные обращения
                правообладателей. Если вы обнаружили нарушение своих прав на
                нашем ресурсе, пожалуйста, свяжитесь с нами — мы незамедлительно
                рассмотрим ваш запрос и при необходимости удалим соответствующие
                материалы. Для ускорения обработки обращения, пожалуйста,
                укажите:
              </RawContainer>

              <ListItem>
                <span>.</span> <span>Название произведения</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>Прямые ссылки на страницы с нарушающим контентом</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Документы или иные доказательства, подтверждающие ваши права
                </span>
              </ListItem>
              <ListItem>
                <span>.</span> <span>Контактную информацию для связи</span>
              </ListItem>

              <RawContainer>
                Связаться с администрацией можно по следующему адресу:{" "}
                <b>wamanga@bk.ru</b>
                Мы ценим вашу работу и стремимся к уважительному и законному
                использованию контента на платформе. С уважением, Администрация
                wamanga.me
              </RawContainer>
            </Blocks>
          </Description>
        </Content>
      </Background>
    </BasePage>
  );
};

export default CopyrightHoldersPage;
