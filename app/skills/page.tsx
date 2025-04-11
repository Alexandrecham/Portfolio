import { Code2, Lock, Network, Server, Workflow } from "lucide-react";
import type React from "react";

const SkillCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-center h-12 w-12 mb-3">
      {icon}
    </div>
    <h3 className="text-base font-medium text-gray-900">{name}</h3>
  </div>
)

const SkillSection = ({
  title,
  icon,
  skills,
}: {
  title: string
  icon: React.ReactNode
  skills: { icon: React.ReactNode; name: string }[]
}) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-blue-500 text-white">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </div>
)

export default function Skills() {
  const devSkills = [
    { 
      icon: <Code2 size={32} className="text-[#E44D26]" />,
      name: "HTML/CSS" 
    },
    { 
      icon: <Code2 size={32} className="text-[#F7DF1E]" />,
      name: "JavaScript" 
    },
    { 
      icon: <Code2 size={32} className="text-[#61DAFB]" />,
      name: "React" 
    },
    {
      icon: <Code2 size={32} className="text-black" />,
      name: "Next.js"
    },
    {
      icon: <Code2 size={32} className="text-[#007396]" />,
      name: "Java"
    },
    {
      icon: <Code2 size={32} className="text-[#336791]" />,
      name: "PostgreSQL"
    },
    {
      icon: <Code2 size={32} className="text-[#777BB4]" />,
      name: "PHP"
    },
    {
      icon: <Code2 size={32} className="text-[#003545]" />,
      name: "MariaDB"
    }
  ]

  const networkSkills = [
    { icon: <Network size={32} className="text-blue-500" />, name: "TCP/IP" },
    { icon: <Server size={32} className="text-green-500" />, name: "Systèmes" },
    { icon: <Lock size={32} className="text-red-500" />, name: "Sécurité" },
    { icon: <Workflow size={32} className="text-purple-500" />, name: "Réseaux" },
  ]

  return (
    <div className="min-h-[calc(100vh-12rem)] py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Mes Compétences</h1>
        <div className="space-y-10">
          <SkillSection 
            title="Développement" 
            icon={<Code2 size={20} />} 
            skills={devSkills} 
          />
          <SkillSection 
            title="Systèmes & Réseaux" 
            icon={<Server size={20} />} 
            skills={networkSkills} 
          />
        </div>
      </div>
    </div>
  )
}

