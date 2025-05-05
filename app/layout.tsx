"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 text-[#1E3A8A] min-h-screen flex flex-col`}>
        <div className="fixed inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <Navbar />
        <main className="flex-1 pt-20 px-4 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}