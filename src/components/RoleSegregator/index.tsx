"use client";
import { useUserStore } from "@/app/store";
import type { ReactNode } from "react";

export enum UserRole {
  User = "user",
  Moderator = "moderator",
  Admin = "admin",
  Owner = "Owner",
}

interface Props {
  allowedRoles: UserRole[];
  children: ReactNode;
}

export const Comment = ({ allowedRoles, children }: Props) => {
  const user = useUserStore((state) => state.user);

  if (!user || !allowedRoles.includes(user.role as UserRole)) return <></>;
  return children;
};
