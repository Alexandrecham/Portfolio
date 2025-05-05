import { 
  Code2, 
  Lock, 
  Network, 
  Server, 
  Workflow, 
  Database, 
  Globe, 
  FileJson, 
  Cpu,
  ShieldCheck,
  Wifi,
  MonitorSmartphone
} from "lucide-react";
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
      {skills.slice(0, 8).map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
      <div className="col-span-2 md:col-span-4">
        <div className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
          {skills.slice(8).map((skill, index) => (
            <SkillCard key={index + 8} {...skill} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default function Skills() {
  const devSkills = [
    { 
      icon: (
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#E44D26] font-bold text-2xl">&lt;/&gt;</div>
          </div>
        </div>
      ),
      name: "HTML/CSS" 
    },
    { 
      icon: (
        <div className="relative bg-[#F7DF1E] rounded-md w-8 h-8 flex items-center justify-center">
          <div className="text-black font-bold text-xl">JS</div>
        </div>
      ),
      name: "JavaScript" 
    },
    { 
      icon: (
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>
      ),
      name: "React" 
    },
    {
      icon: (
        <div className="relative">
          <div className="text-black">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      ),
      name: "Next.js"
    },
    {
      icon: (
        <div className="relative">
          <div className="text-[#007396]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
              <line x1="2" y1="20" x2="2" y2="20" />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#007396] font-bold">J</div>
          </div>
        </div>
      ),
      name: "Java"
    },
    {
      icon: <Database size={32} className="text-[#336791]" />,
      name: "PostgreSQL"
    },
    {
      icon: (
        <div className="relative bg-[#777BB4] rounded-md w-8 h-8 flex items-center justify-center">
          <div className="text-white font-bold text-sm">PHP</div>
        </div>
      ),
      name: "PHP"
    },
    {
      icon: <Database size={32} className="text-[#003545]" />,
      name: "MariaDB"
    },
    {
      icon: (
        <div className="relative bg-[#7952B3] rounded-md w-8 h-8 flex items-center justify-center">
          <div className="text-white font-bold text-sm">B</div>
        </div>
      ),
      name: "Bootstrap"
    },
    {
      icon: (
        <div className="relative bg-[#6C78AF] rounded-md w-8 h-8 flex items-center justify-center">
          <div className="text-white font-bold text-sm">pMA</div>
        </div>
      ),
      name: "phpMyAdmin"
    },
    {
      icon: <FileJson size={32} className="text-[#61AFFE]" />,
      name: "API REST"
    }
  ]

  const networkSkills = [
    { 
      icon: <Network size={32} className="text-blue-500" />, 
      name: "TCP/IP" 
    },
    { 
      icon: <Cpu size={32} className="text-green-500" />, 
      name: "Systèmes" 
    },
    { 
      icon: <ShieldCheck size={32} className="text-red-500" />, 
      name: "Sécurité" 
    },
    { 
      icon: <Wifi size={32} className="text-purple-500" />, 
      name: "Réseaux" 
    },
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
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50"></div>
    </div>
  )
}
