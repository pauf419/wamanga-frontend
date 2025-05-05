"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
`;

export const Content = styled.div`
  display: flex;
`;
export const AvatarSection = styled.div`
  display: block;
`;

export const Avatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 24px;
  color: transparent;
  text-align: center;
  text-indent: 10000px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ContentSection = styled.div`
  display: grid;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Username = styled.a`
  display: flex;
  margin: 0 8px 0 0;
  font: inherit;
  color: ${colors.commentUsernameColor};
  text-decoration: none;
  letter-spacing: inherit;
  vertical-align: middle;
  align-items: center;
  gap: 8px;
`;

export const Timestamp = styled.div`
  display: inline-block;
  margin: 0;
  font-family: Raleway, "Raleway Fallback", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(143 150 163);
`;

export const Text = styled.div`
  margin: 8px 0;
  font-family: Raleway, "Raleway Fallback", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5714;
  overflow-wrap: anywhere;
  white-space: pre-line;
`;

export const Tools = styled.div`
  display: flex;
`;

export const ToggleButton = styled.button<{ $active: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 8px 12px;
  font-weight: 700;
  color: ${(props) => (props.$active ? colors.primary : colors.badgeColor)};
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 8px;
  outline: none;
  transition: 0.2s all ease;

  &:hover {
    background: ${colors.badgeBg};
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${colors.iconColor};
`;

export const ReplyWrapper = styled.div`
  display: block;
`;

export const Fires = styled.div`
  display: block;
`;
