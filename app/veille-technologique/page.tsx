"use client";

import Link from "next/link";
import Image from "next/image";

const TechWatchCard = ({ title, description, link, image }: { title: string; description: string; link: string; image: string }) => (
  <Link href={link} className="group bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
    <div>
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      title: "L'évolution de l'IA ces 3 dernières années",
      description: "Analyse des avancées majeures en intelligence artificielle, y compris les modèles de langage et les applications pratiques. Les progrès dans les réseaux neuronaux et l'apprentissage profond ont permis des innovations significatives dans divers domaines tels que la reconnaissance vocale, la vision par ordinateur et le traitement du langage naturel.",
      link: "/veille-technologique/evolution-ia",
      image: "/ai-evolution.jpg"
    },
    {
      title: "La montée en puissance du cloud computing ces 3 dernières années",
      description: "Examen des tendances dans le cloud computing, y compris l'adoption des services cloud et l'impact sur les entreprises. Les entreprises migrent de plus en plus vers des solutions cloud pour bénéficier de la flexibilité, de l'évolutivité et des économies de coûts qu'elles offrent.",
      link: "/veille-technologique/cloud-computing",
      image: "/cloud-computing.jpg"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-center mb-4">Veille Technologique</h1>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Exploration des avancées technologiques majeures dans les domaines de l'intelligence artificielle 
            et du cloud computing au cours des trois dernières années.
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