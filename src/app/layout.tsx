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
      <body>
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
