"use client";

import { DropdownHeader } from "@/components/Dropdown/styled";
import { Placeholder } from "@/components/Input/styled";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  padding: 0 24px;
  display: grid;
  gap: 24px;

  label {
    background: rgb(17 18 19);
  }

  @media (max-width: 1200px) {
    margin-top: 64px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const PathnameHeader = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 6px;
  background: #5a5ee7;
  padding: 6px 15px;
  border-radius: 6px;
  height: 35px;
`;

export const Pathname = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  line-height: 1.71429;
  font-size: 13px;
  transition: 0.2s all ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PathnameSpacer = styled.div`
  text-decoration: none;
  color: #fff;
  font-weight: 900;
  line-height: 1.71429;
  font-size: 13px;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
`;

export const GridMini = styled(GridContainer)`
  grid-template-columns: repeat(3, 1fr);
`;

export const SegmentSeparator = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: auto;
    min-width: 220px;
  }

  label {
    background: #111213;
  }
`;

export const SegmentTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  button {
    width: auto;
  }
`;

export const Block = styled.div`
  background: #18191b;
  padding: 32px;
  border-radius: 8px;
  text-align: center;
  display: grid;
  gap: 32px;
`;

export const FlexBlock = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;

export const Poster = styled.img`
  border-radius: 8px;
  max-width: 300px;
  object-fit: cover;
`;

export const DataList = styled.div`
  display: grid;
  gap: 18px;
  max-width: 500px;
`;

export const DataListItem = styled.div`
  display: flex;
  gap: 12px;

  align-items: center;

  label {
    background: #18191b;
  }
`;

export const DataListInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  opacity: 0.85;
`;

export const MiniBoxWrapper = styled.div<{ $uploaded: boolean }>`
  background: #18191b;
  padding: 16px;
  border-radius: 8px;
  display: grid;
  gap: 12px;
  transition: 0.5s all ease;

  ${(props) =>
    !props.$uploaded
      ? `
    border: 2px dashed #18191b;
    `
      : `
    border: 2px dashed #5a5ee7;
    `}

  label {
    background: #18191b;
  }
`;

export const MiniBoxRef = styled(MiniBoxWrapper)`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  svg {
    fill: #4f5053;

    path {
      fill: #4f5053;
    }
  }
`;

export const MiniBoxImage = styled.div<{ $background: string }>`
  width: 80px;
  height: 80px;
  border-radius: 10px;

  ${(props) =>
    props.$background &&
    `
    background: url(${props.$background});
    background-size: cover;
    background-position: center;
    `}
`;

export const MiniBoxContent = styled(FlexBlock)`
  justify-content: space-between;
  align-items: center;
`;

export const ContentSegment = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ChapterPageGridContainer = styled(GridContainer)`
  grid-template-columns: auto auto;
`;

export const SettingsBlockFlexWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const ImageInputWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 18px;
  gap: 18px;
`;

export const SettingsBlockGridWrapper = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 16px;
  max-width: 600px;
  margin: 0 auto;

  svg {
    color: rgb(94, 99, 110);
  }

  label {
    background: #111213;

    svg {
      margin: 0;
      margin-right: 8px;
    }
  }
`;

export const AdminTitle = styled.h1`
  text-align: center;
  margin-top: 26px;
  font-size: 40px;
`;

export const FormTreflex = styled.div`
  display: flex;

  align-items: flex-end;

  gap: 16px;
`;

export const FormFlexDropdown = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;

  ${DropdownHeader} {
    width: 100%;
  }
`;

export const AppointWrapper = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
  width: 800px;
  min-height: 600px;
`;
