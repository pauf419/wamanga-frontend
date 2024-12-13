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
  RulesPagesSC,
  Title,
} from "./styled";
import { PrimaryButton } from "@/components/Button";

const RulesPage = () => {
  return (
    <RulesPagesSC isImageBehind>
      <Background $backgroundImage={"/mock-background.png"}>
        <Content>
          <Title>Правила сайта</Title>
          <Description>
            <Icon src="/rules.png" width={108} height={108} alt="rules" />
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi
              ipsa eius illum dolorum! Incidunt vitae neque nostrum officia.
              Facilis, molestiae pariatur. Maiores assumenda iste nulla sunt
              facilis quod officiis?
            </DescriptionText>
          </Description>
          <Blocks>
            <Block>
              <BlockLeft>
                <BlockTitle>Общие правила</BlockTitle>
              </BlockLeft>
              <PrimaryButton href="/rules/general">Открыть</PrimaryButton>
            </Block>
            <Block>
              <BlockLeft>
                <BlockTitle>Правила для командо</BlockTitle>
                <BlockDescription>(переводчикам и авторам)</BlockDescription>
              </BlockLeft>
              <PrimaryButton href="/rules/teams">Открыть</PrimaryButton>
            </Block>
            <Block>
              <BlockLeft>
                <BlockTitle>Часто задаваемые вопросы</BlockTitle>
                <BlockDescription>(FAQ - Вопрос/Ответ)</BlockDescription>
              </BlockLeft>
              <PrimaryButton href="/rules/faq">Открыть</PrimaryButton>
            </Block>
          </Blocks>
        </Content>
      </Background>
    </RulesPagesSC>
  );
};

export default RulesPage;
