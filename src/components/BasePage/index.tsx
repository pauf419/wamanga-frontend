import React from "react";
import { BasePageSC, Header, LoginButton, SearchButton } from "./styled";
import SearchIcon from "@icons/svg/search.svg";

const BasePage = ({ children }: { children: React.ReactNode }) => {
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
