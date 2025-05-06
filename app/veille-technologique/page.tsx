"use client";

import Link from "next/link";
import Image from "next/image";

const TechWatchCard = ({ title, description, link, image }: { title: string; description: string; link: string; image: string }) => (
  <Link href={link} className="group bg-white backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-white">
    <div>
      <div className="relative w-full h-[400px] overflow-hidden bg-white">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </Link>
);

export default function VeilleTechnologique() {
  const topics = [
    {
      title: "L'évolution des avions électriques depuis 2 ans (2023/2024/2025)",
      description: "Analyse des avancées majeures dans le domaine de l'aviation électrique, y compris les technologies de batteries, les systèmes de propulsion et les premiers vols commerciaux. Les progrès dans les batteries à haute densité énergétique et les systèmes hybrides ont permis des innovations significatives ouvrant la voie à une aviation plus durable.",
      link: "/veille-technologique/evolution-ia",
      image: "/aura.jpg"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] py-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white backdrop-blur-sm rounded-lg shadow-md p-6 border-2 border-white">
          <h1 className="text-3xl font-bold text-center mb-4">Veille Technologique</h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Exploration des avancées technologiques majeures dans le domaine de l'aviation électrique 
            au cours des dernières années.
          </p>
        </div>

        <div className="grid gap-8">
          {topics.map((topic, index) => (
            <TechWatchCard key={index} {...topic} />
          ))}
        </div>
      </div>
    </div>
  );
}