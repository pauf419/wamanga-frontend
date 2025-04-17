"use client";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  align-items: start;
  border-radius: 8px;
  overflow: hidden;
  background: #18191b;
  position: relative;
`;

export const EditButton = styled.a`
  position: absolute;
  right: 8px;
  top: 8px;
  background: #5a5ee780;
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

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
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

export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #9da0f7;
`;
