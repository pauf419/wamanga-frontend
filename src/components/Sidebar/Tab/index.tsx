"use client";

import React from "react";
import { usePathname } from "next/navigation";
import type { Route } from "@/const";
import { Left, Right, SidebarTabSC } from "./styled";

interface Props {
  icon: React.ReactNode;
  sideIcon?: React.ReactNode;
  route: Route;
  mobile?: boolean;
}

export const SidebarTab = ({
  icon,
  sideIcon,
  route,
  mobile = false,
}: Props) => {
  const path = usePathname();

  return (
    <SidebarTabSC
      $isActive={path === route.path}
      href={route.path}
      $mobile={mobile}
    >
      <Left $isActive={path === route.path} $mobile={mobile}>
        {icon}
        {route.title}
      </Left>
      <Right $isActive={path === route.path}>{sideIcon}</Right>
    </SidebarTabSC>
  );
};
