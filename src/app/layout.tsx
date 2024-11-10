import type { Metadata } from "next";
import "@app/globals.css";
import "@assets/fonts/fonts.css";
import { LayoutSC } from "./layout.styled";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "WaManga",
  description: "WaManga's description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutSC>
          <SideBar />
          {children}
        </LayoutSC>
      </body>
    </html>
  );
}
