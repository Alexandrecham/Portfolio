"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { projects } from "./data";

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  githubLink?: string;
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Fermer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="relative h-96 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
            <div className="relative h-80 w-full max-w-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-6 text-lg whitespace-pre-line">{project.detailedDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.githubLink && (
              <div className="flex">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Voir sur GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <button onClick={onClick} className="w-full text-left transition-transform hover:scale-[1.02]">
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
      </div>
    </div>
  </button>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-[calc(100vh-12rem)] py-4 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <ProjectCard
            project={projects[2]}
            onClick={() => setSelectedProject(projects[2])}
          />
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50"></div>
    </div>
  );
}