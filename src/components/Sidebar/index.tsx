import React from "react";
import Logo from "@icons/svg/logo.svg?url";
import { SidebarTab } from "./Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import MoreIcon from "@icons/svg/more.svg";
import { routes } from "@/const";
import { SidebarExpandTab } from "./ExpandTab";
import { LogoSC, LogoWrapper, SidebarSC, Tabs } from "./styled";
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
import { getSession } from "@/app/lib";
import { RoleSegregator, UserRole } from "../RoleSegregator";

const isAdminPage = async () => {
  const referer = (await headers()).get("x-current-path") || "";
  return referer.includes("/admin");
};

const Sidebar = async () => {
  const session = await getSession();

  if (await isAdminPage())
    return (
      <SidebarSC>
        <Link href="/">
          <LogoWrapper>
            <LogoSC src={Logo} alt="Logo" />
          </LogoWrapper>
        </Link>
        <Tabs>
          <SidebarTab icon={<AdminMainPageIcon />} route={routes.adminMain} />
          <SidebarTab icon={<AdminComicsIcon />} route={routes.adminComics} />
          <RoleSegregator allowedRoles={["owner"]}>
            <SidebarTab
              icon={<AdminPlusIcon />}
              route={routes.adminAddComics}
            />
          </RoleSegregator>
          <SidebarTab icon={<AdminCatalogIcon />} route={routes.adminCatalog} />
          <RoleSegregator allowedRoles={["owner"]}>
            <>
              <SidebarTab icon={<AdminUsersIcon />} route={routes.adminUsers} />
              <SidebarTab icon={<AdminTeamsIcon />} route={routes.adminTeams} />
              <SidebarTab
                icon={<AdminSettingsIcon />}
                route={routes.adminSettings}
              />
            </>
          </RoleSegregator>
        </Tabs>
      </SidebarSC>
    );

  const randomTitle = await getRandomComic();

  const moreRoutes = [{ title: "Правила сайта", path: "/rules" }];

  return (
    <SidebarSC>
      <Link href="/">
        <LogoWrapper>
          <LogoSC src={Logo} alt="Logo" />
        </LogoWrapper>
      </Link>
      <Tabs>
        <SidebarTab icon={<HomeIcon />} route={routes.home} />
        <SidebarTab icon={<CatalogIcon />} route={routes.catalog} />
        <SidebarTab
          icon={<RandomIcon />}
          forceRoute={`/${randomTitle?.seoGenre}/${randomTitle?.alternativeName}`}
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
