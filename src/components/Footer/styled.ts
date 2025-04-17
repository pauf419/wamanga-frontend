"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import Link from "next/link";

export const FooterSC = styled.footer`
  display: grid;
  grid-template-rows: 2 1fr;
  width: 100%;
  height: 250px;
  padding: 25px;
  margin-top: 80px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1025px) {
    grid-template-columns: auto;
    gap: 24px;
    justify-items: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1025px) {
    gap: 24px;
    justify-content: center;
  }
`;

export const Title = styled.h5`
  font-size: 1.25rem;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 1025px) {
    display: flex;
    align-items: center;
  }
`;

export const LinkSC = styled(Link)`
  font-weight: 300;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

export const Social = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text};

  & svg {
    width: 24px;
    height: 24px;
    transition: all 0.2s ease-in-out;
  }

  & svg:hover {
    color: ${colors.primary};
  }
`;

export const Copyright = styled.p`
  padding-bottom: 64px;
  margin-top: 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #8f96a3;
  color: rgb(143 150 163);
  text-align: center;
`;
