"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";
import { PrimaryButtonSC } from "../../Button/styled";

export const CommentsBlock = styled.div`
  padding: 16.5px 14px;
  background-color: ${colors.commentsBlockBackground};
  border-radius: 16px;
  box-shadow: ${colors.commentsBlockShadow};
`;

export const Action = styled(CommentsBlock)<{ $nested: boolean }>`
  display: grid;
  gap: 24px;
  padding-bottom: 8px;
  background-color: ${(props) => props.$nested && "transparent"};
  box-shadow: ${(props) => props.$nested && "none"};
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 23px;
  max-height: 92px;
  overflow: hidden;
  font: inherit;
  color: ${colors.text};
  letter-spacing: inherit;
  resize: none;
  background: transparent;
  border: none;
  outline: none;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${colors.iconColor};
`;

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const SwitchSpacer = styled.div`
  width: 120px;
  margin-left: 10px;
`;

export const SendButton = styled(PrimaryButtonSC)`
  width: auto;
  height: auto;
  padding: 3px 10px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.7142;
`;
