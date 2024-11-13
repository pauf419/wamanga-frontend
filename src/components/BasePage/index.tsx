import React from "react";
import {
  BasePageSC,
  Content,
  Header,
  LoginButton,
  SearchButton,
} from "./styled";
import SearchIcon from "@icons/svg/search.svg";

interface Props {
  children: React.ReactNode;
  isImageBehind?: boolean;
}

const BasePage = ({ children, isImageBehind }: Props) => {
  return (
    <BasePageSC>
      <Header>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        <LoginButton>Войти</LoginButton>
      </Header>
      <Content $isImageBehind={!!isImageBehind}>{children}</Content>
    </BasePageSC>
  );
};

export default BasePage;
