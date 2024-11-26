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
import Logo from "@icons/svg/big-logo.svg";
import Telegram from "@icons/svg/telegram.svg";
import Instagram from "@icons/svg/instagram.svg";
import Tiktok from "@icons/svg/tiktok.svg";

const Footer = () => {
  return (
    <FooterSC>
      <Content>
        <Logo />
        <Section>
          <Title>Инфо</Title>
          <Links>
            <LinkSC href={"/"}>О нас</LinkSC>
            <LinkSC href={"/"}>О вас</LinkSC>
            <LinkSC href={"/"}>О них</LinkSC>
          </Links>
        </Section>
        <Section>
          <Title>Разделы</Title>
          <Links>
            <LinkSC href={"/"}>E=mc^2</LinkSC>
            <LinkSC href={"/"}>a^2+b^2=c^2</LinkSC>
            <LinkSC href={"/"}>Ни о чем</LinkSC>
          </Links>
        </Section>
        <Socials>
          <Social href={"https://google.com"}>
            <Telegram />
          </Social>
          <Social href={"https://google.com"}>
            <Instagram />
          </Social>
          <Social href={"https://google.com"}>
            <Tiktok />
          </Social>
        </Socials>
      </Content>
      <Copyright>© 2024 WaComics</Copyright>
    </FooterSC>
  );
};

export default Footer;
