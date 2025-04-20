"use client";

import type { User } from "@/api/types/user";
import {
  ActionWrapper,
  ContentWrapper,
  DataListKey,
  DataListUnit,
  DataListValue,
  DataWrapper,
  Wrapper,
} from "../../../users/components/UserListUnit/styled";
import { Avatar } from "@/components/Comments/Comment/styled";
import { Dropdown } from "@/components/Dropdown";
import Modal from "@/components/Modal";
import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";
import { WarningBlock, WarningIcon, WarningText } from "@/app/user/styled";

import InfoIcon from "@icons/svg/info-filled.svg";
import type { Comic } from "@/api/types/comic";
import BadgeTypeSelect from "@/components/BadgeTypeSelect";
import { simpleSearch } from "@/api/title";
import { AppointWrapper, FlexBlock } from "../../../styled";

interface Props {
  user: User;
}

const TeamListUnit = ({ user }: Props) => {
  const [appointActive, setAppointActive] = useState<boolean>(false);

  const [titles, setTitles] = useState<Comic[]>([]);

  const searchTitles = async (query: string) => {
    const _ = await simpleSearch(query);
    if (_ && _.length) setTitles(_);
  };

  let defaultIndex = 1;

  switch (user.role) {
    case "user":
      defaultIndex = 0;
      break;
    case "moderator":
      defaultIndex = 1;
      break;
    case "admin":
      defaultIndex = 2;
      break;
    case "dev":
      defaultIndex = 3;
      break;
  }

  return <Wrapper></Wrapper>;
};

export default TeamListUnit;
