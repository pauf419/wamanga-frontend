"use client";

import styled from "@emotion/styled";

export const NotFoundWrapper = styled.div`
  margin: auto auto;
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 58px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    gap: 30px;
  }
`;

export const MessageWrapper = styled.div`
  position: relative;
  max-height: 800px;
  height: 100%;
  background: #1c1f27;
  border-radius: 12px;
  padding: 24px;
  display: grid;
  flex: 1;
  justify-items: start;
  align-content: space-between;
  gap: 30px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 24px 24px -4px;
  overflow: hidden;

  @media (max-width: 900px) {
    min-height: 400px;
  }
`;

export const Segment = styled.div`
  display: grid;
  gap: 30px;
`;
export const ShadowTitle = styled.h1`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  bottom: -30px;
  right: 30px;

  color: #41434d;
  color: #41434d;
  font-size: 400px;
  transform: rotate(14deg);
  z-index: 1;
  align-items: center;
  justify-content: flex-end;
  opacity: 0.5;

  @media (max-width: 1650px) {
    font-size: 300px;
  }

  @media (max-width: 1300px) {
    font-size: 250px;
  }

  @media (max-width: 1130px) {
    font-size: 220px;
  }

  @media (max-width: 600px) {
    font-size: 150px;
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 10;
  color: #fff;
  font-size: 80px;
  text-transform: uppercase;

  @media (max-width: 1300px) {
    font-size: 55px;
  }

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

export const OkakButton = styled.a`
  position: relative;
  z-index: 10;
`;

export const Description = styled.div`
  position: relative;
  z-index: 10;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;

export const OkakWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Image = styled.img`
  border-radius: 12px;
  max-height: 800px;
  width: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 24px 24px -4px;
`;
