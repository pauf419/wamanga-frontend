import { FC } from "react"
import { Blurer, ButtonOutline, LoginButton, LogoSC, LogoSegment, Navigation, SidebarMobileSC } from "./styled"
import Logo from "@icons/svg/logo.svg?url";
import { SidebarTab } from "../Sidebar/Tab";
import HomeIcon from "@icons/svg/home.svg";
import CatalogIcon from "@icons/svg/catalog.svg";
import RandomIcon from "@icons/svg/random.svg";
import MoreIcon from "@icons/svg/more.svg";
import { routes } from "@/const";
import { SidebarExpandTab } from "../Sidebar/ExpandTab";

interface SideBarMobileProps {
    active: boolean
    toggle: (status:boolean) => void
}


const SideBarMobile: FC<SideBarMobileProps> = ({active, toggle}) => {

    const moreRoutes = [
        { title: "Премиум подписочка", path: "/catalog" },
        { title: "Крутейшая страница для си132554252", path: "/home" },
        { title: "Правила сайта", path: "/rules" },
        { title: "Политика сайта", path: "/catalog" },
      ];

    return (
        <>
            <Blurer $active={active} onClick={() => toggle(false)}/>
            <SidebarMobileSC $active={active}>
                <LogoSegment>
                    <LogoSC src={Logo} alt="logo"/>
                    <ButtonOutline>
                        <LoginButton>Войти</LoginButton>
                    </ButtonOutline>
                </LogoSegment>
                <Navigation>Навигация</Navigation>
                <SidebarTab mobile icon={<HomeIcon />} route={routes.home} />
                <SidebarTab mobile icon={<CatalogIcon />} route={routes.catalog} />
                <SidebarTab mobile icon={<RandomIcon />} route={routes.random} />
                <SidebarExpandTab
                mobile
                icon={<MoreIcon />}
                title={"Ещё"}
                routes={moreRoutes}
                />
            </SidebarMobileSC>
        </>
    )
}

export default SideBarMobile