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
                <a className="button-filled" href="/rules/general">
                  Открыть
                </a>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Правила для команд</BlockTitle>
                  <BlockDescription>(Переводчикам и авторам)</BlockDescription>
                </BlockLeft>
                <a className="button-filled" href="/rules/teams">
                  Открыть
                </a>
              </Block>
              <Block>
                <BlockLeft>
                  <BlockTitle>Часто задаваемые вопросы</BlockTitle>
                  <BlockDescription>(FAQ - Вопрос/Ответ)</BlockDescription>
                </BlockLeft>
                <a className="button-filled" href="/rules/faq">
                  Открыть
                </a>
              </Block>
            </Blocks>
          </Description>
        </Content>
      </Background>
    </BasePage>
  );
};

export default RulesPage;
