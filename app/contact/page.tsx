"use client"

import { Mail, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message envoyé! (Simulation)")
    setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-[calc(100vh-12rem)] py-4">
      <div className="w-[90%] max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
          <Mail className="text-blue-500" size={24} />
          Me Contacter
        </h1>
        
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sujet de votre message"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Votre message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

