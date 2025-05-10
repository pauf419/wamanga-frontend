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

const UserAgreementPage = () => {
  return (
    <BasePage isImageBehind>
      <Background>
        <Content>
          <Title>Пользовательское соглашение</Title>
          <Description>
            <RulesImage
              quality={100}
              src="/rules-3.png"
              alt="rules"
              width={512}
              height={512}
            />
            <ImageSpacer />
            <Blocks>
              <RawContainer>
                Настоящее Пользовательское соглашение (далее — «Соглашение»)
                регулирует отношения между администрацией сайта wamanga.me
                (далее — «Администрация») и любым физическим лицом, использующим
                сайт (далее — «Пользователь»). Пользуясь сайтом wamanga.me, вы
                подтверждаете, что ознакомились с данным Соглашением и
                принимаете его условия в полном объеме. Если вы не согласны с
                каким-либо из пунктов, пожалуйста, прекратите использование
                сайта.
              </RawContainer>

              <ListItem>
                <span>1.</span> <span>Общие положения</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Сайт wamanga.me предоставляет платформу для размещения и
                  просмотра пользовательского контента, включая, но не
                  ограничиваясь, главами манги, манхв и маньхуа и иными
                  произведениями
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Все материалы размещаются пользователями на собственный риск и
                  под собственную ответственность
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Администрация не проверяет, не редактирует и не публикует
                  контент от своего имени
                </span>
              </ListItem>

              <ListItem>
                <span>2.</span> <span>Регистрация и аккаунт</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Для доступа к некоторым функциям сайта может потребоваться
                  регистрация
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Пользователь обязуется предоставить достоверную информацию при
                  регистрации и не передавать доступ к своему аккаунту третьим
                  лицам
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Администрация оставляет за собой право при необходимости
                  ограничить доступ к аккаунту или удалить его при нарушении
                  условий настоящего Соглашения
                </span>
              </ListItem>

              <ListItem>
                <span>3.</span> <span>Права и обязанности пользователя</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Пользователь несет полную ответственность за контент,
                  размещаемый им на сайте
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Пользователь обязуется не загружать материалы, нарушающие
                  авторские или иные права третьих лиц, законы своей страны или
                  международные нормы
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Пользователь обязуется не использовать сайт для размещения
                  спама, вредоносного ПО, призывов к насилию или иной
                  противоправной информации
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Пользователь может загружать только те материалы, на
                  размещение которых он имеет законные права (например, если он
                  является автором, переводчиком или имеет разрешение
                  правообладателя)
                </span>
              </ListItem>

              <ListItem>
                <span>4.</span> <span>Права и обязанности администрации</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Администрация не несет ответственности за действия
                  пользователей, в том числе за нарушение ими авторских прав или
                  законодательства
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  При получении обоснованной жалобы от правообладателя
                  Администрация вправе удалить соответствующий контент
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Администрация может изменять функциональность сайта,
                  приостанавливать или прекращать его работу без
                  предварительного уведомления
                </span>
              </ListItem>

              <ListItem>
                <span>5.</span> <span>Интеллектуальная собственность</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Все права на оригинальные произведения принадлежат их законным
                  правообладателям
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Размещение контента на сайте не означает передачу каких-либо
                  прав Администрации или другим пользователям
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  При обнаружении нарушения авторских прав, пожалуйста,
                  свяжитесь с Администрацией через форму обратной связи или по
                  адресу электронной почты
                </span>
              </ListItem>

              <ListItem>
                <span>6.</span> <span>Ограничение ответственности</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Сайт предоставляется на условиях «как есть». Администрация не
                  гарантирует его бесперебойную или безошибочную работу
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Администрация не несет ответственности за любой ущерб, прямой
                  или косвенный, причиненный в результате использования сайта
                  или размещения на нём контента
                </span>
              </ListItem>

              <ListItem>
                <span>7.</span> <span>Изменения соглашения</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Администрация оставляет за собой право в любое время изменять
                  условия настоящего Соглашения
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Продолжение использования сайта после внесения изменений
                  считается согласием с новыми условиями
                </span>
              </ListItem>

              <ListItem>
                <span>8.</span> <span>Заключительные положения</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Все споры, возникающие в связи с настоящим Соглашением,
                  подлежат разрешению в соответствии с применимым
                  законодательством
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Если какое-либо положение Соглашения будет признано
                  недействительным, это не влияет на действительность остальных
                  положений
                </span>
              </ListItem>
            </Blocks>
          </Description>
        </Content>
      </Background>
    </BasePage>
  );
};

export default UserAgreementPage;
