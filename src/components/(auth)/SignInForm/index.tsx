"use client";

import React, { useRef, useState } from "react";
import { Portal } from "@/components/Portal";
import { AnimatePresence, motion } from "motion/react";
import type { ModalState } from "@/components/Header";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Inputs, ModalContent, ModalSC, Title } from "../Form/styled";
import {
  Action,
  ErrorMessage,
  ErrorWrapper,
  GoogleContent,
  GoogleIconSC,
  GoogleText,
  ModalAction,
  Question,
  Questions,
  Text,
  WithGoogle,
} from "./styled";
import GoogleIcon from "@icons/svg/google.svg?url";
import Input from "@/components/Input";
import type { LoginResponse } from "@/api/auth";
import { signIn } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "@/app/store/useStore";
import type { User } from "@/api/types/user";
import { redirect, useRouter } from "next/navigation";
import type { AxiosError } from "axios";

interface Props {
  state: ModalState;
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SignInForm = ({ state, setState }: Props) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const [error, setError] = useState<string | null>(null);

  const { setAuth } = useStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (result: LoginResponse) => {
      router.push("/user");
    },
    onError: (err: AxiosError) => {
      try {
        if (err.response.data.message) setError(err.response.data.message);
      } catch (e) {
        setError("Непредвиденная ошибка входа в аккаунт");
      }
    },
  });

  const onClickOutside = () => {
    setState({ ...state, signIn: false });
  };

  useClickOutside(modalRef, onClickOutside);

  const handleSubmit = () => {
    mutation.mutate({ email: form.email, password: form.password });
  };

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
                    <Input
                      placeholder="Email"
                      type="input"
                      onChange={(e) => setForm({ ...form, email: e })}
                    />
                    <Input
                      placeholder="Пароль"
                      type="password"
                      onChange={(e) => setForm({ ...form, password: e })}
                    />
                  </Inputs>
                  <Questions>
                    {error ? (
                      <ErrorWrapper>
                        <ErrorMessage>{error}</ErrorMessage>
                        <Action
                          onClick={() =>
                            setState({
                              signUp: true,
                              signIn: false,
                              verify: false,
                            })
                          }
                        >
                          Создать аккаунт?
                        </Action>
                      </ErrorWrapper>
                    ) : (
                      <Question>
                        <Text>Нет аккаунта?</Text>
                        <Action
                          onClick={() =>
                            setState({
                              signUp: true,
                              signIn: false,
                              verify: false,
                            })
                          }
                        >
                          Создать аккаунт
                        </Action>
                      </Question>
                    )}
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
                  <ModalAction>
                    <button
                      className="button-transparent"
                      onClick={() =>
                        setState({
                          signIn: false,
                          signUp: false,
                          verify: false,
                        })
                      }
                    >
                      Закрыть
                    </button>
                    <button
                      className="button-filled"
                      onClick={() => handleSubmit()}
                    >
                      {" "}
                      Войти{" "}
                    </button>
                  </ModalAction>
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
