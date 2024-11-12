"use client";

import React, { useState, useRef, useEffect } from "react";
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
import { animated, easings, useTransition } from "@react-spring/web";

interface Props {
  title: string;
  icon: React.ReactNode;
  routes: Route[];
}

export const SidebarExpandTab = ({ icon, routes, title }: Props) => {
  const [show, setShow] = useState(false);

  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300, easing: easings.easeInOutSine },
  });

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <SidebarTabSC onMouseEnter={handleMouseEnter}>
      <Left>
        {icon}
        {title}
      </Left>
      <Right>
        <RightArrowIcon />
      </Right>
      {transition(
        (style, item) =>
          item && (
            <Routes style={style} onMouseLeave={handleMouseLeave}>
              <RoutesWrapper>
                {routes.map((route, index) => (
                  <RouteSC key={index} href={route.path}>
                    {route.title}
                  </RouteSC>
                ))}
              </RoutesWrapper>
            </Routes>
          )
      )}
    </SidebarTabSC>
  );
};
