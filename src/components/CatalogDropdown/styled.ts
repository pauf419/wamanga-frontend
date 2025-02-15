"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const Wrapper = styled.div<{
  $active: boolean;
  $first: boolean;
  $last: boolean;
}>`
  display: grid;
  background: rgb(29, 30, 32);
  transition: 0.2s all ease;
  margin: 0 0;
  border-bottom: 1px solid rgb(56 59 63);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 8px 16px 0px;

  ${(props) =>
    props.$first &&
    `
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      `}

  ${(props) =>
    props.$last &&
    `
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-bottom: 1px solid transparent;
      `}
  
    ${(props) =>
    props.$active &&
    `
      margin: ${props.$last ? "16px 0 0 0" : props.$first ? "0 0 16px 0" : "16px 0"};
      border-radius: 8px;
      border-bottom: 1px solid transparent;
  
      ${Header} {
        margin: 20px 0px;
      }

      ${Arrow} {
        transform: rotateZ(180deg)
      }
      `}
`;
export const Header = styled.div`
  padding: 8px;
  cursor: pointer;
  user-select: none;
  padding: 0px 8px 0px 16px;
  line-height: 1.5;
  margin: 12px 0px;
  transition: 0.2s all ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const Arrow = styled.svg`
  width: 20px;
  height: 20px;
  transition: 0.2s all ease;
`;

export const Body = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease;
`;
export const Content = styled.div`
  display: grid;
  padding: 16px;
`;
