"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/skills", label: "Compétences" },
    { href: "/projects", label: "Projets" },
    { href: "/bts-sio", label: "BTS SIO" },
    { href: "/veille-technologique", label: "Veille Technologique" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-200/90 to-purple-200/90 backdrop-blur-md border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Alexandre Chambraud
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-8 ml-8">
              <ul className="flex space-x-8">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`inline-flex items-center px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                        pathname === href
                          ? "bg-white/50 text-[#1E3A8A] shadow-sm"
                          : "text-[#1E3A8A] hover:bg-white/30"
                      }`}
                    >
                      {pathname === href && (
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="px-4 py-2">
              {navItems.map(({ href, label }) => (
                <li key={href} className="py-2">
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                      pathname === href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
