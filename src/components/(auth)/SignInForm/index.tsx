import React, { useRef } from "react";
import { Portal } from "@/components/Portal";
import { AnimatePresence, motion } from "motion/react";
import type { ModalState } from "@/components/Header";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Input, Inputs, ModalContent, ModalSC, Title } from "../Form/styled";
import {
  Action,
  GoogleContent,
  GoogleIconSC,
  GoogleText,
  Question,
  Questions,
  Text,
  WithGoogle,
} from "./styled";
import GoogleIcon from "@icons/svg/google.svg?url";

interface Props {
  state: ModalState;
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SignInForm = ({ state, setState }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => {
    setState({ ...state, signIn: false });
  };

  useClickOutside(modalRef, onClickOutside);

  return (
    <>
      <AnimatePresence mode="wait">
        {state.signIn && (
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
                  <Title>Вход</Title>
                  <Inputs>
                    <Input placeholder="Email" />
                    <Input placeholder="Пароль" type="password" />
                  </Inputs>
                  <Questions>
                    <Question>
                      <Text>Нет аккаунта?</Text>
                      <Action>Создать аккаунт</Action>
                    </Question>
                    <Question>
                      <Text>Забыл пароль?</Text>
                      <Action>Поменять</Action>
                    </Question>
                  </Questions>
                  <WithGoogle>
                    <GoogleContent>
                      <GoogleIconSC src={GoogleIcon} alt="google icon" />
                      <GoogleText>С помощью Google</GoogleText>
                    </GoogleContent>
                  </WithGoogle>
                </ModalContent>
              </ModalSC>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default SignInForm;
