import { getSettings } from "@/api/settings";
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
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: `${settings.title} - 404`,
    description: settings.longTitle,
    metadataBase: new URL(settings.metadataBase),
    creator: settings.creator,
    publisher: settings.publisher,
    icons: {
      icon: settings.logo,
      shortcut: settings.logo,
      apple: settings.logo,
    },
    openGraph: {
      title: `${settings.title} - 404`,
      description: settings.longTitle,
      siteName: `${settings.title} - 404`,
      images: [
        {
          url: settings.logo,
          width: 1200,
          height: 630,
          alt: settings.title,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `${settings.metadataBase}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

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
