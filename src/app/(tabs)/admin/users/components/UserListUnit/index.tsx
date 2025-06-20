"use client";

import type { User } from "@/api/types/user";
import {
  ActionWrapper,
  ContentWrapper,
  DataListKey,
  DataListUnit,
  DataListValue,
  DataListValueStatic,
  DataWrapper,
  Wrapper,
} from "./styled";
import { Avatar } from "@/components/Comments/Comment/styled";
import { Dropdown } from "@/components/Dropdown";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/Checkbox";
import { WarningBlock, WarningIcon, WarningText } from "@/app/user/styled";

import InfoIcon from "@icons/svg/info-filled.svg";
import type { Comic } from "@/api/types/comic";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { getManyByIds, simpleSearch } from "@/api/title";
import { AppointWrapper, FlexBlock } from "../../../styled";
import { title } from "process";
import { assignManga, editUserAdmin } from "@/api/user";
import CloseIcon from "@icons/svg/close.svg";
import React from "react";
import { IconButton, Snackbar } from "@mui/material";
import Link from "next/link";

interface Props {
  user: User;
  updateUser: (u: User) => void;
}

const UserListUnit = ({ user, updateUser }: Props) => {
  const [message, setMessage] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [appointActive, setAppointActive] = useState<boolean>(false);
  const [appointAll, setAppointAll] = useState<boolean>(user.assignedAllManga);

  const [appointedTitles, setAppointedTitles] = useState<string[]>(
    user.assignedManga.map((manga) => manga._id)
  );
  const [titles, setTitles] = useState<Comic[]>([]);
  const [userEditable, setUserEditable] = useState<User>(user);

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
    case "developer":
      defaultIndex = 3;
      break;
  }

  const fetchAllAssignedTitles = async (
    titleIds: string[],
    assignedAllManga: boolean
  ) => {
    try {
      const res = await getManyByIds(titleIds);
      await updateUser({
        ...user,
        assignedAllManga,
        assignedManga: res,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const submit = async () => {
    try {
      await assignManga(user._id, appointedTitles, appointAll);
      setAppointActive(false);
      setMessage("Данные пользователя успешно обновлены");
      setOpen(true);
      fetchAllAssignedTitles(appointedTitles, appointAll);
    } catch (e) {
      console.error(e);
      if (e && typeof e === "object" && "response" in e) {
        const err = e as { response: { data: { message: string } } };
        setMessage(err.response.data.message);
        setOpen(true);
      }
    }
  };

  const edit = async () => {
    try {
      await editUserAdmin(userEditable);
      setMessage("Данные пользователя успешно обновлены");
      setOpen(true);
    } catch (e) {
      console.error(e);
      if (e && typeof e === "object" && "response" in e) {
        const err = e as { response: { data: { message: string } } };
        setMessage(err.response.data.message);
        setOpen(true);
      }
    }
  };

  if (user.role === "owner") return <></>;

  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Wrapper>
      <Modal
        state={appointActive}
        setState={setAppointActive}
        title={`Назначить мангу: ${user.username}`}
      >
        <AppointWrapper>
          <FlexBlock style={{ justifyContent: "space-between" }}>
            <Checkbox
              cb={(e) => setAppointAll(e)}
              defaultCheckedValue={user.assignedAllManga}
              placeholder="Назначить Все Комиксы"
            />
            <button className="button-filled" onClick={() => submit()}>
              Сохранить
            </button>
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
            preset={user.assignedManga.map((manga) => {
              return {
                index: manga._id,
                value: manga.name,
              };
            })}
            onChange={(e) => setAppointedTitles(e.map((el) => el.index))}
            placeholder="Назначенные пользователю тайтлы"
            onSearch={searchTitles}
            type="default"
          />
        </AppointWrapper>
      </Modal>
      <ContentWrapper>
        <div>
          <Link href={`/user/${user._id}`}>
            <Avatar src={user.avatar} />
          </Link>
        </div>
        <DataWrapper>
          <DataListUnit>
            <DataListKey>Ник</DataListKey>
            <DataListValue
              defaultValue={user.username}
              onChange={(e) =>
                setUserEditable({
                  ...userEditable,
                  username: e.target.value,
                })
              }
            />
          </DataListUnit>
          <DataListUnit>
            <DataListKey>Почта</DataListKey>
            <DataListValueStatic>{user.email}</DataListValueStatic>
          </DataListUnit>
          <DataListUnit>
            <DataListKey>Вход</DataListKey>
            <DataListValueStatic>...</DataListValueStatic>
          </DataListUnit>
          <DataListUnit>
            <DataListKey>Роль</DataListKey>
            <DataListValueStatic>
              <Dropdown
                cb={(e) =>
                  setUserEditable({
                    ...userEditable,
                    role: e.key,
                  })
                }
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
                    key: "developer",
                    name: "Разработчик",
                  },
                ]}
              />
            </DataListValueStatic>
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
        <button
          className="button-transparent button-primary"
          onClick={() => edit()}
        >
          Редактировать
        </button>
        <button className="button-transparent button-red">Удалить</button>
      </ActionWrapper>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={message}
        action={action}
      />
    </Wrapper>
  );
};

export default UserListUnit;
