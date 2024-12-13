import React from "react";
import { PrimaryButtonSC, PrimaryLinkSC } from "./styled";

interface Props {
  href?: string;
  children?: React.ReactNode;
}

export const PrimaryButton = ({ href, children }: Props) => {
  if (href) return <PrimaryLinkSC href={href}>{children}</PrimaryLinkSC>;
  else return <PrimaryButtonSC>{children}</PrimaryButtonSC>;
};
