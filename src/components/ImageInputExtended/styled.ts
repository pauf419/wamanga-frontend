"use client";

import styled from "@emotion/styled";

export const FileInputContainer = styled.div`
  &.category {
    display: flex;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  background: transparent;
  border-radius: 8px;
  width: 138px;
  height: 188px;
  position: relative;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(143, 150, 163, 0.32);

  @media (max-width: 900px) {
    width: 98px;
    height: 98px;
  }
`;

export const Img = styled.img`
  width: 130px;
  height: 180px;
  border-radius: 6px;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
  }
`;

export const Background = styled.div`
  width: 130px;
  height: 180px;
  border-radius: 6px;
  background: rgba(143, 150, 163, 0.32);
  transition: 0.2s all ease;

  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
  }
`;

export const Blurer = styled.div<{ $active: boolean }>`
  transition: 0.2s all ease;
  display: grid;
  position: absolute;
  width: 130px;
  height: 180px;
  border-radius: 6px;
  opacity: 0;
  justify-items: center;
  align-items: center;
  align-content: center;
  font-size: 12px;

  ${(props) =>
    props.$active
      ? `
      background: rgba(17, 18, 19, 0.64);
    &:hover {
        opacity: 1;
    }
    
    `
      : `
    opacity: 1;
    &:hover {

        ${Background} {
            background: rgba(129, 129, 129, 0.32);
        }
    }
    `}

  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
    font-size: 9px;
  }
`;

export const CloseBlurer = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  padding: 5px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;

  svg {
    color: rgba(129, 129, 129, 0.7);
    fill: rgba(129, 129, 129, 0.7);
    transition: 0.2s all ease;
  }

  &:hover {
    background: rgba(129, 129, 129, 0.7);
    svg {
      color: #fff;
      fill: #fff;
    }
  }
`;

export const ChangerIcon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    display: block;
  }
`;
