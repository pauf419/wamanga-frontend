"use server";

import React from "react";
import {
  Content,
  Copyright,
  FooterSC,
  Links,
  LinkSC,
  Section,
  Social,
  Socials,
  Title,
} from "./styled";
import Logo from "@icons/svg/logo.svg";
import Telegram from "@icons/svg/telegram.svg";
import Instagram from "@icons/svg/instagram.svg";
import Tiktok from "@icons/svg/tiktok.svg";
import { getSettings } from "@/api/settings";

const Footer = async () => {
  const settings = await getSettings();

  return (
    <FooterSC>
      <Content>
        <Logo />
        <Section>
          <Title>Инфо</Title>
          <Links>
            <LinkSC href="/rules/copyright">Авторские права</LinkSC>
            <LinkSC href="/rules/user-agreement">
              Пользовательское соглашение
            </LinkSC>
            <LinkSC href="/rules/copyright-holders">Правообладателям</LinkSC>
          </Links>
        </Section>
        <Section>
          <Title>Разделы</Title>
          <Links>
            <LinkSC href="/">Главная</LinkSC>
            <LinkSC href="/catalog">Каталог</LinkSC>
          </Links>
        </Section>
        <Socials>
          <Social href={"https://t.me/wamanga_support"}>
            <Telegram />
          </Social>
        </Socials>
      </Content>
      <Copyright>
        © 2024 WaManga - WaManga@bk.ru - почта для вопросов
      </Copyright>
    </FooterSC>
  );
};

export default Footer;
