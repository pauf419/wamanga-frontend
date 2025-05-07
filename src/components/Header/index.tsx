"use client";

import React, { useEffect, useState } from "react";
import {
  Block,
  ClickMenuBlurer,
  ClickMenuHeader,
  ClickMenuWrapper,
  CloseButton,
  HeaderAvatar,
  HeaderLink,
  HeaderSC,
  HeaderSpacer,
  LoginButton,
  SearchBodyWrapper,
  SearchButton,
  SearchHeaderWrapper,
  SearchInput,
  SearchNoResultsWrapper,
  SearchWrapper,
  ToggleButton,
  UserAvatar,
} from "./styled";
import SearchIcon from "@icons/svg/search.svg";
import SignUpForm from "../(auth)/SignUpForm";
import SideBarToggleIcon from "@icons/svg/sidebar-mobile-toggle.svg";
import SignInForm from "../(auth)/SignInForm";
import SideBarMobile from "../SideBarMobile";
import { NotDisplaysWhenAuth } from "../AuthTriggers";
import type { User } from "@/api/types/user";
import { Blurer } from "../SideBarMobile/styled";
import type { Comic } from "@/api/types/comic";
import { simpleSearch } from "@/api/title";
import { SortingButton, SortingIcon } from "@/app/team/[slug]/styled";
import CloseIcon from "@icons/svg/close.svg";
import { ComicPreviewVertical } from "@/app/(tabs)/home/ComicPreviewVertical";
import { NoImage } from "../Comments/styled";
import { logout } from "@/app/lib";
import VerifyForm from "../(auth)/VerifyForm";
import { useUserStore } from "@/app/store";

export interface ModalState {
  signUp: boolean;
  signIn: boolean;
  verify: boolean;
}

interface Props {
  user: User | null;
}

const Header = ({ user }: Props) => {
  const isVerify = localStorage.getItem("verify");
  const boolVerify = isVerify ? isVerify === "true" && true : false;
  const [modalState, setModalState] = React.useState<ModalState>({
    signUp: false,
    signIn: false,
    verify: boolVerify,
  });

  const [titles, setTitles] = useState<Comic[]>([]);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [sendTimeout, setSendTimeout] = useState<any>();
  const [query, setQuery] = useState<string>("");

  const [sidebarActive, setSidebarActive] = React.useState<boolean>(false);

  const [clickMenuActive, setClickMenuActive] = React.useState<boolean>(false);

  const handleClick = () => {
    if (boolVerify) {
      return setModalState({
        ...modalState,
        verify: !modalState.verify,
      });
    }
    setModalState({
      ...modalState,
      signIn: !modalState.signIn,
    });
  };

  const toggleSidebar = () => {
    setSidebarActive((prev) => !prev);
  };

  const searchTitles = async (query: string) => {
    try {
      const titles = await simpleSearch(query);
      setTitles(titles);
    } catch (e) {
      console.error(e);
      setTitles([]);
    }
  };

  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  useEffect(() => {
    clearTimeout(sendTimeout);
    if (query) {
      const tid = setTimeout(() => {
        searchTitles(query);
      }, 800);
      setSendTimeout(tid);
    }
  }, [query]);

  return (
    <>
      <SearchWrapper $active={searchActive}>
        <SearchHeaderWrapper>
          <SearchIcon />
          <SearchInput
            placeholder="Поиск..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="button-blured blured-primary"
              style={{ marginRight: 8 }}
              onClick={() => setQuery("")}
            >
              Очистить
            </button>
          )}

          <CloseButton onClick={() => setSearchActive(false)}>
            <SortingIcon $active={false} as={CloseIcon} />
          </CloseButton>
        </SearchHeaderWrapper>
        {titles.length ? (
          <SearchBodyWrapper>
            {titles.map((title) => (
              <ComicPreviewVertical comic={title} key={title._id} />
            ))}
          </SearchBodyWrapper>
        ) : (
          <SearchNoResultsWrapper>
            <NoImage src="/no-comments.png" />
            <div style={{ fontSize: "1.125rem" }}>Ничего не найдено</div>
          </SearchNoResultsWrapper>
        )}
      </SearchWrapper>
      <SideBarMobile active={sidebarActive} setActive={setSidebarActive} />
      <ClickMenuBlurer
        $active={clickMenuActive}
        $notadaptive
        onClick={() => setClickMenuActive(false)}
      />
      <HeaderSC>
        <Block>
          <ToggleButton onClick={toggleSidebar}>
            <SideBarToggleIcon />
          </ToggleButton>
        </Block>
        <Block>
          <SignUpForm state={modalState} setState={setModalState} />
          <SignInForm state={modalState} setState={setModalState} />
          <VerifyForm state={modalState} setState={setModalState} />

          <SearchButton onClick={() => setSearchActive(!searchActive)}>
            <SearchIcon />
          </SearchButton>
          <NotDisplaysWhenAuth>
            {user ? (
              <UserAvatar
                $source={user.avatar}
                onClick={() => !clickMenuActive && setClickMenuActive(true)}
              >
                <ClickMenuWrapper $active={clickMenuActive}>
                  <ClickMenuHeader>
                    <HeaderAvatar
                      href="/user"
                      $source={user.avatar}
                    ></HeaderAvatar>
                    <a href="/user?activeTab=EDIT">Редактировать</a>
                  </ClickMenuHeader>
                  <HeaderLink href="/user">Профиль</HeaderLink>
                  <HeaderLink href="/user?activeTab=BOOKMARK">
                    Закладки
                  </HeaderLink>
                  <HeaderLink href="/admin/title/new">
                    Добавить тайтл
                  </HeaderLink>
                  {user.role !== "user" ? (
                    <>
                      <HeaderSpacer />
                      <HeaderLink href="/admin">Админка</HeaderLink>
                      <HeaderSpacer />
                    </>
                  ) : (
                    <HeaderSpacer />
                  )}
                  <HeaderLink href="/logout" type="submit">
                    Выйти
                  </HeaderLink>
                </ClickMenuWrapper>
              </UserAvatar>
            ) : (
              <LoginButton onClick={handleClick}>
                {boolVerify || modalState.verify ? "Верификация" : "Войти"}
              </LoginButton>
            )}
          </NotDisplaysWhenAuth>
        </Block>
      </HeaderSC>
    </>
  );
};

export default Header;
