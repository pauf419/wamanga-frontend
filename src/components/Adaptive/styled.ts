"use client";

import styled from "@emotion/styled";

export const HidesWhenMobile = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DisplaysWhenMobile = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;
