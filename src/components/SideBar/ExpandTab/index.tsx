"use client";

import React, { useEffect } from "react";
import {
  Left,
  Right,
  RouteSC,
  Routes,
  RoutesWrapper,
  SidebarTabSC,
} from "./styled";
import { Route } from "@/const";
import RightArrowIcon from "@icons/svg/right-arrow.svg";

interface Props {
  title: string;
  icon: React.ReactNode;
  routes: Route[];
}

export const SidebarExpandTab = ({ icon, routes, title }: Props) => {
  return (
    <SidebarTabSC>
      <Left>
        {icon}
        {title}
      </Left>
      <Right>
        <RightArrowIcon />
      </Right>
      <Routes>
        <RoutesWrapper>
          {routes.map((route, index) => (
            <RouteSC key={index} href={route.path}>
              {route.title}
            </RouteSC>
          ))}
        </RoutesWrapper>
      </Routes>
    </SidebarTabSC>
  );
};
