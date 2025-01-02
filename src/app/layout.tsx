import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import Logo from "../components/header/Logo";
import localFont from "next/font/local";
import { TodoListStoreProvider } from "@/providers/store-provider";

export const metadata: Metadata = {
  title: "TodoList",
  description: "made by next15",
};

const defaultFont = localFont({
  src: [
    {
      path: "./NanumSquareR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumSquareB.ttf",
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
    <TodoListStoreProvider>
      <html lang="en">
        <body className={defaultFont.className}>
          <header>
            <Logo />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </TodoListStoreProvider>
  );
}
