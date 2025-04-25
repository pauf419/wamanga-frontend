"use client";

import { InfoTagBadge } from "@/app/[genre]/[slug]/MainSection/styled";
import { StatsBadge } from "@/app/[genre]/[slug]/styled";
import { colors } from "@/const";
import styled from "@emotion/styled";

export const Wrapper = styled.div<{ $nested: boolean }>`
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgb(143 150 163 / 24%);
  justify-items: stretch;

  ${(props) =>
    props.$nested &&
    `
    padding: 0;
    border: none;
    margin-top: 24px;

    ${Title} {
        display: none;
    }
    `}
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) 102px;
  gap: 8px;
  position: relative;
`;

export const Title = styled.h5`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 102px;
  margin-top: auto;
  position: absolute;
  right: 20px;
  bottom: -15px;
`;

export const Body = styled.div``;

export const PanelWrapper = styled.div`
  background: ${colors.donationPanelBackground};
  padding: 8px 16px 8px 20px;
  box-shadow: ${colors.commentsBlockShadow};
  border-radius: 100px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const Icon = styled.svg`
  display: block;
`;

export const CounterIcon = styled(Icon)`
  color: ${colors.badgeColor};
  width: 14px;
  height: 14px;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const Counter = styled.p`
  color: ${colors.text};
  border: 0px;
  font: inherit;
  letter-spacing: inherit;
  background: none;
  padding: 8.5px 0px 8.5px 14px;
  outline: none;
  box-sizing: content-box;
  display: block;
  width: 36px;
  max-width: 36px;
`;

export const CounterControlls = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControllBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: 0.2s all ease;
  border-radius: 50%;

  &:hover {
    background: ${colors.counterBtnHoverBackground};
  }
`;

export const ThxButton = styled(InfoTagBadge)`
  cursor: pointer;
  padding: 4px 10px;
  text-transform: none;
  font-weight: 700;
  line-height: 1.21429;
  font-size: 13px;
  border-radius: 100px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 6px;
  align-items: flex-start;
`;

export const Description = styled.div`
  line-height: 1.57143;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Link = styled.a`
  font-weight: 700;
  line-height: 1.71429;
  text-decoration: none;
  font-style: normal;
  color: ${colors.commentUsernameColor};
`;
