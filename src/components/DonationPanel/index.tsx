"use client";
import { useState } from "react";
import {
  Header,
  Image,
  Title,
  Wrapper,
  Body,
  PanelWrapper,
  Count,
  Icon,
  Counter,
  CounterControlls,
  ControllBtn,
  CounterIcon,
  ThxButton,
  Footer,
  Link,
  Description,
} from "./styled";
import PawIcon from "@icons/svg/paw.svg";
import CounterArrowTopIcon from "@icons/svg/counter-arrow-top.svg";
import CounterArrowBottomIcon from "@icons/svg/counter-arrow-bottom.svg";

interface Props {
  cb: (_: number) => void;
  nested?: boolean;
}

export const DonationPanel = ({ cb, nested = false }: Props) => {
  const [count, setCount] = useState<number>(1);

  const handleSubtraction = () => {
    if (count !== 1) setCount((prev) => prev - 1);
  };

  return (
    <Wrapper $nested={nested}>
      <Header>
        <Title>Спасибо команде</Title>
        <Image src="/no-comments.png" />
      </Header>
      <Body>
        <PanelWrapper>
          <Count>
            <Icon as={PawIcon} />
            <Counter>{count}</Counter>
          </Count>

          <ThxButton>Спасибо</ThxButton>
        </PanelWrapper>
      </Body>
    </Wrapper>
  );
};
