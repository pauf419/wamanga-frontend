import React from "react";
import Logo from "@icons/svg/logo.svg?url";
import { LogoSC, SidebarSC } from "./styled";
import { SidebarTab } from "./Tab";
import HomeIcon from "@icons/svg/home.svg";

const Sidebar = () => {
  return (
    <SidebarSC>
      <LogoSC src={Logo} alt="Logo" />
      <SidebarTab icon={<HomeIcon />} title={"Главная"} />
    </SidebarSC>
  );
};

export default Sidebar;
