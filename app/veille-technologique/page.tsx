"use client";

import Link from "next/link";
import Image from "next/image";

const TechWatchCard = ({ title, description, link, image }: { title: string; description: string; link: string; image: string }) => (
  <Link href={link} className="bg-white/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div>
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
          style={{ objectPosition: '50% 40%' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

export default function VeilleTechnologique() {
  const topics = [
    {
      title: "L'évolution de l'IA ces 3 dernières années",
      description: "Analyse des avancées majeures en intelligence artificielle, y compris les modèles de langage et les applications pratiques. Les progrès dans les réseaux neuronaux et l'apprentissage profond ont permis des innovations significatives dans divers domaines tels que la reconnaissance vocale, la vision par ordinateur et le traitement du langage naturel. Ces avancées ont également conduit à des applications pratiques dans des secteurs tels que la santé, l'automobile et les services financiers.",
      link: "/veille-technologique/evolution-ia",
      image: "/ai-evolution.jpg"
    },
    {
      title: "La montée en puissance du cloud computing ces 3 dernières années",
      description: "Examen des tendances dans le cloud computing, y compris l'adoption des services cloud et l'impact sur les entreprises. Les entreprises migrent de plus en plus vers des solutions cloud pour bénéficier de la flexibilité, de l'évolutivité et des économies de coûts qu'elles offrent. Le cloud computing permet également une meilleure collaboration et une accessibilité accrue aux données et aux applications, ce qui est essentiel dans le monde du travail à distance.",
      link: "/veille-technologique/cloud-computing",
      image: "/cloud-computing.jpg"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] py-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Veille Technologique</h1>
        <div className="grid gap-4">
          {topics.map((topic, index) => (
            <TechWatchCard key={index} {...topic} />
          ))}
        </div>
      </div>
    </div>
  );
}