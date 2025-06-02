import "@app/globals.css";
import "@assets/fonts/fonts.css";
import { LayoutSC } from "./layout.styled";
import { headers } from "next/headers";

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
        <link
          href="https://cdn.adfinity.pro/code/css/adfinity.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <script
          src="https://cdn.adfinity.pro/code/5450/adfinity.js"
          async
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
