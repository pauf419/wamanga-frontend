import React from "react";
import Logo from "@icons/svg/logo.svg?url";
import { LogoSC, SidebarSC, Tabs } from "./styled";
import { SidebarTab } from "./Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import MoreIcon from "@icons/svg/more.svg";
import { routes } from "@/const";
import { SidebarExpandTab } from "./ExpandTab";

const Sidebar = () => {
  const moreRoutes = [
    { title: "Премиум подписочка", path: "/catalog" },
    { title: "Крутейшая страница для си132554252", path: "/catalog" },
    { title: "Правила сайта", path: "/catalog" },
    { title: "Политика сайта", path: "/catalog" },
  ];

  return (
    <SidebarSC>
      <LogoSC src={Logo} alt="Logo" />
      <Tabs>
        <SidebarTab icon={<HomeIcon />} route={routes.home} />
        <SidebarTab icon={<CatalogIcon />} route={routes.catalog} />
        <SidebarTab icon={<RandomIcon />} route={routes.random} />
        <SidebarExpandTab
          icon={<MoreIcon />}
          title={"Ещё"}
          routes={moreRoutes}
        />
      </Tabs>
    </SidebarSC>
  );
};

export default Sidebar;
