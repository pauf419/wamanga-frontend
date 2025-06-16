import "@app/globals.css";
import "@assets/fonts/fonts.css";
import { LayoutSC } from "./layout.styled";
import { headers } from "next/headers";
import Script from "next/script";

import Providers from "./Providers";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="yandex-verification" content="176b7f43df025f2e" />
        <link
          href="https://cdn.adfinity.pro/code/css/adfinity.css"
          rel="stylesheet"
        ></link>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GCBZHB4YVB"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GCBZHB4YVB');
          `}
        </Script>
      </head>
      <body>
        <script
          src="https://cdn.adfinity.pro/code/5450/adfinity.js"
          async
        ></script>
        <script
          src="https://analytics.night-watchers.com/api/script.js"
          data-site-id="3"
          defer
        ></script>
        <Providers>
          <LayoutSC>
            <Sidebar />
            {children}
          </LayoutSC>
        </Providers>
      </body>
    </html>
  );
}
