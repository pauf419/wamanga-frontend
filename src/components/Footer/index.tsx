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
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(102485920, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/102485920"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </FooterSC>
  );
};

export default Footer;
