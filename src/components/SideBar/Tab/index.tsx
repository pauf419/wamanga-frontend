import React from "react";
import { Left, Right, SidebarTabSC } from "./styled";

interface Props {
  icon: React.ReactNode;
  sideIcon?: React.ReactNode;
  title: string;
}

export const SidebarTab = ({ icon, title, sideIcon }: Props) => {
  return (
    <SidebarTabSC>
      <Left>
        {icon}
        {title}
      </Left>
      <Right>{sideIcon}</Right>
    </SidebarTabSC>
  );
};
