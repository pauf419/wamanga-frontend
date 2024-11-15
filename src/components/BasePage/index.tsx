import React from "react";
import {
  BasePageSC,
  Content,
  Header,
  LoginButton,
  SearchButton,
} from "./styled";
import SearchIcon from "@icons/svg/search.svg";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
  isImageBehind?: boolean;
  className?: string;
}

const BasePage = ({ children, isImageBehind, className }: Props) => {
  return (
    <BasePageSC>
      <Header>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        <LoginButton>Войти</LoginButton>
      </Header>
      <Content className={className} $isImageBehind={!!isImageBehind}>
        {children}
      </Content>
      <Footer />
    </BasePageSC>
  );
};

export default BasePage;
