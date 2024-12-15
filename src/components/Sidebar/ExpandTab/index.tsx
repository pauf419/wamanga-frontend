"use client";

import React, { useState } from "react";
import {
  AfterDotText,
  Dot,
  DotHolder,
  Dropdown,
  Left,
  Right,
  RouteSC,
  RoutesWrapper,
  SidebarTabSC,
} from "./styled";
import { Route } from "@/const";
import RightArrowIcon from "@icons/svg/right-arrow.svg";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface Props {
  title: string;
  icon: React.ReactNode;
  routes: Route[];
  mobile?: boolean;
}

export const SidebarExpandTab = ({
  icon,
  routes,
  title,
  mobile = false,
}: Props) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    if (!mobile) return setShow(true);
  };

  const handleMouseLeave = () => {
    if (!mobile) setShow(false);
  };

  return (
    <SidebarTabSC
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => mobile && setShow(!show)}
    >
      <Left $mobile={mobile}>
        {icon}
        {title}
      </Left>
      <Right $active={show} $mobile={mobile}>
        <RightArrowIcon />
      </Right>
      {mobile && (
        <Dropdown $active={show}>
          {routes.map((route, index) => (
            <RouteSC key={index} href={route.path} $mobile>
              <DotHolder>
                <Dot></Dot>
              </DotHolder>
              <AfterDotText>{route.title}</AfterDotText>
            </RouteSC>
          ))}
        </Dropdown>
      )}

      <AnimatePresence>
        {!mobile && show && (
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
                <RouteSC key={index} href={route.path} $mobile={false}>
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
