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
  RulesImage,
  Title,
} from "../styled";
import { PrimaryButton } from "@/components/Button";
import BasePage from "@/components/BasePage";
import CatalogDropdown from "@/components/CatalogDropdown";
import { Checkbox } from "@/components/Checkbox";
import { DropdownsWrapper } from "@/app/(tabs)/catalog/styled";

const GeneralRulesPage = () => {
  return (
    <BasePage isImageBehind>
      <Background>
        <Content>
          <Title>Общие правила</Title>
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
              <BlockDetail>
                Правила используются как для юзеров так и для команд.
              </BlockDetail>
              <DropdownsWrapper>
                <CatalogDropdown first placeholder="Никнейм, аватар и прочее">
                  <ListWrapper>
                    <ListItem>
                      <span>1.</span> Никнеймы (псевдонимы, имя пользователей)
                      запрещено использовать названия гениталий, оскорбительные
                      или провокационные термины.
                    </ListItem>
                    <ListItem>
                      <span>2.</span> На аватарах и фонах профиля запрещено
                      размещение изображений гениталий, порнографических
                      материалов.
                    </ListItem>
                  </ListWrapper>
                </CatalogDropdown>
                <CatalogDropdown placeholder="Комментарии">
                  <ListWrapper>
                    <ListItem>
                      <span>1.</span> <span>Общая вежливость</span>
                    </ListItem>
                    <ListItem>
                      <span>·</span> Запрещено разводить конфликты, переходящие
                      на личности участников конфликта или посторонних людей
                    </ListItem>
                    <ListItem>
                      <span>·</span>Запрещенные травли и оскорбления на любой
                      почве (расовая, национальная и этническая принадлежность,
                      пол, гендер, сексуальная ориентация и т.д.)
                    </ListItem>
                    <ListItem>
                      <span>·</span> Запретные образы в сторону переводчиков на
                      основе их перевода
                    </ListItem>
                    <ListItem>
                      <span>·</span> Запрещенные спойлеры без использования
                      соответствующей пометки на комментарии
                    </ListItem>
                    <ListItem>
                      <span>·</span> Запрещенный спам однотипными сообщениями
                      или сообщениями, не имеющими смысла
                    </ListItem>
                    <ListItem>
                      <span>2.</span> <span>Возрастное ограничение</span>
                    </ListItem>
                    <ListItem>
                      <span>·</span> Все ограничения для тайтлов согласно
                      возрастному рейтингу хранятся в комментариях
                    </ListItem>
                  </ListWrapper>
                </CatalogDropdown>
                <CatalogDropdown placeholder="Реклама/Пиар">
                  <ListWrapper>
                    <ListItem>
                      <span>1.</span>{" "}
                      <span>Запрещена прямая и скрытая реклама</span>
                    </ListItem>
                    <ListItem>
                      Любые ссылки, упоминания, названия или намёки на сторонние
                      сайты, приложения, чаты и т.п. с мангой, манхвой, аниме,
                      новеллами и похожим контентом — запрещены. Это касается
                      как текста, так и изображений, никнеймов, подписей и
                      аватаров.
                    </ListItem>
                    <ListItem>
                      <span>2.</span> <span>Запрещён пиар своих ресурсов</span>
                    </ListItem>
                    <ListItem>
                      Публикация или продвижение своих групп, каналов, сайтов,
                      блогов и проектов в любом формате (в том числе по «дружбе»
                      или «для информации») — запрещена без согласования с
                      администрацией.
                    </ListItem>
                    <ListItem>
                      <span>3.</span>{" "}
                      <span>Запрещено попрошайничество и сбор средств</span>
                    </ListItem>
                    <ListItem>
                      Сбор денег (донатов), реквизиты, ссылки на Boosty,
                      Patreon, Discord и прочие платформы — строго запрещены,
                      если они не являются частью официального проекта
                      wamanga.me.
                    </ListItem>
                    <ListItem>
                      <span>4.</span>{" "}
                      <span>Маскировка рекламы — тоже нарушение</span>
                    </ListItem>
                    <ListItem>
                      Использование сокращателей ссылок, намёков или «вопросов»
                      в стиле «а где ещё можно почитать?» — приравнивается к
                      рекламе и карается соответствующим образом.
                    </ListItem>
                    <ListItem>
                      <span>5.</span>{" "}
                      <span>
                        Никакой саморекламы в комментариях и сообщениях
                      </span>
                    </ListItem>
                    <ListItem>
                      Оставлять ссылки, звать куда-то «посмотреть перевод» или
                      «оценить свою работу» вне wamanga.me — нельзя. Для этого
                      существуют внутренние инструменты платформы.
                    </ListItem>
                  </ListWrapper>
                </CatalogDropdown>
                <CatalogDropdown
                  last
                  placeholder="Общение с модераторами, админами и прочее"
                >
                  <ListWrapper>
                    <ListItem>
                      <span>1.</span> Администрация сайта имеет право вносить
                      изменения в правила и принимать соответствующие меры в
                      случае нарушений.
                    </ListItem>
                    <ListItem>
                      <span>2.</span> Общение с модераторами и админами должно
                      быть без оскорбительных выражений и издевательств.
                    </ListItem>
                  </ListWrapper>
                </CatalogDropdown>
              </DropdownsWrapper>
            </Blocks>
          </Description>
        </Content>
      </Background>
    </BasePage>
  );
};

export default GeneralRulesPage;
