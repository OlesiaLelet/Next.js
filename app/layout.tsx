import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  // title: {
  //   default: 'default blog title',
  //   template: '%s | blog suffixs',
  // },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} untialiased`}>
        <header style={{backgroundColor: 'lightpink', height: 20}}></header>
        {children}
        <footer style={{backgroundColor: 'lightgrey', height: 20}}></footer>
      </body>
    </html>
  );
}
