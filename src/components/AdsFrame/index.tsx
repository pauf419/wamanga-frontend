"use client";

import { getSettings } from "@/api/settings";
import type { AdsFrameNames } from "@/api/types/settings";
import { useEffect, useState } from "react";
import { FrameBlockWrapper } from "./styled";

interface Props {
  frameName: AdsFrameNames;
}

export const AdsFrame = ({ frameName }: Props) => {
  const [frame, setFrame] = useState<string>();

  const fetchFrame = async () => {
    try {
      const res = await getSettings();
      setFrame(res[frameName]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchFrame();
  }, []);

  if (frame)
    return <FrameBlockWrapper dangerouslySetInnerHTML={{ __html: frame }} />;
  return <></>;
};
