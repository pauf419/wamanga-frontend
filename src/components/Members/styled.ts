"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { PrimaryLinkSC } from "../Button/styled";

export const Wrapper = styled.div`
  display: grid;
  background: ${colors.badgeBg};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 12px 24px -4px;
`;

export const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ProfileWrapper = styled.div`
  padding-left: 16px;
  padding-right: 8px;
  width: 100%;
`;

export const Username = styled.div`
  font-weight: 600;
  line-height: 1.57143;
  font-size: 0.875rem;
`;

export const Statuses = styled.div`
  color: rgb(143, 150, 163);
`;

export const OpenLink = styled(PrimaryLinkSC)`
  margin-top: 16px !important;
  width: 100%;
`;
