import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Logo from "./Logo";
export const metadata: Metadata = {
  title: "TodoList",
  description: "made by next15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
