import { Icon, Wrapper, WrapperButton, WrapperContent } from "./styled";
import BadgeDynamicDelete from "../../../assets/icons/svg/badge-dynamic-delete.svg";

interface Props {
  removeCallback: () => void;
  value: string;
}

const BadgeDynamic = ({ removeCallback, value }: Props) => {
  return (
    <Wrapper>
      <WrapperContent>{value}</WrapperContent>
      <WrapperButton>
        <Icon as={BadgeDynamicDelete} onClick={removeCallback} />
      </WrapperButton>
    </Wrapper>
  );
};

export default BadgeDynamic;
