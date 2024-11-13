import React from "react";
import { BasePageSC, Header, LoginButton, SearchButton } from "./styled";
import SearchIcon from "@icons/svg/search.svg";

interface Props {
  children: React.ReactNode;
  isImageBehind?: boolean;
}

const BasePage = ({ children }: Props) => {
  return (
    <BasePageSC>
      <Header>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        <LoginButton>Войти</LoginButton>
      </Header>
      {children}
    </BasePageSC>
  );
};

export default BasePage;
