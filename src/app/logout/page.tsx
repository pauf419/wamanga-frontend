import BasePage from "@/components/BasePage";
import { Icon, LogoutPageContent, LogoutPageWrapper, Paragraph, Title } from "./styled";
import Logo from "@icons/svg/logo.svg";

const LogoutPage = async () => {
  return (
    <BasePage>
      <LogoutPageWrapper>
        <LogoutPageContent>
          <Logo />
          <Title>Вы Вышли Из Аккаунта</Title>
          <Paragraph>
            Спасибо, что читаете на WaManga.
          </Paragraph>
        </LogoutPageContent>
      </LogoutPageWrapper>
    </BasePage>
  );
};

export default LogoutPage;
