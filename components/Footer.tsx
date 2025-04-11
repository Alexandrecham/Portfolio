import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 border-t bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm text-gray-600">
          © 2024 Alexandre Chambraud
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Alexandrecham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
          </a>
          <a
            href="https://ch.linkedin.com/in/alexandre-chambraud-46697a2b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:al.chambraud@gmail.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}