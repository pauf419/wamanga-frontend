import type { FC } from "react";
import {
  Blurer,
  ButtonOutline,
  LoginButton,
  LogoSC,
  LogoSegment,
  Navigation,
  SidebarMobileSC,
} from "./styled";
import Logo from "@icons/svg/logo.svg?url";
import { SidebarTab } from "../Sidebar/Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import MoreIcon from "@icons/svg/more.svg";
import { routes } from "@/const";
import { SidebarExpandTab } from "../Sidebar/ExpandTab";
import { useState } from "react";
import type { Comic } from "@/api/types/comic";
import { useEffect } from "react";
import { getRandomComic } from "@/api/title";

interface SideBarMobileProps {
  active: boolean;
  setActive: (status: boolean) => void;
}

const SideBarMobile: FC<SideBarMobileProps> = ({ active, setActive }) => {
  const moreRoutes = [
    { title: "Премиум подписочка", path: "/catalog" },
    { title: "Крутейшая страница для си132554252", path: "/home" },
    { title: "Правила сайта", path: "/rules" },
    { title: "Политика сайта", path: "/catalog" },
  ];

  const [randomTitle, setRandomTitle] = useState<Comic>();

  const getRandomTitle = async () => {
    try {
      const title = await getRandomComic();
      setRandomTitle(title);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!randomTitle) getRandomTitle();
  }, [randomTitle]);

  return (
    <>
      <Blurer $notadaptive $active={active} onClick={() => setActive(false)} />
      <SidebarMobileSC $active={active}>
        <LogoSegment>
          <LogoSC src={Logo} alt="logo" />
        </LogoSegment>
        <Navigation>Навигация</Navigation>
        <SidebarTab mobile icon={<HomeIcon />} route={routes.home} />
        <SidebarTab mobile icon={<CatalogIcon />} route={routes.catalog} />
        <SidebarTab
          mobile
          icon={<RandomIcon />}
          forceRoute={`/comics/${randomTitle?.alternativeName}`}
          route={routes.random}
        />
        <SidebarExpandTab
          mobile
          icon={<MoreIcon />}
          title={"Ещё"}
          routes={moreRoutes}
        />
      </SidebarMobileSC>
    </>
  );
};

export default SideBarMobile;
