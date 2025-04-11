"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  source: string;
}

interface CloudComponent {
  name: string;
  description: string;
  examples: string[];
  color: string;
  source: string;
}

interface CloudTrend {
  name: string;
  description: string;
  icon: string;
  color: string;
  iconBg: string;
}

export default function CloudComputing() {
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('iaas');
  const contentRef = useRef<HTMLDivElement>(null);

  // Styles CSS pour la barre de défilement personnalisée
  const customScrollbarStyle = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `;

  const cloudTrends: CloudTrend[] = [
    {
      name: 'Multi-Cloud',
      description: 'L\'approche multi-cloud est devenue une stratégie dominante, permettant aux entreprises de répartir leurs charges de travail entre différents fournisseurs pour optimiser les coûts, améliorer la résilience et éviter l\'enfermement propriétaire. Cette tendance a vu une adoption massive avec plus de 85% des grandes entreprises utilisant désormais plusieurs fournisseurs cloud.',
      icon: 'M',
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100'
    },
    {
      name: 'Edge Computing',
      description: 'Le traitement des données à la périphérie du réseau a connu une croissance exponentielle, réduisant la latence et permettant des applications en temps réel. Cette évolution a été particulièrement importante pour l\'IoT, les véhicules autonomes et les applications industrielles nécessitant des temps de réponse quasi instantanés.',
      icon: 'E',
      color: 'bg-green-500',
      iconBg: 'bg-green-100'
    },
    {
      name: 'Conteneurisation',
      description: 'Les technologies de conteneurs comme Docker et Kubernetes sont devenues le standard de facto pour le déploiement d\'applications cloud-native. Cette approche a révolutionné le développement logiciel en offrant portabilité, efficacité et cohérence entre les environnements de développement et de production.',
      icon: 'C',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100'
    },
    {
      name: 'Serverless Computing',
      description: 'L\'informatique sans serveur a transformé la façon dont les applications sont développées et déployées, permettant aux développeurs de se concentrer uniquement sur le code sans se soucier de l\'infrastructure sous-jacente. Ce modèle "pay-as-you-go" offre une scalabilité automatique et une réduction significative des coûts opérationnels.',
      icon: 'S',
      color: 'bg-orange-500',
      iconBg: 'bg-orange-100'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2022',
      title: 'Démocratisation du Multi-Cloud',
      description: 'Adoption massive des stratégies multi-cloud par les entreprises pour optimiser les coûts et la résilience',
      icon: '☁️',
      iconColor: 'bg-blue-500',
      source: 'Gartner - https://www.gartner.com/en/newsroom/press-releases/2022-cloud-adoption'
    },
    {
      year: '2023',
      title: 'Explosion de l\'Edge Computing',
      description: 'Déploiement à grande échelle des solutions de traitement en périphérie pour les applications IoT et temps réel',
      icon: '📡',
      iconColor: 'bg-green-500',
      source: 'IDC - https://www.idc.com/research/edge-computing-2023'
    },
    {
      year: '2024',
      title: 'Cloud Souverain et FinOps',
      description: 'Montée en puissance des solutions de cloud souverain et adoption des pratiques FinOps pour l\'optimisation des coûts',
      icon: '🔒',
      iconColor: 'bg-purple-500',
      source: 'Forrester - https://www.forrester.com/report/cloud-sovereignty-2024'
    }
  ];

  const cloudArchitecture: Record<string, CloudComponent> = {
    iaas: {
      name: '☁️ Infrastructure as a Service (IaaS)',
      description: 'Services d\'infrastructure virtualisée permettant aux entreprises de construire leur environnement IT sans investissement matériel. L\'IaaS a évolué vers des solutions plus automatisées et optimisées pour différentes charges de travail spécifiques.',
      examples: ['AWS EC2', 'Google Compute Engine', 'Azure Virtual Machines'],
      color: 'bg-blue-500',
      source: 'AWS - https://aws.amazon.com/fr/what-is/iaas/'
    },
    paas: {
      name: '🚀 Platform as a Service (PaaS)',
      description: 'Plateformes de développement et déploiement d\'applications sans gestion de l\'infrastructure sous-jacente. Le PaaS s\'est enrichi de fonctionnalités d\'IA/ML intégrées et d\'outils de développement low-code.',
      examples: ['Heroku', 'Google App Engine', 'Azure App Service'],
      color: 'bg-green-500',
      source: 'Microsoft - https://azure.microsoft.com/fr-fr/overview/what-is-paas/'
    },
    saas: {
      name: '📱 Software as a Service (SaaS)',
      description: 'Applications hébergées et maintenues dans le cloud, accessibles via navigateur. Le marché SaaS a connu une croissance explosive avec une intégration plus poussée entre les différentes solutions.',
      examples: ['Microsoft 365', 'Salesforce', 'Google Workspace'],
      color: 'bg-purple-500',
      source: 'Salesforce - https://www.salesforce.com/fr/saas/'
    },
    serverless: {
      name: '⚡ Serverless Computing',
      description: 'Modèle d\'exécution où le fournisseur cloud gère dynamiquement l\'allocation des ressources. Cette approche a gagné en maturité avec des capacités étendues et une meilleure intégration avec les architectures traditionnelles.',
      examples: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions'],
      color: 'bg-orange-500',
      source: 'AWS - https://aws.amazon.com/fr/lambda/serverless-architectures-learn-more/'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Style pour la barre de défilement personnalisée */}
      <style jsx>{customScrollbarStyle}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={contentRef}>
        <div className="mb-6">
          <Link href="/veille-technologique" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à la veille technologique
          </Link>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">☁️ L'évolution du Cloud Computing</h1>
              <p className="text-gray-600">Exploration des tendances majeures et des architectures modernes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed">
            Le cloud computing a connu une transformation majeure ces trois dernières années, passant d'une technologie émergente à un pilier fondamental de la transformation numérique. Cette page présente les tendances majeures, les événements clés et les architectures qui ont façonné ce domaine en pleine expansion.
          </p>
        </div>
        
        {/* Schéma: Tendances majeures du Cloud avec hexagones interactifs */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Tendances Majeures du Cloud Computing</h2>
          
          <div className="relative w-full max-w-4xl mx-auto h-[600px]">
            {/* Cercle central */}
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors z-10"
              onClick={() => setSelectedTrend(null)}
            >
              <span className="text-white text-xl font-bold">Cloud</span>
            </div>

            {/* Tendances disposées en cercle */}
            {cloudTrends.map((trend, index) => {
              const angle = (index * 2 * Math.PI) / cloudTrends.length;
              const radius = 220; // Augmenté de 180 à 220 pour plus d'espacement
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={trend.name}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-64 transition-all duration-300 ${
                    selectedTrend === trend.name ? 'scale-110 z-20' : 'scale-100 z-0'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onClick={() => setSelectedTrend(selectedTrend === trend.name ? null : trend.name)}
                >
                  <div 
                    className={`p-4 rounded-xl shadow-lg ${
                      selectedTrend === trend.name ? 'bg-blue-600' : 'bg-white'
                    } cursor-pointer transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 ${trend.iconBg} rounded-full flex items-center justify-center mb-3`}>
                        <span className="text-2xl">{trend.icon}</span>
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${
                        selectedTrend === trend.name ? 'text-white' : 'text-gray-900'
                      }`}>{trend.name}</h3>
                      
                      {selectedTrend === trend.name && (
                        <div className="pt-2">
                          <p className="text-white text-sm overflow-y-auto max-h-[200px] pr-2 custom-scrollbar leading-relaxed">{trend.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Le cloud computing a connu une évolution remarquable ces trois dernières années, avec l'émergence de nouvelles approches comme le multi-cloud, l'edge computing, la conteneurisation et le serverless. Ces tendances ont transformé la façon dont les entreprises conçoivent, déploient et gèrent leurs infrastructures informatiques.
            </p>
          </div>
        </section>
        
        {/* Timeline des événements clés */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Chronologie des Événements Clés</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-16 h-16 ${event.iconColor} rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {event.icon}
                  </div>
                </div>
                
                <div className={`pt-10 pb-6 px-6 bg-white rounded-lg shadow-md border-t-4 ${event.iconColor} h-full flex flex-col`}>
                  <div className="text-center mb-4">
                    <div className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 flex-grow mb-4">{event.description}</p>
                  
                  <div className="text-xs text-gray-500 mt-auto">
                    Source: {event.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center w-full max-w-2xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold">{event.year}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Architectures Cloud */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Architectures Cloud Modernes</h2>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(cloudArchitecture).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === key
                      ? cloudArchitecture[key].color + ' text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {cloudArchitecture[key].name}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="p-4 md:p-6">
                {activeTab === 'iaas' && (
                  <div className="relative w-full bg-blue-50 rounded-xl p-6 min-h-[400px]">
                    <h3 className="text-xl font-semibold text-center mb-8">Infrastructure as a Service (IaaS)</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-blue-600 mb-2">Infrastructure</h4>
                          <p className="text-center text-gray-600 mb-3">Serveurs, stockage, réseau</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-blue-600 mb-2">Virtualisation</h4>
                          <p className="text-center text-gray-600 mb-3">Machines virtuelles, conteneurs</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2m0-10v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4m0 10v-4a2 2 0 002-2h12a2 2 0 002 2v4m-11 0h2m-6-9v-2m0 0l2-2m-2 2l2 2m7-10H5" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-blue-600 mb-2">Sécurité</h4>
                          <p className="text-center text-gray-600 mb-3">Pare-feu, accès, chiffrement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'paas' && (
                  <div className="relative w-full bg-green-50 rounded-xl p-6 min-h-[400px]">
                    <h3 className="text-xl font-semibold text-center mb-8">Platform as a Service (PaaS)</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-green-600 mb-2">Environnement de développement</h4>
                          <p className="text-center text-gray-600 mb-3">Frameworks, langages, outils</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-green-600 mb-2">Services intégrés</h4>
                          <p className="text-center text-gray-600 mb-3">Base de données, cache, messagerie</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-400 max-w-md">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-4-4V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-green-600 mb-2">Déploiement automatisé</h4>
                          <p className="text-center text-gray-600 mb-3">CI/CD, scaling, monitoring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'saas' && (
                  <div className="relative w-full bg-purple-50 rounded-xl p-6 min-h-[400px]">
                    <h3 className="text-xl font-semibold text-center mb-8">Software as a Service (SaaS)</h3>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-400 max-w-md">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-purple-600 mb-2">Applications Web</h4>
                          <p className="text-center text-gray-600 mb-3">Accessibles via navigateur</p>
                          <div className="flex flex-wrap justify-center gap-2 mt-4">
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Email</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">CRM</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Bureautique</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Collaboration</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-purple-600">Avantages SaaS</h4>
                          <ul className="text-sm text-gray-600 mt-2 space-y-1">
                            <li>• Pas d'installation</li>
                            <li>• Mises à jour automatiques</li>
                            <li>• Accessibilité universelle</li>
                            <li>• Paiement à l'usage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'serverless' && (
                  <div className="relative w-full bg-orange-50 rounded-xl p-6 min-h-[500px]">
                    <h3 className="text-xl font-semibold text-center mb-8">Cycle de l'architecture Serverless</h3>
                    
                    {/* Schéma principal simplifié */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                      {/* Boîte Développeur */}
                      <div className="w-64 bg-white rounded-xl shadow-md p-4 border-2 border-orange-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-bold text-orange-600 mb-2">Développeur</h4>
                          <p className="text-center text-gray-600 mb-3">Écrit des fonctions</p>
                        </div>
                      </div>
                      
                      {/* Flèches et interactions */}
                      <div className="flex flex-col gap-6 w-full max-w-sm">
                        {/* Étapes numérotées */}
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">1</div>
                            <div className="ml-1 text-xs text-gray-700">Déploiement</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">2</div>
                            <div className="ml-1 text-xs text-gray-700">Événement</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">3</div>
                            <div className="ml-1 text-xs text-gray-700">Exécution</div>
                          </div>
                        </div>
                        
                        {/* Déploiement: Développeur → Fournisseur */}
                        <div className="flex items-center">
                          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium shadow-sm">
                            Code
                          </div>
                          <div className="h-2 w-full bg-indigo-500 ml-2 relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-indigo-500"></div>
                          </div>
                        </div>
                        
                        {/* Événement: Client → Fournisseur */}
                        <div className="flex items-center flex-row-reverse">
                          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium shadow-sm">
                            Déclencheur
                          </div>
                          <div className="h-2 w-full bg-indigo-500 mr-2 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-indigo-500"></div>
                          </div>
                        </div>
                        
                        {/* Facturation: Fournisseur → Développeur */}
                        <div className="flex items-center flex-row-reverse">
                          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium shadow-sm">
                            Paiement à l'usage
                          </div>
                          <div className="h-2 w-full bg-red-500 mr-2 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-red-500"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Boîte Fournisseur Cloud */}
                      <div className="w-64 bg-white rounded-xl shadow-md p-4 border-2 border-blue-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-bold text-blue-600 mb-2">Fournisseur</h4>
                          <p className="text-center text-gray-600 mb-3">Gère l'infrastructure</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Explication */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
                      <p className="text-center text-gray-700 mb-2">
                        Le développeur déploie du code qui s'exécute uniquement en réponse à des événements
                      </p>
                      <p className="text-center text-sm text-gray-500">
                        La facturation est basée sur le temps d'exécution réel, sans coût quand le code n'est pas utilisé
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{cloudArchitecture[activeTab].description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Exemples concrets:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {cloudArchitecture[activeTab].examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Défis et Opportunités */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Défis et Opportunités</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Défis Actuels</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Sécurité et conformité</span>
                    <p className="text-sm text-gray-700">Protection des données et respect des réglementations comme le RGPD</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Coûts imprévisibles</span>
                    <p className="text-sm text-gray-700">Difficulté à prévoir et contrôler les dépenses cloud</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Complexité multi-cloud</span>
                    <p className="text-sm text-gray-700">Gestion des environnements hétérogènes</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Opportunités Émergentes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">FinOps</span>
                    <p className="text-sm text-gray-700">Optimisation financière des opérations cloud</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Cloud souverain</span>
                    <p className="text-sm text-gray-700">Solutions respectant la souveraineté des données</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Green Cloud</span>
                    <p className="text-sm text-gray-700">Infrastructures cloud éco-responsables</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Conclusion */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Conclusion</h2>
          
          <div className="prose prose-blue max-w-none">
            <p>
              L'avenir du cloud computing sera marqué par une intégration encore plus poussée avec l'intelligence artificielle, l'automatisation complète des infrastructures et une adoption généralisée des approches "cloud-native". Les entreprises qui sauront tirer parti de ces évolutions gagneront en agilité et en capacité d'innovation.
            </p>
            <p>
              Les prochaines années verront également l'émergence de solutions cloud spécialisées par secteur d'activité, offrant des fonctionnalités et des garanties adaptées aux besoins spécifiques de chaque industrie, ainsi qu'une attention croissante à l'impact environnemental des infrastructures cloud.
            </p>
          </div>
        </section>
        
        {/* Sources */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Sources</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tendances Majeures du Cloud Computing</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Multi-Cloud :</span> Gartner, "Cloud Strategy Leadership Report", 2023 - <a href="https://www.gartner.com/en/newsroom/press-releases/2022-cloud-adoption" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.gartner.com/en/newsroom/press-releases/2022-cloud-adoption</a></li>
                <li><span className="font-medium">Edge Computing :</span> IDC, "Worldwide Edge Spending Guide", 2022-2024 - <a href="https://www.idc.com/research/edge-computing-2023" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.idc.com/research/edge-computing-2023</a></li>
                <li><span className="font-medium">Conteneurisation :</span> CNCF, "Cloud Native Survey", 2023</li>
                <li><span className="font-medium">Serverless Computing :</span> AWS, "Serverless Architectures Whitepaper", 2024</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Chronologie des Événements Clés</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Démocratisation du Multi-Cloud (2022) :</span> Gartner - <a href="https://www.gartner.com/en/newsroom/press-releases/2022-cloud-adoption" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.gartner.com/en/newsroom/press-releases/2022-cloud-adoption</a></li>
                <li><span className="font-medium">Explosion de l'Edge Computing (2023) :</span> IDC - <a href="https://www.idc.com/research/edge-computing-2023" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.idc.com/research/edge-computing-2023</a></li>
                <li><span className="font-medium">Cloud Souverain et FinOps (2024) :</span> Forrester - <a href="https://www.forrester.com/report/cloud-sovereignty-2024" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.forrester.com/report/cloud-sovereignty-2024</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Architectures Cloud</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Infrastructure as a Service (IaaS) :</span> AWS - <a href="https://aws.amazon.com/fr/what-is/iaas/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/fr/what-is/iaas/</a></li>
                <li><span className="font-medium">Platform as a Service (PaaS) :</span> Microsoft - <a href="https://azure.microsoft.com/fr-fr/overview/what-is-paas/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://azure.microsoft.com/fr-fr/overview/what-is-paas/</a></li>
                <li><span className="font-medium">Software as a Service (SaaS) :</span> Salesforce - <a href="https://www.salesforce.com/fr/saas/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.salesforce.com/fr/saas/</a></li>
                <li><span className="font-medium">Serverless Computing :</span> AWS - <a href="https://aws.amazon.com/fr/lambda/serverless-architectures-learn-more/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/fr/lambda/serverless-architectures-learn-more/</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Défis et Opportunités</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Sécurité et Coûts :</span> Flexera, "State of the Cloud Report", 2024</li>
                <li><span className="font-medium">Optimisation FinOps :</span> McKinsey, "Cloud's trillion-dollar prize is up for grabs", 2023</li>
                <li><span className="font-medium">Green Cloud :</span> Accenture, "Green Cloud: The Path to Sustainable Cloud Computing", 2023</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}