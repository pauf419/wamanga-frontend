"use client";

import React, { type FC } from "react";
import { Skeleton } from "@mui/material";

export const ProcessingMangaSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={140}
      width={310}
      style={{ borderRadius: 12 }}
    />
  );
};
