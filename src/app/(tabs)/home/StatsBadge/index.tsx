import React from "react";
import LikeIcon from "@icons/svg/like.svg";
import ViewIcon from "@icons/svg/view.svg";
import { BadgeSC } from "./styled";
import { formatNumber } from "@/utils";

export enum Icon {
  LIKE = "like",
  VIEW = "view",
}

interface Props {
  icon: Icon;
  amount: number;
}

const StatsBadge = ({ amount, icon }: Props) => {
  return (
    <BadgeSC>
      {icon === Icon.LIKE ? <LikeIcon /> : <ViewIcon />}
      {formatNumber(amount)}
    </BadgeSC>
  );
};

export default StatsBadge;
