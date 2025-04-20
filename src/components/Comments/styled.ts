"use client";

import { colors } from "@/const";
import styled from "@emotion/styled";

export const CommentsWrapper = styled.div`
  display: grid;
  gap: 16px;
`;

export const CommentsBlock = styled.div`
  padding: 16.5px 14px;
  background-color: ${colors.commentsBlockBackground};
  border-radius: 16px;
  box-shadow: ${colors.commentsBlockShadow};
`;

export const List = styled(CommentsBlock)`
  display: grid;
  gap: 24px;
  padding: 24px;
`;

export const NoCommentsMessage = styled.div`
  display: grid;
  justify-items: center;
`;

export const NoImage = styled.img`
  max-width: 450px;
  width: 100%;
`;

export const NoCommentsText = styled.div`
  padding: 16px 0;
  font-weight: 600;
  line-height: 1.5714;
`;
