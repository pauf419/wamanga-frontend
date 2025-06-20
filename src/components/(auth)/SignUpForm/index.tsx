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
  ModalAction,
  Question,
  Questions,
  Text,
} from "../SignInForm/styled";
import Input from "@/components/Input";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "@/app/store/useStore";
import type { SignUpResponse } from "@/api/auth";
import { signUp } from "@/api/auth";
import type { AxiosError } from "axios";

interface Props {
  state: ModalState;
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SignUpForm = ({ state, setState }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { setAuth } = useStore();

  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (result: SignUpResponse) => {
      localStorage.setItem("verify", form.email);
      setState({ signUp: false, signIn: false, verify: true });
    },
    onError: (err: AxiosError<any>) => {
      try {
        if (err.response && err.response.data && err.response.data.message)
          setError(err.response.data.message);
      } catch (e) {
        setError("Непредвиденная ошибка регистрации");
      }
    },
  });

  const onClickOutside = () => {
    setState({ ...state, signUp: false });
  };

  useClickOutside(modalRef, onClickOutside);

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    mutation.mutate({ email: form.email, password: form.password });
  };

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
                    <Input
                      type="input"
                      placeholder="Email"
                      onChange={(e) => setForm({ ...form, email: e })}
                    />
                    <Input
                      placeholder="Пароль"
                      type="password"
                      onChange={(e) => setForm({ ...form, password: e })}
                    />
                    <Input
                      placeholder="Повторите пароль"
                      type="password"
                      onChange={(e) => setForm({ ...form, confirmPassword: e })}
                    />
                  </Inputs>
                  <Questions>
                    {error ? (
                      <ErrorWrapper>
                        <ErrorMessage>{error}</ErrorMessage>
                        <Question>
                          <Action
                            onClick={() =>
                              setState({
                                signUp: false,
                                signIn: true,
                                verify: false,
                              })
                            }
                          >
                            Войти в аккаунт?
                          </Action>
                        </Question>
                      </ErrorWrapper>
                    ) : (
                      <Question>
                        <Text>Уже есть аккаунт?</Text>
                        <Action
                          onClick={() =>
                            setState({
                              signUp: false,
                              signIn: true,
                              verify: false,
                            })
                          }
                        >
                          Войти
                        </Action>
                      </Question>
                    )}
                  </Questions>
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
                      Cоздать аккаунт{" "}
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

export default SignUpForm;
