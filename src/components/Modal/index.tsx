import type { ReactNode } from "react";
import React, { useRef } from "react";
import { Portal } from "@/components/Portal";
import { AnimatePresence, motion } from "motion/react";
import { useClickOutside } from "@/hooks/use-click-outside";
import {
  CloseBlock,
  ModalAction,
  ModalContent,
  ModalSC,
  Title,
} from "./styled";

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
}

const Modal = ({ state, setState, children, title }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => {
    setState(false);
  };

  useClickOutside(modalRef, onClickOutside);

  return (
    <>
      <AnimatePresence mode="wait">
        {state && (
          <Portal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ModalSC>
                <ModalContent
                  ref={modalRef}
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(0)" }}
                  transition={{ duration: 0.2 }}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <Title>{title}</Title>
                  <ModalAction>{children}</ModalAction>
                  <CloseBlock>
                    <button
                      className="button-transparent"
                      onClick={() => setState(false)}
                    >
                      Закрыть
                    </button>
                  </CloseBlock>
                </ModalContent>
              </ModalSC>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
