"use client";

import { zIndex } from "@/const";
import React, { LegacyRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (document) {
      const div = document.createElement("div");
      document.body.appendChild(div);
      setContainer(div);

      return () => {
        document.body.removeChild(div);
      };
    }
  }, []);

  if (!container) return null;

  return createPortal(
    <div style={{ zIndex: zIndex.aboveEverything, position: "relative" }}>
      {children}
    </div>,
    container
  );
};
