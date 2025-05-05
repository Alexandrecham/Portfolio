import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-200/90 to-purple-200/90 backdrop-blur-md border-t border-blue-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#1E3A8A]">
            &copy; {new Date().getFullYear()} Alexandre Chambraud
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Alexandrecham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:text-[#2563EB] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://ch.linkedin.com/in/alexandre-chambraud-46697a2b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:text-[#2563EB] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:al.chambraud@gmail.com"
              className="text-[#3B82F6] hover:text-[#2563EB] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}