"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50`}>
        <div className="fixed inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <Navbar />
        <main className="flex-1 pt-20 px-4 max-w-7xl mx-auto w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </main>
        <Footer />
      </body>
    </html>
  )
}