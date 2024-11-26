import React, { useRef } from "react";
import { ModalContent, ModalSC, Title } from "./styled";
import { Portal } from "@/components/Portal";
import { AnimatePresence, motion } from "motion/react";
import { ModalState } from "@/components/Header";
import { useClickOutside } from "@/hooks/use-click-outside";

interface Props {
  state: ModalState;
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SignUpForm = ({ state, setState }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => {
    setState({ signUp: false });
  };

  useClickOutside(modalRef, onClickOutside);

  return (
    <>
      <AnimatePresence mode="wait">
        {state.signUp && (
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
                  <Title>Войти</Title>
                </ModalContent>
              </ModalSC>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default SignUpForm;
