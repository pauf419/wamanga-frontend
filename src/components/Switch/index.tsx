import React from "react";
import { Checkbox, Placeholder, Slider, SwitchWrapper } from "./styled";

interface Props {
  cb: (b: boolean) => void;
  placeholder?: string | null;
  defaultChecked?: boolean;
}

export const Switch = ({
  cb,
  placeholder = null,
  defaultChecked = false,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cb(e.target.checked);
  };

  return (
    <SwitchWrapper>
      <Checkbox
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <Slider />
      <Placeholder>{placeholder && placeholder}</Placeholder>
    </SwitchWrapper>
  );
};
