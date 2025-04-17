"use client";

import type { User } from "@/api/types/user";
import {
  ActionWrapper,
  ContentWrapper,
  DataListKey,
  DataListUnit,
  DataListValue,
  DataWrapper,
  Wrapper,
} from "./styled";
import { Avatar } from "@/components/Comments/Comment/styled";
import { Dropdown } from "@/components/Dropdown";
import Modal from "@/components/Modal";
import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";
import { WarningBlock, WarningIcon, WarningText } from "@/app/user/styled";

import InfoIcon from "@icons/svg/info-filled.svg";
import type { Comic } from "@/api/types/comic";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { simpleSearch } from "@/api/title";
import { AppointWrapper, FlexBlock } from "../../../styled";

interface Props {
  user: User;
}

const UserListUnit = ({ user }: Props) => {
  const [appointActive, setAppointActive] = useState<boolean>(false);

  const [titles, setTitles] = useState<Comic[]>([]);

  const searchTitles = async (query: string) => {
    const _ = await simpleSearch(query);
    if (_ && _.length) setTitles(_);
  };

  let defaultIndex = 1;

  switch (user.role) {
    case "user":
      defaultIndex = 0;
      break;
    case "moderator":
      defaultIndex = 1;
      break;
    case "admin":
      defaultIndex = 2;
      break;
    case "dev":
      defaultIndex = 3;
      break;
  }

  return (
    <Wrapper>
      <Modal
        state={appointActive}
        setState={setAppointActive}
        title={`Назначить мангу: ${user.username}`}
      >
        <AppointWrapper>
          <FlexBlock style={{ justifyContent: "space-between" }}>
            <Checkbox cb={(e) => null} placeholder="Назначить Все Комиксы" />
            <button className="button-filled">Сохранить</button>
          </FlexBlock>
          <WarningBlock>
            <WarningIcon style={{ color: "rgb(143,150,163)" }} as={InfoIcon} />
            <WarningText>Это показано выше сканирования.</WarningText>
          </WarningBlock>
          <BadgeTypeSelect
            nested
            elements={titles.map((title) => {
              return {
                index: title._id,
                value: title.name,
              };
            })}
            placeholder="Вв"
            onSearch={searchTitles}
            type="default"
          />
        </AppointWrapper>
      </Modal>
      <ContentWrapper>
        <div>
          <Avatar src={user.avatar} />
        </div>
        <DataWrapper>
          <DataListUnit>
            <DataListKey>Ник</DataListKey>
            <DataListValue>{user.username}</DataListValue>
          </DataListUnit>
          <DataListUnit>
            <DataListKey>Почта</DataListKey>
            <DataListValue>{user.email}</DataListValue>
          </DataListUnit>
          <DataListUnit>
            <DataListKey>Вход</DataListKey>
            <DataListValue>...</DataListValue>
          </DataListUnit>
          <DataListUnit>
            <DataListKey>Роль</DataListKey>
            <DataListValue>
              <Dropdown
                cb={(e) => null}
                defaultIndex={defaultIndex}
                items={[
                  {
                    key: "user",
                    name: "Читатель",
                  },
                  {
                    key: "moderator",
                    name: "Модератор",
                  },
                  {
                    key: "admin",
                    name: "Администратор",
                  },
                  {
                    key: "dev",
                    name: "Разработчик",
                  },
                ]}
              />
            </DataListValue>
          </DataListUnit>
        </DataWrapper>
      </ContentWrapper>
      <ActionWrapper>
        <button
          className="button-transparent button-primary"
          onClick={() => setAppointActive(true)}
        >
          Назначить
        </button>
        <button className="button-transparent button-primary">
          Редактировать
        </button>
        <button className="button-transparent button-red">Удалить</button>
      </ActionWrapper>
    </Wrapper>
  );
};

export default UserListUnit;
