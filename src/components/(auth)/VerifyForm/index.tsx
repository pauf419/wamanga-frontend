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
import { resendConfirmation, signUp, verify } from "@/api/auth";
import { useRouter } from "next/navigation";
import type { AxiosError } from "axios";

interface Props {
  state: ModalState;
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const VerifyForm = ({ state, setState }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { setAuth } = useStore();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    code: "",
  });

  const mutation = useMutation({
    mutationFn: verify,
    onSuccess: (result: SignUpResponse) => {
      router.push("/user");
    },
    onError: (err: AxiosError) => {
      try {
        if (err.response.data.message) setError(err.response.data.message);
      } catch (e) {
        setError("Непредвиденная ошибка верификации аккаунта");
      }
    },
  });

  const onClickOutside = () => {
    setState({ ...state, verify: false });
  };

  useClickOutside(modalRef, onClickOutside);

  const resendConfirmation_ = async () => {
    try {
      const email = localStorage.getItem("verify");
      await resendConfirmation(email ? email : "Error");
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = () => {
    const email = localStorage.getItem("verify");
    if (!email || !form.code) {
      setError("Код не введен!");
      return;
    }

    mutation.mutate({ email, code: form.code });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {state.verify && (
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
                  <Title>Подтверждение</Title>
                  <Inputs>
                    <Input
                      type="input"
                      placeholder="Код подтверждения"
                      onChange={(e) => setForm({ code: e })}
                    />
                  </Inputs>
                  <Questions>
                    {error ? (
                      <ErrorWrapper>
                        <ErrorMessage>{error}</ErrorMessage>
                        <Question>
                          <Action onClick={() => resendConfirmation_()}>
                            Отправить код снова?
                          </Action>
                        </Question>
                      </ErrorWrapper>
                    ) : (
                      <Question>
                        <Text>Не пришел код подтверждения ? </Text>
                        <Action onClick={() => resendConfirmation_()}>
                          Отправить снова
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
                      Завершить верификацию
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

export default VerifyForm;
