"use client";

import { DropdownHeader } from "@/components/Dropdown/styled";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  gap: 12px;
  background: #18191b;
  padding: 15px;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 12px 24px -4px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 15px;

  img {
    margin: 0;
    width: 50px;
    height: 50px;
  }
`;

export const DataWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
`;

export const DataListUnit = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  ${DropdownHeader} {
    width: auto;
  }
`;

export const DataListKey = styled.b`
  font-size: 13px;
  color: #9da0f7;
`;

export const DataListValueStatic = styled.div`
  font-size: 13px;
`;

export const DataListValue = styled.input`
  font-size: 13px;
  border: none;
  background: transparent;
  color: #fff;
  text-align: right;
  outline: none;
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
