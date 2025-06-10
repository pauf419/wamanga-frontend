import {
  Description,
  Image,
  MessageWrapper,
  NotFoundWrapper,
  OkakButton,
  OkakWrapper,
  Segment,
  ShadowTitle,
  Title,
} from "./not-found.styled";

export default function OkakPage() {
  const rand = Math.floor(Math.random() * 2 + 1);

  return (
    <NotFoundWrapper>
      <MessageWrapper>
        <Segment>
          <Title>Страница не работает</Title>
          <Description>
            Пока не знаем в чём проблема, но мы скоро это пофиксим!
          </Description>
        </Segment>
        <ShadowTitle>404</ShadowTitle>
        <OkakButton href="/" className="outline-button button-filled ">
          Окак, на главную
        </OkakButton>
      </MessageWrapper>
      <OkakWrapper>
        <Image src="/okak.png" />
      </OkakWrapper>
    </NotFoundWrapper>
  );
}
