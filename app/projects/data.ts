export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
  mcdFile?: string;
  mcdViewUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Application Météo React",
    description: "Application web météorologique interactive développée avec React, utilisant une API météo pour afficher les prévisions en temps réel.",
    detailedDescription: "Application web météorologique interactive développée avec React, utilisant une API météo pour afficher les prévisions en temps réel. L'application permet aux utilisateurs de rechercher la météo par ville et affiche des informations détaillées comme la température, l'humidité et les prévisions sur plusieurs jours. Fonctionnalités principales :\n\n• Recherche de villes avec autocomplétion\n• Affichage des conditions météorologiques actuelles\n• Prévisions horaires sur 24h\n• Prévisions détaillées sur 7 jours\n• Graphiques d'évolution des températures\n• Mode sombre/clair adaptatif\n• Géolocalisation automatique\n• Sauvegarde des villes favorites",
    technologies: ["React", "HTML", "CSS", "JavaScript", "API REST"],
    image: "/meteo-app.jpg",
    githubLink: "https://github.com/Alexandrecham/meteo-app",
    demoLink: "https://weather-app-two-xi-30.vercel.app"
  },
  {
    title: "Base de Données Twitch",
    description: "Conception et implémentation d'une base de données complexe inspirée de Twitch, comprenant 50 tables relationnelles.",
    detailedDescription: "Conception et implémentation d'une base de données complexe inspirée de Twitch, comprenant 50 tables relationnelles. Le projet modélise l'ensemble de l'écosystème Twitch avec une attention particulière aux performances et à la scalabilité. Architecture détaillée :\n\n• Système de gestion des utilisateurs (streamers, viewers, modérateurs)\n• Gestion des streams et VODs avec métadonnées\n• Système complet de monétisation (bits, subscriptions, donations)\n• Historique des chats et modération\n• Système de récompenses et points de chaîne\n• Analytics et statistiques en temps réel\n• Gestion des raids et hébergements\n• Intégration des extensions et webhooks",
    technologies: ["SQL", "MCD/MLD", "phpMyAdmin"],
    image: "/twtich-db.jpg",
    mcdFile: "/MCD + MLD.loo",
    mcdViewUrl: "/mcd-viewer.html"
  },
  {
    title: "Site de Tournoi E-Sport",
    description: "Plateforme web complète pour l'organisation et la gestion de tournois e-sport.",
    detailedDescription: "Plateforme web complète pour l'organisation et la gestion de tournois e-sport. Cette application full-stack offre une solution clé en main pour les organisateurs de tournois e-sport. Caractéristiques principales :\n\n• Interface d'inscription des équipes avec validation des rosters\n• Générateur automatique de brackets (simple et double élimination)\n• Système de scoring en temps réel avec validation des résultats\n• Panel administrateur complet pour la gestion des tournois\n• Intégration avec Discord pour les notifications\n• Système de streaming intégré avec overlay personnalisable\n• Statistiques détaillées des équipes et joueurs\n• Module de paiement sécurisé pour les inscriptions\n• Communication en temps réel via WebSocket",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
    image: "/esp.jpg",
    githubLink: "https://github.com/Alexandrecham/esport-tournament"
  }
];
