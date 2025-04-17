"use client";

import { Flexbox } from "@/app/user/styled";
import styled from "@emotion/styled";

export const TeamLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(143, 150, 163, 0.24);
  gap: 16px;
  border-radius: 8px;
  padding: 12px;
`;

export const TeamLinkFlexbox = styled(Flexbox)`
  gap: 12px;

  @media (max-width: 672px) {
    display: grid;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: end;
  justify-items: end;
`;
