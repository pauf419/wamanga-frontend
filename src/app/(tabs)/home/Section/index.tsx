import React from "react";
import {
  MoreButton,
  SectionSC,
  SectionTitle,
  SectionTitleText,
} from "./styled";

interface Props {
  title: string;
  link: string;
  children?: React.ReactNode;
  className?: string;
}

export const Section = ({ title, link, children, className }: Props) => {
  return (
    <SectionSC className={className}>
      <SectionTitle>
        <SectionTitleText>{title}</SectionTitleText>
        <MoreButton href={link}>Больше</MoreButton>
      </SectionTitle>

      {children}
    </SectionSC>
  );
};
