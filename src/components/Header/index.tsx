"use client";

import React from "react";
import { HeaderSC, LoginButton, SearchButton } from "./styled";
import SearchIcon from "@icons/svg/search.svg";
import SignUpForm from "../(auth)/SignUpForm";
import { useClickOutside } from "@/hooks/use-click-outside";

export interface ModalState {
  signUp: boolean;
}

const Header = () => {
  const [modalState, setModalState] = React.useState<ModalState>({
    signUp: false,
  });

  const handleClick = () => {
    setModalState({
      ...modalState,
      signUp: !modalState.signUp,
    });
  };

  return (
    <HeaderSC>
      <SignUpForm state={modalState} setState={setModalState} />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <LoginButton onClick={handleClick}>Войти</LoginButton>
    </HeaderSC>
  );
};

export default Header;
