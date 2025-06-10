"use client";

import React, { useRef, useState } from "react";
import { Portal } from "@/components/Portal";
import { AnimatePresence, motion } from "motion/react";
import type { ModalState } from "@/components/Header";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Inputs, ModalContent, ModalSC } from "../(auth)/Form/styled";

import GoogleIcon from "@icons/svg/google.svg?url";
import Input from "@/components/Input";
import type { LoginResponse } from "@/api/auth";
import { signIn } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "@/app/store/useStore";
import type { User } from "@/api/types/user";
import { redirect, useRouter } from "next/navigation";
import { ButtonsWrapper, Main, ModalSCBlurred, Title, Wrapper } from "./styled";
import Link from "next/link";

interface Props {
  href: string;
}

const AgeConfirmModal = ({ href }: Props) => {
  const [state, setState] = useState<boolean>(
    !localStorage.getItem("isAgeConfirmed")
  );

  const handleClick = () => {
    localStorage.setItem("isAgeConfirmed", "true");
    setState(false);
  };

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
              <ModalSCBlurred>
                <ModalContent
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(0)" }}
                  transition={{ duration: 0.2 }}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <Wrapper>
                    <Title>Подтвердите свой возраст</Title>К сожалению, мы не
                    можем показывать контент с возрастными ограничениями
                    пользователям без аккаунта. Подтвердите свой возраст или
                    войдите в аккаунт
                    <Main>
                      <b>Вам больше 18 лет ?</b>
                    </Main>
                    <ButtonsWrapper>
                      <button className="button-filled" onClick={handleClick}>
                        Да
                      </button>
                      <Link className="button-filled" href={href}>
                        Нет
                      </Link>
                    </ButtonsWrapper>
                  </Wrapper>
                </ModalContent>
              </ModalSCBlurred>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AgeConfirmModal;
