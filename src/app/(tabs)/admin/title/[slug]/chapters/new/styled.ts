"use client";

import styled from "@emotion/styled";

export const HeaderTitle = styled.h1`
  text-align: center;
  margin-top: 26px;
  font-size: 40px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;

  label {
    background: transparent;
    color: #000;

    div {
      font-weight: 700;
    }
  }
`;

export const Action = styled.div<{ $uploaded: boolean }>`
  display: flex;
  flex: 1 0;
  height: 100%;
  background: #18191b;
  padding: 16px;
  border-radius: 8px;

  align-items: flex-end;

  justify-content: space-evenly;
  transition: 0.2s all ease;
  ${(props) =>
    props.$uploaded &&
    `
    opacity: 0.6;
    pointer-events: none;
    `}
`;

export const UnitsList = styled.div`
  flex: 1 0;
  display: flex;
`;

export const UnitsListInside = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  gap: 8px;
`;

export const Controller = styled.div`
  margin: 32px 0;
  padding: 16px;
  gap: 16px;
  border-radius: 10px;
  background: #9da0f7;
  display: flex;

  justify-content: space-evenly;

  align-items: center;
`;

export const NumberButton = styled.div`
  display: flex;
  border-radius: 8px;
  background: #5a5ee7;
  font-weight: 700;
  border: none;
  outline: none;

  button {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 2px solid #fff;

    &:hover {
      border-right: 2px solid #fff;
    }
  }
`;
export const NumberButtonInput = styled.input`
  background: transparent;
  color: #fff;
  outline: none;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  width: 60px;
  font-weight: 700;
  text-align: center;
  padding: 0 8px;
`;

export const VolumeInputWrapper = styled.div`
  display: grid;
  gap: 6px;
`;

export const VolumeInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  font-weight: 700;
`;

export const VolumeInputBody = styled.div`
  display: flex;
`;

export const VolumeInput = styled.input<{ $left: boolean }>`
  max-width: 50px;
  width: 100%;
  outline: none;
  background: transparent;
  border-top: 1px solid rgba(143, 150, 163, 0.32);
  border-bottom: 1px solid rgba(143, 150, 163, 0.32);
  padding: 8.5px 14px;
  color: #fff;
  font-weight: 700;

  ${(props) =>
    props.$left
      ? `
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
border-left: 1px solid rgba(143,150,163,0.32);
border-right: 1px solid rgba(143,150,163,0.32);
    `
      : `
        border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-left: none;
  border-right: 1px solid rgba(143,150,163,0.32);
      `}
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: #111213;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ProgressBarFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: #5a5ee7;
  transition: width 0.4s ease;
  border-radius: 999px;
`;

export const UploadWrapper = styled.div`
  width: 500px;
  max-height: 800px;
  overflow-y: auto;
  display: grid;
  gap: 12px;
`;

export const UploadErrorWrapper = styled.div`
  padding: 12px;
  border-radius: 6px;
  background: #d32f2f;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
`;
