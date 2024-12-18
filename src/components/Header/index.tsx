"use client";

import React from "react";
import {
  Block,
  HeaderSC,
  LoginButton,
  SearchButton,
  ToggleButton,
} from "./styled";
import SearchIcon from "@icons/svg/search.svg";
import SignUpForm from "../(auth)/SignUpForm";
import SideBarToggleIcon from "@icons/svg/sidebar-mobile-toggle.svg";
import SignInForm from "../(auth)/SignInForm";
import SideBarMobile from "../SideBarMobile";

export interface ModalState {
  signUp: boolean;
  signIn: boolean;
}

const Header = () => {
  const [modalState, setModalState] = React.useState<ModalState>({
    signUp: false,
    signIn: false,
  });

  const [sidebarActive, setSidebarActive] = React.useState<boolean>(false);

  const handleClick = () => {
    setModalState({
      ...modalState,
      signIn: !modalState.signIn,
    });
  };

  const toggleSidebar = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <>
      <SideBarMobile active={sidebarActive} setActive={setSidebarActive} />
      <HeaderSC>
        <Block>
          <ToggleButton onClick={toggleSidebar}>
            <SideBarToggleIcon />
          </ToggleButton>
        </Block>
        <Block>
          <SignUpForm state={modalState} setState={setModalState} />
          <SignInForm state={modalState} setState={setModalState} />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <LoginButton onClick={handleClick}>Войти</LoginButton>
        </Block>
      </HeaderSC>
    </>
  );
};

export default Header;
