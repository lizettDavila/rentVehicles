import type { Metadata } from "next";
import TankStackProvider from "@/src/plugins/TankStackProvider";
import { Manrope } from "next/font/google";
import "./globals.css";
import { use } from "react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent Vehicles App",
  description: "A web application for renting vehicles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <TankStackProvider>
          {children}
        </TankStackProvider>
      </body>
    </html>
  );
}
