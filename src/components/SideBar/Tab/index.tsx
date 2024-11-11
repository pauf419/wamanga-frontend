"use client";

import React from "react";
import { Left, Right, SidebarTabSC } from "./styled";
import { usePathname } from "next/navigation";
import { Route } from "@/const";

interface Props {
  icon: React.ReactNode;
  sideIcon?: React.ReactNode;
  route: Route;
}

export const SidebarTab = ({ icon, sideIcon, route }: Props) => {
  const path = usePathname();

  return (
    <SidebarTabSC $isActive={path === route.path} href={route.path}>
      <Left $isActive={path === route.path}>
        {icon}
        {route.title}
      </Left>
      <Right $isActive={path === route.path}>{sideIcon}</Right>
    </SidebarTabSC>
  );
};
