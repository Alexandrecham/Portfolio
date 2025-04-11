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
    { href: "/", label: "À Propos" },
    { href: "/skills", label: "Compétences" },
    { href: "/projects", label: "Projets" },
    { href: "/bts-sio", label: "BTS SIO" },
    { href: "/veille-technologique", label: "Veille Technologique" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden md:flex justify-center flex-1">
            <ul className="flex space-x-8">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {pathname === href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600"
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
                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
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

