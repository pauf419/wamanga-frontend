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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(102485920, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/102485920"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
