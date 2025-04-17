"use client";

import { useStore } from "@/app/store/useStore";
import type { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode;
}

export const DisplaysWhenAuth = ({ children }: Props) => {
  const { isAuth } = useStore();

  if (isAuth) return children;

  return <></>;
};

export const NotDisplaysWhenAuth = ({ children }: Props) => {
  const { isAuth } = useStore();

  if (!isAuth) return children;

  return <></>;
};
