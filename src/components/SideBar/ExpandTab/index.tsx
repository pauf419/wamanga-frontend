"use client";

import React, { useState } from "react";
import { Left, Right, RouteSC, RoutesWrapper, SidebarTabSC } from "./styled";
import { Route } from "@/const";
import RightArrowIcon from "@icons/svg/right-arrow.svg";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface Props {
  title: string;
  icon: React.ReactNode;
  routes: Route[];
}

export const SidebarExpandTab = ({ icon, routes, title }: Props) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <SidebarTabSC
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Left>
        {icon}
        {title}
      </Left>
      <Right>
        <RightArrowIcon />
      </Right>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translateX(100%) scale(0.9)",
              paddingLeft: "8px",
              opacity: 0,
              backdropFilter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(0px)",
              transform: "translateX(100%) scale(1)",
            }}
            exit={{ opacity: 0, transform: "translateX(100%) scale(0.9)" }}
          >
            <RoutesWrapper>
              {routes.map((route, index) => (
                <RouteSC key={index} href={route.path}>
                  {route.title}
                </RouteSC>
              ))}
            </RoutesWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarTabSC>
  );
};
