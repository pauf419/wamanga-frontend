import React from "react";
import { BasePageSC, Content } from "./styled";
import Footer from "../Footer";
import Header from "../Header";
import { getSession } from "@/app/lib";

interface Props {
  children: React.ReactNode;
  isImageBehind?: boolean;
  className?: string;
}

const BasePage = async ({ children, isImageBehind, className }: Props) => {
  const session = await getSession();

  return (
    <BasePageSC>
      <Header user={session} />
      <Content className={className} $isImageBehind={!!isImageBehind}>
        {children}
      </Content>
      <Footer />
    </BasePageSC>
  );
};

export default BasePage;
