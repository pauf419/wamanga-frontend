import React from "react";
import { SidebarTabSC } from "./styled";

interface Props {
  icon: React.ReactNode;
  title: string;
}

export const SidebarTab = ({ icon, title }: Props) => {
  return (
    <SidebarTabSC>
      {icon}
      {title}
    </SidebarTabSC>
  );
};
