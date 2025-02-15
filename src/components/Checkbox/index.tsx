import React from "react";
import {
  CheckboxInput,
  Placeholder,
  CheckboxWrapper,
  CheckboxIconFilled,
  CheckboxIconUnfilled,
} from "./styled";
import CheckboxUnfilledIcon from "@assets/icons/svg/checkbox-ufilled.svg";
import CheckboxFilledIcon from "@assets/icons/svg/checkbox-filled.svg";

interface Props {
  cb: (b: boolean) => void;
  placeholder?: string | null;
}

export const Checkbox = ({ cb, placeholder = null }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cb(e.target.checked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" onChange={handleChange} />
      <CheckboxIconUnfilled as={CheckboxUnfilledIcon} />
      <CheckboxIconFilled as={CheckboxFilledIcon} />
      <Placeholder>{placeholder && placeholder}</Placeholder>
    </CheckboxWrapper>
  );
};
