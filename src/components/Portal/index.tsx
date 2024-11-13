import { createPortal } from "react-dom";

import type { PropsWithChildren } from "react";

export const Portal = ({ children }: PropsWithChildren) =>
  createPortal(children, document.body);
