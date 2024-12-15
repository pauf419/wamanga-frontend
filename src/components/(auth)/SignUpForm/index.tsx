import React, { useRef } from "react";
import { Portal } from "@/components/Portal";
import { AnimatePresence, motion } from "motion/react";
import type { ModalState } from "@/components/Header";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Input, Inputs, ModalContent, ModalSC, Title } from "../Form/styled";

interface Props {
  state: ModalState;
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SignUpForm = ({ state, setState }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => {
    setState({ ...state, signUp: false });
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
                  <Title>Регистрация</Title>
                  <Inputs>
                    <Input placeholder="Email" />
                    <Input placeholder="Пароль" type="password" />
                    <Input placeholder="Повторите пароль" type="password" />
                  </Inputs>
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
