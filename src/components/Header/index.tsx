"use client";

import React from "react";
import { HeaderSC, LoginButton, SearchButton } from "./styled";
import SearchIcon from "@icons/svg/search.svg";
import SignUpForm from "../(auth)/SignUpForm";
import SignInForm from "../(auth)/SignInForm";

export interface ModalState {
  signUp: boolean;
  signIn: boolean;
}

const Header = () => {
  const [modalState, setModalState] = React.useState<ModalState>({
    signUp: false,
    signIn: false,
  });

  const handleClick = () => {
    setModalState({
      ...modalState,
      signIn: !modalState.signIn,
    });
  };

  return (
    <HeaderSC>
      <SignUpForm state={modalState} setState={setModalState} />
      <SignInForm state={modalState} setState={setModalState} />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <LoginButton onClick={handleClick}>Войти</LoginButton>
    </HeaderSC>
  );
};

export default Header;
