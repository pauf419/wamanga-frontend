"use client";

import { SortingButton as SortingButtonTemplate } from "@/app/team/[slug]/styled";
import BasePage from "@/components/BasePage";
import { colors } from "@/const";
import styled from "@emotion/styled";

export const CatalogSC = styled(BasePage)`
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
`;

export const Body = styled.div`
  width: 100%;
  display: grid;
  word-break: break-all;
  margin: 0 24px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TitlesWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
  margin-top: 16px;
`;

export const SortingButton = styled(SortingButtonTemplate)``;

export const FiltersBlurer = styled.div<{ $active: boolean }>`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  transition: 0.2s all ease;
  opacity: 0;
  visibility: hidden;
  ${(props) =>
    props.$active &&
    `
      opacity: 1;
      visibility: visible;
    `}
`;

export const FiltersContent = styled.div`
  min-width: 400px;
  padding: 0 24px;
  word-break: break-all;
  transition: 0.2s all ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(-100px + 100vh);
`;

export const FiltersWrapper = styled.div<{
  $active: boolean;
  $beyond: boolean;
}>`
  min-height: 64px;
  position: sticky;
  min-width: 400px;
  width: 400px;
  top: 80px;
  transition: 0.2s all ease;
  overflow-x: hidden;

  ${(props) =>
    props.$beyond &&
    `
    position: fixed;
    height: 100dvh;
    right: 0;
    top: 0;
    z-index: 999;
    background: rgba(29, 30, 32, 0.98);
    backdrop-filter: blur(6px);
    padding: 24px 0;
    box-shadow: rgba(0, 0, 0, 0.24) -40px 40px 80px -8px;

    ${FiltersContent} {
      height: 100%;
    }

    .button-filled {
      margin-top: auto;
    }
    `}

  @media(min-width: 900px) {
    ${(props) =>
      props.$active &&
      `
    min-width: 0;
    width: 0;
  `};
  }

  @media (max-width: 900px) {
    top: unset;
    right: unset;
    width: 100%;
    height: 70dvh;
    bottom: 0;

    ${(props) =>
      props.$active &&
      `
      bottom: -100%;
    `};
  }
`;

export const DropdownsWrapper = styled.div`
  overflow-y: auto;
`;
