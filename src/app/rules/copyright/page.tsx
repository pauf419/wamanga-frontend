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

const CopyrightPage = () => {
  return (
    <BasePage isImageBehind>
      <Background>
        <Content>
          <Title>Авторские права</Title>
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
              <RawContainer>
                Сайт wamanga.me является платформой, на которой пользователи
                могут самостоятельно публиковать и делиться главами манги,
                манхвы и маньхуа и другим подобным контентом. Администрация
                сайта не загружает, не редактирует и не публикует материалы от
                своего имени, а лишь предоставляет техническую возможность для
                размещения пользовательского контента.
                <ListItem>
                  <span>1.</span> <span>Правообладатели</span>
                </ListItem>
                Если вы являетесь правообладателем какого-либо контента,
                размещенного на сайте wamanga.me, и считаете, что он нарушает
                ваши авторские права, вы можете связаться с администрацией сайта
                по почте. При обращении просьба предоставить следующую
                информацию:
              </RawContainer>
              <ListItem>
                <span>.</span> <span>Название произведения</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>Прямые ссылки на страницы, нарушающие ваши права;</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Документы или иные доказательства, подтверждающие ваше право
                  на контент
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  После получения обоснованного запроса, администрация примет
                  необходимые меры, включая удаление соответствующих материалов
                </span>
              </ListItem>
              <ListItem>
                <span>2.</span>{" "}
                <span>
                  Ответственность пользователей Каждый пользователь, загружающий
                  контент на сайт, подтверждает, что:
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>Он не нарушает авторских прав третьих лиц</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  У него есть разрешение на распространение или перевод
                  материалов (если применимо)
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Он несет полную ответственность за публикуемый им контент
                </span>
              </ListItem>
              <ListItem>
                <span>3.</span>{" "}
                <span>
                  Отказ от ответственности Администрация сайта wamanga.me:
                </span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>Не несет ответственности за действия пользователей</span>
              </ListItem>
              <ListItem>
                <span>.</span>{" "}
                <span>
                  Оперативно реагирует на жалобы правообладателей при наличии
                  достаточных оснований
                </span>
              </ListItem>
              <ListItem>
                <span>4.</span> <span>Удаление контента</span>
              </ListItem>
              Контент может быть удален по запросу правообладателя или в случае
              нарушения условий использования сайта. Мы уважаем интеллектуальную
              собственность и стремимся к соблюдению всех применимых норм
              законодательства.
            </Blocks>
          </Description>
        </Content>
      </Background>
    </BasePage>
  );
};

export default CopyrightPage;
