"use client";

import styled from "@emotion/styled";

export const LogoutPageWrapper = styled.div`
  height: 60dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutPageContent = styled.div`
  background: #18191b;
  border-radius: 12px;
  display: grid;
  justify-items: center;
  max-width: 600px;
  width: 100%;
  padding: 26px;
  margin: 0 auto;
  gap: 50px;
  margin: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 30px;

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

export const Paragraph = styled.p`
  color: #9da0f7;
`;
