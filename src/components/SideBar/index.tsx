import React from "react";
import Logo from "@icons/svg/logo.svg?url";
import { LogoSC, SidebarSC, Tabs } from "./styled";
import { SidebarTab } from "./Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import MoreIcon from "@icons/svg/more.svg";
import RightArrowIcon from "@icons/svg/right-arrow.svg";

const Sidebar = () => {
  return (
    <SidebarSC>
      <LogoSC src={Logo} alt="Logo" />
      <Tabs>
        <SidebarTab icon={<HomeIcon />} title={"Главная"} />
        <SidebarTab icon={<CatalogIcon />} title={"Каталог"} />
        <SidebarTab icon={<RandomIcon />} title={"Рандом"} />
        <SidebarTab
          icon={<MoreIcon />}
          title={"Ещё"}
          sideIcon={<RightArrowIcon />}
        />
      </Tabs>
    </SidebarSC>
  );
};

export default Sidebar;
