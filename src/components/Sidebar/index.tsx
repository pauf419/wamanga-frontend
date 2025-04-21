import React from "react";
import Logo from "@icons/svg/logo.svg?url";
import { SidebarTab } from "./Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import MoreIcon from "@icons/svg/more.svg";
import { routes } from "@/const";
import { SidebarExpandTab } from "./ExpandTab";
import { LogoSC, SidebarSC, Tabs } from "./styled";
import { headers } from "next/headers";
import AdminComicsIcon from "@icons/svg/admin-comics.svg";
import AdminMainPageIcon from "@icons/svg/admin-main.svg";
import AdminPlusIcon from "@icons/svg/admin-plus.svg";
import AdminCatalogIcon from "@icons/svg/admin-catalog.svg";
import AdminUsersIcon from "@icons/svg/admin-user.svg";
import AdminTeamsIcon from "@icons/svg/admin-team.svg";
import AdminSettingsIcon from "@icons/svg/admin-gear.svg";
import { getRandomComic } from "@/api/title";
import Link from "next/link";

const isAdminPage = async () => {
  const referer = (await headers()).get("x-current-path") || "";
  return referer.includes("/admin");
};

const isReaderPage = async () => {
  const referer = (await headers()).get("x-current-path") || "";
  return referer.includes("/reader");
};

const Sidebar = async () => {
  if (await isAdminPage())
    return (
      <SidebarSC>
        <Link href="/">
          <LogoSC src={Logo} alt="Logo" />
        </Link>
        <Tabs>
          <SidebarTab icon={<AdminComicsIcon />} route={routes.adminComics} />
          <SidebarTab icon={<AdminMainPageIcon />} route={routes.adminMain} />
          <SidebarTab icon={<AdminPlusIcon />} route={routes.adminAddComics} />
          <SidebarTab icon={<AdminCatalogIcon />} route={routes.adminCatalog} />
          <SidebarTab icon={<AdminUsersIcon />} route={routes.adminUsers} />
          <SidebarTab icon={<AdminTeamsIcon />} route={routes.adminTeams} />
          <SidebarTab
            icon={<AdminSettingsIcon />}
            route={routes.adminSettings}
          />
        </Tabs>
      </SidebarSC>
    );
  if (await isReaderPage()) return <div></div>;

  const randomTitle = await getRandomComic();

  const moreRoutes = [
    { title: "Премиум подписочка", path: "/catalog" },
    { title: "Крутейшая страница для си132554252", path: "/home" },
    { title: "Правила сайта", path: "/rules" },
    { title: "Политика сайта", path: "/catalog" },
  ];

  return (
    <SidebarSC>
      <Link href="/">
        <LogoSC src={Logo} alt="Logo" />
      </Link>
      <Tabs>
        <SidebarTab icon={<HomeIcon />} route={routes.home} />
        <SidebarTab icon={<CatalogIcon />} route={routes.catalog} />
        <SidebarTab
          icon={<RandomIcon />}
          forceRoute={`/comics/${randomTitle?.alternativeName}`}
          route={routes.random}
        />
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
