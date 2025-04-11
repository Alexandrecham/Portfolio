"use client"


import { BookOpen, Code, Github, Home, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Alexandre Chambraud</h1>
        <div className="flex gap-4 mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Github size={20} />
          </a>
        </div>
        <nav className="space-y-1">
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
            <Home size={20} />
            Accueil
          </Link>
          <Link href="/skills" className={`nav-link ${pathname === "/skills" ? "active" : ""}`}>
            <Code size={20} />
            Compétences
          </Link>
          <Link href="/projects" className={`nav-link ${pathname === "/projects" ? "active" : ""}`}>
            <BookOpen size={20} />
            Projets
          </Link>
          <Link href="/bts-sio" className={`nav-link ${pathname === "/bts-sio" ? "active" : ""}`}>
            <User size={20} />
            BTS SIO
          </Link>
          <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
            <Mail size={20} />
            Contact
          </Link>
        </nav>
      </div>
    </aside>
  )
}

