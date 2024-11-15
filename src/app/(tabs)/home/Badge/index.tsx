import React from "react";
import { BadgeSC } from "./styled";

interface Props {
  backgroundColor: string;
  textColor: string;
  children: React.ReactNode;
}

const Badge = ({ backgroundColor, textColor, children }: Props) => {
  return (
    <BadgeSC $bgColor={backgroundColor} $textColor={textColor}>
      {children}
    </BadgeSC>
  );
};

export default Badge;
