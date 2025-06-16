"use client";

import { SidebarSC } from "@/components/Sidebar/styled";
import { Blurer, SidebarMobileSC } from "@/components/SideBarMobile/styled";
import { colors, zIndex } from "@/const";
import { convertOpacityToHex } from "@/utils";
import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderSC = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  left: 84px;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: 16px;
  z-index: 10;
  width: calc(100% - 84px);
  z-index: 9;
  padding: 16px;
  height: 64px;
  background: ${colors.background + convertOpacityToHex(60)};
  backdrop-filter: blur(6px);
  border-bottom: 1px dashed rgba(143, 150, 163, 0.24);
  transition: 0.2s all ease;

  ${(props) =>
    props.$active
      ? "transform: translateY(0);"
      : "transform: translateY(-100%);"}

  @media (max-width: 1200px) {
    width: 100%;
    left: 0;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr minmax(0px, max-content);
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const ReaderMangaTitle = styled.h1`
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ToggleButton = styled.button`
  display: block;
  cursor: pointer;
  background: transparent;
  border: none;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  svg path {
    fill: ${colors.headerToggleButtonFill};
  }

  @media (min-width: 1200px) {
    display: none;
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
  width: 75px;
  height: 30px;
  font-size: 13px;
  font-weight: 500;
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

export const Spacer = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(143, 150, 163, 0.24);
  margin: 0 6px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ChapterControllsBlock = styled(Block)`
  justify-content: center;

  align-items: center;
  color: #fff;
  font-weight: 700;

  margin-right: 83px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

export const SettingsBlock = styled(Block)`
  justify-content: end;
`;

export const ChaptersControlls = styled.div`
  margin: 0px;
  font-weight: 700;
  line-height: 1.71429;
  font-size: 0.875rem;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
  min-width: 64px;
  max-width: 200px;
  text-align: center;
  transition: 0.2s all ease;
  padding: 4px 5px;
  border-radius: 8px;
  background: transparent;

  &:hover {
    background: rgba(98, 102, 110, 0.12);
  }
`;

export const ControllerDisabledMessage = styled.div`
  position: absolute;
  top: 100%;
  background: #2f3237;
  border-radius: 4px;
  padding: 6px;
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  display: none;
`;

export const ChaptersController = styled(Link)<{ $disabled: boolean }>`
  padding: 5px;
  color: rgba(143, 150, 163, 0.8);
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$disabled &&
    `
    cursor: default;

    ${ControllerDisabledMessage} svg {
      color: rgb(74 78 85 / 80%)!important;
    }

    &:hover ${ControllerDisabledMessage} {
      display: block;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    display: block;
    fill: rgba(143, 150, 163, 0.8);
  }
`;

export const SettingsSidebar = styled.div<{ $active: boolean; $type: string }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${zIndex.aboveEverything};
  display: grid;
  gap: 4px;
  align-content: start;
  ${(props) => {
    switch (props.$type) {
      case "settings":
        return "width: 280px;";
      case "chapters":
        return "min-width: 280px;";
    }
  }}
  height: 100%;
  background: rgba(17, 18, 19, 0.9);
  backdrop-filter: blur(5px);
  box-shadow: ${colors.sidebarMobileShadow};
  transition: all 0.2s ease-in-out;
  transform: ${(props) =>
    props.$active ? "translateX(0)" : "translateX(100%)"};
`;
export const SettingsBlurer = styled(Blurer)<{ $active: boolean }>`
  background: transparent;
  height: 100dvh;
  left: 0;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const SidebarHeader = styled.div`
  height: 64px;
  padding: 0 20px;
  border-bottom: 1px dashed rgba(143, 150, 163, 0.24);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SidebarHeaderTools = styled.div`
  display: flex;
  gap: 4px;
`;

export const SidebarBody = styled.div`
  display: grid;
  height: 100%;
  overflow-y: auto;
  padding: 20px 20px 20px;
`;

export const SidebarBodySegment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 12px;
`;

export const SegmentTitle = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(143, 150, 163);
  line-height: 1.5;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const SegmentContent = styled.div`
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const SegmentButton = styled.button<{ $active: boolean }>`
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: inherit;
  width: 100%;
  display: grid;
  justify-items: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(94, 99, 110);
  border-radius: 8px;
  border: 1px solid rgba(143, 150, 163, 0.12);
  padding: 6px;
  transition: 0.2s all ease;
  min-height: 56px;
  text-align: center;

  ${(props) =>
    props.$active &&
    `
    color: rgb(90, 94, 231);
    `}

  &:hover {
    ${(props) =>
      props.$active
        ? `
      background: rgb(90, 94, 231, 0.12);
      `
        : `
      background: rgba(98, 102, 110, 0.12);
      `}
  }
`;

export const SegmentIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const PagePopupWrapper = styled.div<{
  $active: boolean;
  $mobile: boolean;
}>`
  position: absolute;
  z-index: 252;
  backdrop-filter: blur(6px);
  background-color: rgba(29, 30, 32, 0.9);
  color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0.24) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  transform: scale(0);
  opacity: 0;
  transition: 0.2s all ease;
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-width: 200px;
  max-height: 250px;
  overflow-y: auto;

  ${(props) =>
    props.$mobile
      ? `
    bottom: 100%;
    `
      : "top: 100%;"}

  ${(props) =>
    props.$active
      ? `
      transform: scale(1);
      opacity: 1;
      
    `
      : `

    `}
`;

export const PagePopup = styled.div<{ $active: boolean }>`
  padding: 6px 16px;
  text-align: start;
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 670;
  border-radius: 6px;
  transition: 0.2s all ease;

  ${(props) => props.$active && "color: rgb(90, 94, 231);"}

  &:hover {
    ${(props) =>
      props.$active
        ? `
      background: rgb(90, 94, 231, 0.12);
      `
        : `
      background: rgba(98, 102, 110, 0.12);
      `}
  }
`;

export const ChaptersList = styled.div`
  display: flex;
  color: rgb(255, 255, 255);
  flex-direction: column;
  gap: 4px;
`;

export const ChaptersListElement = styled.div<{ $active: boolean }>`
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  min-height: 40px;
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 8px 16px;
  text-decoration: none;
  background: rgb(29, 30, 32);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 8px;
  transition: 0.2s all ease;
  cursor: pointer;
  max-width: 300px;
  width: 100%;

  ${(props) => props.$active && "border: 1px solid rgb(90, 94, 231);"}

  svg {
    width: 16px;
    height: 16px;

    ${(props) =>
      props.$active
        ? `
      color: rgb(90, 94, 231);
      `
        : `
      color: rgb(94, 99, 110);
      `}
  }

  &:hover {
    backgroun: #2f3237;
  }
`;

export const MobileReaderButtonWrapper = styled.div<{ $active: boolean }>`
  position: fixed;
  z-index: 9;
  display: flex;
  width: calc(100% - 83px);
  justify-content: center;
  min-height: 38px;
  width: 100%;
  bottom: 0;

  position: fixed;
  z-index: 9;
  min-height: 38px;
  transition: 0.2s all ease;

  ${(props) =>
    props.$active
      ? "transform: translateY(-59px);"
      : "transform: translateY(-8px);"}
`;

export const HeaderBottom = styled.div<{ $active: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 16px;
  width: 100%;
  z-index: 10;
  padding: 16px;
  height: 51px;
  background: ${colors.background + convertOpacityToHex(60)};
  backdrop-filter: blur(6px);
  border-top: 1px dashed rgba(143, 150, 163, 0.24);
  transition: 0.2s all ease;

  ${(props) =>
    props.$active
      ? "transform: translateY(0);"
      : "transform: translateY(100%);"}

  ${PagePopupWrapper} {
    top: autoeee;
    left: 0;
    bottom: 100%;
  }

  div {
    justify-content: space-between;
    width: 100%;
  }
`;
