"use client";
import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background: #18191b;
  position: relative;
`;

export const EditButton = styled(Link)`
  position: absolute;
  right: 8px;
  top: 8px;
  background: rgba(90, 95, 231, 0.81);
  padding: 8px;
  border-radius: 100px;
  transition: 0.2s all ease;

  &:hover {
    background: rgb(65, 71, 247);
  }

  svg {
    fill: #fff;
    color: #fff;
    display: block;
    width: 16px;
    height: 16px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  left: 9px;
  border: none;
  top: 8px;
  background: rgba(90, 95, 231, 0.81);
  padding: 8px;
  border-radius: 100px;
  transition: 0.2s all ease;

  &:hover {
    background: rgb(65, 71, 247);
  }

  svg {
    fill: #fff;
    color: #fff;
    display: block;
    width: 16px;
    height: 16px;
  }
`;

export const DeleteDialogWrapper = styled.div`
  padding: 24px;
  display: grid;
  gap: 12px;
  background: #18191b;
  border-radius: 12px;
  justify-items: end;
`;

export const DeleteTitle = styled.h3`
  color: #fff;
  min-height: 200px;
`;

export const DeleteActionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  cursor: pointer;
`;

export const Description = styled.div`
  padding: 8px;
  display: grid;
  gap: 8px;
  align-items: s;
`;

export const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const LinkS = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #9da0f7;
`;
