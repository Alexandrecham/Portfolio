"use client";

import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
    <div className="relative h-64 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="relative h-56 w-full max-w-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 512px"
          priority
        />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
            <span>Code</span>
          </Link>
        )}
        {project.demoLink && (
          <Link
            href={project.demoLink}
            target="_blank"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <LinkIcon size={20} />
            <span>Demo</span>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Application Météo React",
      description: "Application web météorologique interactive développée avec React, utilisant une API météo pour afficher les prévisions en temps réel. L'application permet aux utilisateurs de rechercher la météo par ville et affiche des informations détaillées comme la température, l'humidité et les prévisions sur plusieurs jours.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "API REST"],
      image: "/meteo-app.jpg",
      githubLink: "https://github.com/Alexandrecham/meteo-app",
      demoLink: "https://meteo-app.example.com"
    },
    {
      title: "Base de Données Twitch",
      description: "Conception et implémentation d'une base de données complexe inspirée de Twitch, comprenant 50 tables relationnelles. Le projet inclut la modélisation complète des relations entre streamers, viewers, subscriptions, bits, et autres fonctionnalités de la plateforme.",
      technologies: ["SQL", "MCD/MLD", "phpMyAdmin"],
      image: "/twtich-db.jpg",
      githubLink: "https://github.com/Alexandrecham/twitch-database"
    },
    {
      title: "Site de Tournoi E-Sport",
      description: "Plateforme web complète pour l'organisation et la gestion de tournois e-sport. Fonctionnalités incluant l'inscription des équipes, la génération automatique des brackets, le suivi des scores en temps réel, et un système de classement dynamique. Interface administrateur pour la gestion des tournois et modération des équipes.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
      image: "/esp.jpg",
      githubLink: "https://github.com/Alexandrecham/esport-tournament"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] py-4 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
        </div>
        <div className="max-w-2xl mx-auto">
          <ProjectCard project={projects[2]} />
        </div>
      </div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50"></div>
    </div>
  );
}