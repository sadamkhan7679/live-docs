import React from "react";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import {Metadata} from "next";


export const metadata:Metadata = {
    title: "LiveDocs",
    description: "Your go to place for all your documentation needs",
}


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head />
      <body
          className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
          )}
      >
      {children}
      </body>
      </html>
  )
}
