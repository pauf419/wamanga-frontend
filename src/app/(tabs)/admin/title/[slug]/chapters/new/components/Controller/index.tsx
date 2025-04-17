"use client";

import { Checkbox } from "@/components/Checkbox";
import { Controller, NumberButton, NumberButtonInput } from "../../styled";
import { useState } from "react";

interface Props {
  onCreate: (amount: number) => void;
  onChecked: (value: boolean) => void;
  onUpload: () => void;
}

export const ControllerComponent = ({
  onCreate,
  onChecked,
  onUpload,
}: Props) => {
  const [numForms, setNumForms] = useState<number>(10);

  return (
    <Controller>
      <button className="button-filled" onClick={() => onCreate(1)}>
        Добавить форму
      </button>
      <NumberButton>
        <button className="button-filled" onClick={() => onCreate(numForms)}>
          Добавить форм:
        </button>
        <NumberButtonInput
          type="number"
          value={numForms}
          onChange={(e) => setNumForms(Number(e.target.value))}
        />
      </NumberButton>
      <button className="button-filled" onClick={() => onUpload()}>
        Начать загрузку
      </button>
      <Checkbox
        cb={onChecked}
        placeholder="Отключить уведомление о создании главы"
      />
    </Controller>
  );
};

export default ControllerComponent;
