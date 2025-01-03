import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import SideBarComponent from "@/components/SideBarComponent"; // Adjust the path if needed
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <SideBarComponent />
          <div className="flex flex-col flex-grow">
            <NavbarComponent />
            <main className="flex-grow p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
