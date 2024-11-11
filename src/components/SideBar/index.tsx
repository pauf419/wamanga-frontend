import React from "react";
import Logo from "@icons/svg/logo.svg?url";
import { LogoSC, SidebarSC, Tabs } from "./styled";
import { SidebarTab } from "./Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import { routes } from "@/const";

const Sidebar = () => {
  return (
    <SidebarSC>
      <LogoSC src={Logo} alt="Logo" />
      <Tabs>
        <SidebarTab icon={<HomeIcon />} route={routes.home} />
        <SidebarTab icon={<CatalogIcon />} route={routes.catalog} />
        <SidebarTab icon={<RandomIcon />} route={routes.random} />
        {/* <SidebarTab
          icon={<MoreIcon />}
          title={"Ещё"}
          sideIcon={<RightArrowIcon />}
        /> */}
      </Tabs>
    </SidebarSC>
  );
};

export default Sidebar;
