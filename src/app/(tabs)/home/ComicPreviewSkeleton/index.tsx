"use client";

import React, { type FC } from "react";
import { SwiperComic } from "../ComicPreviewVertical/styled";
import { Skeleton } from "@mui/material";

export const ComicPreviewSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={260}
      width={188}
      style={{ borderRadius: 16 }}
    />
  );
};
