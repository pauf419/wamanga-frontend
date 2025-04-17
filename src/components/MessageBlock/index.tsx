"use client";

import type { ReactNode } from "react";
import React, { useState } from "react";
import InfoIcon from "@icons/svg/info-filled.svg";
import { Wrapper } from "./styled";
import { Icon } from "./styled";
import { Message } from "./styled";

interface Props {
  children: ReactNode;
}

export const MessageBlock = ({ children }: Props) => {
  return (
    <Wrapper>
      <Icon as={InfoIcon} />
      <Message>{children}</Message>
    </Wrapper>
  );
};
