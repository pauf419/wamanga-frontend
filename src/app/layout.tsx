import type { Metadata } from "next";
import "@app/globals.css";
import "@assets/fonts/fonts.css";
import { LayoutSC } from "./layout.styled";
import Sidebar from "@/components/Sidebar";

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
          <Sidebar />
          {children}
        </LayoutSC>
      </body>
    </html>
  );
}
