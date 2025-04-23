"use client";

import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import { Blurer } from "../SideBarMobile/styled";
import { SortingButton } from "@/app/team/[slug]/styled";

export const HeaderSC = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${zIndex.header};
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  background: ${colors.background + convertOpacityToHex(60)};
  backdrop-filter: blur(6px);

  @media (max-width: 1200px) {
    height: 64px;
    padding: 0 24px;
  }
`;

export const UserAvatar = styled.div<{ $source: string }>`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: url(${(props) => props.$source});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

export const ClickMenuBlurer = styled(Blurer)`
  z-index: 249;
  background: transparent;
`;

export const ClickMenuWrapper = styled.div<{ $active: boolean }>`
  display: grid;
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  padding: 12px;
  border-radius: 12px;
  width: 224px;
  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;
  background-color: rgba(29, 30, 32, 0.9);
  backdrop-filter: blur(6px);
  transition: 0.2s all ease;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;

  ${(props) =>
    props.$active
      ? `
    transform: scale(1);
    overflow: visible;
    visibility: visible;
    opacity: 1;
  `
      : "transform: scale(0.8);"}
`;

export const ClickMenuHeader = styled.div`
  display: flex;
  gap: 12px;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 6px;
  margin-bottom: 12px;
  margin-top: 12px;

  a {
    line-height: 1.57143;
    font-weight: 400;
    text-decoration: none;
    font-size: 13px;
    color: rgb(143, 150, 163);
    transition: 0.2s all ease;

    &:hover {
      color: rgb(90 94 231);
    }
  }
`;

export const HeaderAvatar = styled.a<{ $source: string }>`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background: url(${(props) => props.$source});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const HeaderLink = styled.a`
  padding: 6px 6px;
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 6px;
  color: #fff;
  text-decoration: none;
  transition: 0.2s all ease;

  &:hover {
    background: rgba(143, 150, 163, 0.08);
  }
`;

export const HeaderSpacer = styled.div`
  margin: 12px 0px;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-color: rgba(143, 150, 163, 0.24);
  border-style: dashed;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  gap: 16px;
`;

export const ToggleButton = styled.button`
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;

  svg {
    width: 20px;
    height: 20px;
  }

  svg path {
    fill: ${colors.headerToggleButtonFill};
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: none;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 15px;
  font-weight: 700;
  font-size: 13px;
  line-height: 22.29px;
  color: ${colors.text};
  text-align: center;
  cursor: pointer;
  background: ${colors.textPriamry};
  border: none;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.secondary};
    box-shadow: 0 8px 16px ${colors.secondary + convertOpacityToHex(60)};
  }
`;

export const SearchWrapper = styled.div<{ $active: boolean }>`
  position: fixed;
  width: calc(100% - 83px);
  height: 100dvh;
  background: rgba(17, 18, 19, 0.9);
  backdrop-filter: blur(4px);
  z-index: 251;
  transition: 0.2s all ease;

  ${(props) =>
    props.$active
      ? `
     transform: translateY(0);
    `
      : `
     transform: translateY(-100%);`}

  @media(max-width: 1200px) {
    width: calc(100%);
  }
`;

export const SearchHeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    padding: 0 16px;
  }
`;

export const CloseButton = styled(SortingButton)`
  color: rgb(248, 75, 75);

  svg {
    color: rgb(248, 75, 75);
  }

  &:hover {
    background: rgb(35, 23, 25);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-left: 8px;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  color: #fff;
  padding: 4px 0px 5px;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  display: block;
  margin-top: 2px;
`;

export const SearchBodyWrapper = styled.div`
  padding: 16px 16px 16px;
  max-height: calc(100dvh - 80px);
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
  gap: 16px;
`;

export const SearchNoResultsWrapper = styled.div`
  display: grid;
  gap: 16px;
  justify-items: center;
  font-weight: 700;
`;
