import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Logo from "./Logo";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "TodoList",
  description: "made by next15",
};

const defaultFont = localFont({
  src: [
    {
      path: "./font/NanumSquareR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/NanumSquareB.ttf",
      weight: "400",
      style: "bold",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
