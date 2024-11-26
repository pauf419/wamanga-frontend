import React from "react";
import { BasePageSC, Content } from "./styled";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
  isImageBehind?: boolean;
  className?: string;
}

const BasePage = ({ children, isImageBehind, className }: Props) => {
  return (
    <BasePageSC>
      <Header />
      <Content className={className} $isImageBehind={!!isImageBehind}>
        {children}
      </Content>
      <Footer />
    </BasePageSC>
  );
};

export default BasePage;
