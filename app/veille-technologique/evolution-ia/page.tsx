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

interface AIComponent {
  name: string;
  description: string;
  examples: string[];
  color: string;
  source: string;
}

interface AITrend {
  name: string;
  description: string;
  icon: string;
  color: string;
  iconBg: string;
}

export default function EvolutionIA() {
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('neural');
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

  const aiTrends: AITrend[] = [
    {
      name: 'Traitement du Langage Naturel',
      description: 'Les modèles de langage comme GPT-4 ont révolutionné notre capacité à comprendre et générer du texte humain. Ces avancées ont permis le développement d\'assistants virtuels plus intelligents, de systèmes de traduction automatique plus précis et d\'outils d\'analyse de texte plus sophistiqués.',
      icon: 'T',
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100'
    },
    {
      name: 'Vision par Ordinateur',
      description: 'Les réseaux de neurones convolutifs ont permis des avancées significatives dans la reconnaissance d\'images et de vidéos. Ces technologies sont maintenant utilisées dans la reconnaissance faciale, la détection d\'objets, la conduite autonome et le diagnostic médical.',
      icon: 'V',
      color: 'bg-green-500',
      iconBg: 'bg-green-100'
    },
    {
      name: 'IA Générative',
      description: 'Les modèles génératifs comme DALL-E, Midjourney et Stable Diffusion peuvent créer des images, de la musique et d\'autres contenus créatifs à partir de descriptions textuelles, ouvrant de nouvelles possibilités dans les domaines artistiques et créatifs.',
      icon: 'G',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100'
    },
    {
      name: 'IA Embarquée',
      description: 'La miniaturisation des modèles d\'IA permet désormais d\'exécuter des algorithmes complexes directement sur des appareils mobiles et IoT, sans nécessiter de connexion cloud, améliorant ainsi la confidentialité et réduisant la latence.',
      icon: 'E',
      color: 'bg-orange-500',
      iconBg: 'bg-orange-100'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2022',
      title: 'ChatGPT et l\'ère des LLMs',
      description: 'Démocratisation des modèles de langage et explosion des applications IA conversationnelles',
      icon: '💬',
      iconColor: 'bg-blue-500',
      source: 'OpenAI - https://openai.com/blog/chatgpt'
    },
    {
      year: '2023',
      title: 'IA Générative et Multimodale',
      description: 'Émergence des modèles capables de générer et comprendre texte, images, et audio',
      icon: '🎨',
      iconColor: 'bg-purple-500',
      source: 'OpenAI & Midjourney - https://openai.com/dall-e-3'
    },
    {
      year: '2024',
      title: 'IA Embarquée et Edge Computing',
      description: 'Développement des solutions IA optimisées pour les appareils mobiles et IoT',
      icon: '📱',
      iconColor: 'bg-orange-500',
      source: 'TensorFlow Lite - https://www.tensorflow.org/lite'
    }
  ];

  const aiArchitecture: Record<string, AIComponent> = {
    neural: {
      name: '🧠 Réseaux de Neurones',
      description: 'Système inspiré du fonctionnement du cerveau humain. Comme notre cerveau qui apprend par l\'expérience, ces réseaux informatiques apprennent à reconnaître des motifs dans les données (images, textes, sons) après avoir été entraînés sur de nombreux exemples.',
      examples: ['Reconnaissance d\'images (visages, objets)', 'Traduction automatique', 'Assistants vocaux'],
      color: 'bg-blue-500',
      source: 'Deep Learning - Ian Goodfellow, Yoshua Bengio, et Aaron Courville (MIT Press)'
    },
    deep: {
      name: '🔍 Apprentissage Profond',
      description: 'Version avancée des réseaux de neurones avec plusieurs niveaux d\'analyse. Comparable à la façon dont nous comprenons les choses en plusieurs étapes, cette approche permet à l\'ordinateur d\'analyser les informations en couches successives, des détails simples aux concepts complexes.',
      examples: ['ChatGPT pour les conversations', 'DALL-E pour créer des images', 'Reconnaissance vocale avancée'],
      color: 'bg-green-500',
      source: 'Nature - https://www.nature.com/articles/nature14539'
    },
    reinforcement: {
      name: '🎮 Apprentissage par Récompense',
      description: 'Méthode où l\'IA apprend par essais et erreurs, comme un enfant qui apprend à marcher. Le système reçoit des récompenses quand il fait les bons choix et des pénalités quand il se trompe, ce qui l\'aide à s\'améliorer progressivement pour atteindre un objectif.',
      examples: ['Jeux vidéo et jeux de plateau (échecs, go)', 'Robots qui apprennent des mouvements', 'Systèmes de recommandation'],
      color: 'bg-purple-500',
      source: 'DeepMind - https://deepmind.com/research/case-studies/alphago-the-story-so-far'
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🤖 Évolution de l'Intelligence Artificielle</h1>
              <p className="text-gray-600">Exploration des avancées majeures et des tendances futures</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed">
            L'intelligence artificielle (IA) a connu une évolution remarquable depuis ses débuts théoriques dans les années 1950. Cette page présente les tendances majeures, les événements clés et les architectures qui ont façonné ce domaine révolutionnaire.
          </p>
        </div>
        
        {/* Schéma: Tendances majeures de l'IA avec hexagones interactifs */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Tendances Majeures de l'IA</h2>
          
          <div className="relative w-full max-w-4xl mx-auto h-[600px]">
            {/* Cercle central */}
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors z-10"
              onClick={() => setSelectedTrend(null)}
            >
              <span className="text-white text-xl font-bold">IA</span>
            </div>

            {/* Tendances disposées en cercle */}
            {aiTrends.map((trend, index) => {
              const angle = (index * 2 * Math.PI) / aiTrends.length;
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
              L'intelligence artificielle a connu une évolution fulgurante ces dernières années, transformant de nombreux secteurs d'activité. Les avancées dans les algorithmes d'apprentissage, la puissance de calcul et la disponibilité des données ont permis des progrès significatifs dans quatre domaines clés: le traitement du langage naturel, la vision par ordinateur, l'IA générative et l'IA embarquée.
            </p>
          </div>
        </section>
        
        {/* Chronologie des avancées majeures */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Chronologie des avancées majeures</h2>
          
          <div className="relative bg-blue-50 rounded-xl p-4 md:p-6">
            {/* Barre de progression en haut */}
            <div className="w-full h-3 bg-blue-200 rounded-full mb-8">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: '100%' }}></div>
            </div>
            
            {/* Cartes d'événements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                  <div className="relative">
                    <div className="h-48 w-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className={`w-24 h-24 ${event.iconColor} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-4xl">{event.icon}</span>
                      </div>
                      
                      {/* Schéma abstrait en arrière-plan */}
                      <div className="absolute inset-0 opacity-20">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute bg-white rounded-full"
                            style={{
                              width: `${Math.random() * 40 + 10}px`,
                              height: `${Math.random() * 40 + 10}px`,
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          />
                        ))}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div 
                            key={`line-${i}`} 
                            className="absolute bg-white"
                            style={{
                              width: `${Math.random() * 80 + 20}px`,
                              height: '1px',
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg font-bold">
                      {event.year}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicateurs d'années en bas */}
            <div className="flex justify-between mt-8 px-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="text-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 mx-auto mb-1"></div>
                  <span className="text-blue-800 font-medium">{event.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Architectures d'IA */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Architectures d'IA</h2>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {Object.keys(aiArchitecture).map((key) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === key 
                    ? `${aiArchitecture[key].color} text-white` 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {aiArchitecture[key].name}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{aiArchitecture[activeTab].name}</h3>
              
              {/* Schéma d'architecture */}
              <div className="relative h-96 md:h-[500px] mb-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 flex items-center justify-center">
                {activeTab === 'neural' && (
                  <div className="relative w-full h-full">
                    {/* Schéma de réseau neuronal plus intuitif */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        {/* Fond avec dégradé doux */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg"></div>
                        
                        {/* Représentation simplifiée du réseau de neurones */}
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                          {/* Flux de données */}
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm z-10">
                            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                            <div className="text-gray-700 text-base font-medium">Flux de données</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                          
                          {/* Schéma principal */}
                          <div className="relative flex items-center justify-center w-full px-4 scale-110 md:scale-125 mt-8">
                            {/* Entrée - Image */}
                            <div className="relative flex flex-col items-center mx-6">
                              <div className="mb-3 text-center">
                                <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">ENTRÉE</div>
                              </div>
                              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-1 border-2 border-blue-400">
                                <div className="w-full h-full bg-blue-100 rounded flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 md:h-16 md:w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="mt-3 text-sm text-center text-gray-600">Données brutes</div>
                            </div>
                            
                            {/* Flèche animée */}
                            <div className="flex-shrink-0 w-16 flex justify-center">
                              <div className="w-14 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-indigo-500 rotate-45"></div>
                              </div>
                            </div>
                            
                            {/* Traitement - Réseau */}
                            <div className="relative flex flex-col items-center mx-6">
                              <div className="mb-3 text-center">
                                <div className="inline-block bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full">TRAITEMENT</div>
                              </div>
                              <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-md flex items-center justify-center p-2 border-2 border-indigo-400">
                                <div className="relative w-full h-full">
                                  {/* Représentation simplifiée des couches */}
                                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-full flex flex-col justify-around">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                      <div key={`in-${i}`} className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">{i+1}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-full flex flex-col justify-around">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                      <div key={`hidden-${i}`} className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">{i+1}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-full flex flex-col justify-around">
                                    {Array.from({ length: 2 }).map((_, i) => (
                                      <div key={`out-${i}`} className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">{i+1}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* Connexions */}
                                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                                    {/* Connexions entre couches */}
                                    {Array.from({ length: 3 }).map((_, i) => (
                                      Array.from({ length: 4 }).map((_, j) => (
                                        <line 
                                          key={`c1-${i}-${j}`} 
                                          x1="6" 
                                          y1={12 + i * 30} 
                                          x2="20" 
                                          y2={10 + j * 24}
                                          stroke="rgba(99, 102, 241, 0.4)" 
                                          strokeWidth="1.5" 
                                        />
                                      ))
                                    ))}
                                    
                                    {Array.from({ length: 4 }).map((_, i) => (
                                      Array.from({ length: 2 }).map((_, j) => (
                                        <line 
                                          key={`c2-${i}-${j}`} 
                                          x1="20" 
                                          y1={10 + i * 24} 
                                          x2="34" 
                                          y2={20 + j * 36}
                                          stroke="rgba(139, 92, 246, 0.4)" 
                                          strokeWidth="1.5" 
                                        />
                                      ))
                                    ))}
                                  </svg>
                                </div>
                              </div>
                              <div className="mt-3 text-sm text-center text-gray-600">Réseau de neurones</div>
                            </div>
                            
                            {/* Flèche animée */}
                            <div className="flex-shrink-0 w-16 flex justify-center">
                              <div className="w-14 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 relative">
                                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-purple-500 rotate-45"></div>
                              </div>
                            </div>
                            
                            {/* Sortie - Prédiction */}
                            <div className="relative flex flex-col items-center mx-6">
                              <div className="mb-3 text-center">
                                <div className="inline-block bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">SORTIE</div>
                              </div>
                              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-1 border-2 border-purple-400">
                                <div className="w-full h-full bg-purple-100 rounded flex flex-col items-center justify-center p-2">
                                  <div className="text-2xl font-bold text-purple-700">98%</div>
                                  <div className="text-sm text-purple-600">Chat</div>
                                </div>
                              </div>
                              <div className="mt-3 text-sm text-center text-gray-600">Résultat</div>
                            </div>
                          </div>
                          
                          {/* Légende explicative */}
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm">
                            <div className="text-center text-gray-700 text-base">
                              Le réseau analyse l'image étape par étape pour déterminer ce qu'elle représente
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'deep' && (
                  <div className="relative w-full h-full">
                    {/* Schéma de deep learning */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-4/5 h-4/5">
                        {Array.from({ length: 5 }).map((_, layerIndex) => (
                          <div 
                            key={layerIndex}
                            className="absolute flex flex-col items-center"
                            style={{
                              left: `${layerIndex * 25}%`,
                              height: '100%',
                            }}
                          >
                            <div className="text-xs text-gray-600 font-medium mb-2">
                              {layerIndex === 0 ? 'Entrée' : layerIndex === 4 ? 'Sortie' : `Couche ${layerIndex}`}
                            </div>
                            <div 
                              className="h-full w-20 rounded-lg bg-green-500 opacity-80 shadow-lg"
                              style={{
                                height: `${70 - layerIndex * 10}%`
                              }}
                            >
                              <div className="h-full w-full flex flex-col items-center justify-around p-2">
                                {Array.from({ length: 5 - layerIndex }).map((_, i) => (
                                  <div key={i} className="w-10 h-2 bg-white rounded-full"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        <div className="absolute bottom-0 w-full h-1 bg-gray-300"></div>
                        
                        <div className="absolute bottom-4 w-full text-center text-sm text-gray-600 font-medium">
                          Analyse de plus en plus détaillée →
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reinforcement' && (
                  <div className="relative w-full bg-blue-50 rounded-xl p-6 min-h-[500px]">
                    <h3 className="text-xl font-semibold text-center mb-8">Cycle d'apprentissage par récompense</h3>
                    
                    {/* Schéma principal */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                      {/* Boîte IA */}
                      <div className="w-64 bg-white rounded-xl shadow-md p-4 border-2 border-purple-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-bold text-purple-600 mb-2">IA</h4>
                          <p className="text-center text-gray-600 mb-3">Système qui apprend</p>
                          <div className="bg-purple-100 px-3 py-1 rounded-md text-xs text-purple-700 text-center w-full">
                            Ex: Déplacer une pièce d'échecs, choisir un chemin
                          </div>
                        </div>
                      </div>
                      
                      {/* Flèches et interactions */}
                      <div className="flex flex-col gap-6 w-full max-w-sm">
                        {/* Étapes numérotées */}
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">1</div>
                            <div className="ml-1 text-xs text-gray-700">L'IA agit</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">2</div>
                            <div className="ml-1 text-xs text-gray-700">Le monde réagit</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">3</div>
                            <div className="ml-1 text-xs text-gray-700">L'IA observe</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">4</div>
                            <div className="ml-1 text-xs text-gray-700">Récompense</div>
                          </div>
                        </div>
                        
                        {/* Action: IA → Monde */}
                        <div className="flex items-center">
                          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium shadow-sm">
                            Action
                          </div>
                          <div className="h-2 w-full bg-indigo-500 ml-2 relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-indigo-500"></div>
                          </div>
                        </div>
                        
                        {/* Observation: Monde → IA */}
                        <div className="flex items-center flex-row-reverse">
                          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium shadow-sm">
                            Observation
                          </div>
                          <div className="h-2 w-full bg-indigo-500 mr-2 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-indigo-500"></div>
                          </div>
                        </div>
                        
                        {/* Récompense: Monde → IA */}
                        <div className="flex items-center flex-row-reverse">
                          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium shadow-sm">
                            Récompense
                          </div>
                          <div className="h-2 w-full bg-red-500 mr-2 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-red-500"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Boîte Monde */}
                      <div className="w-64 bg-white rounded-xl shadow-md p-4 border-2 border-blue-400">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-bold text-blue-600 mb-2">Monde</h4>
                          <p className="text-center text-gray-600 mb-3">Environnement d'interaction</p>
                          <div className="bg-blue-100 px-3 py-1 rounded-md text-xs text-blue-700 text-center w-full">
                            Ex: Jeu d'échecs, labyrinthe, environnement virtuel
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Explication */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
                      <p className="text-center text-gray-700 mb-2">
                        L'IA effectue des actions, observe les résultats et reçoit des récompenses pour s'améliorer
                      </p>
                      <p className="text-center text-sm text-gray-500">
                        Plus la récompense est élevée, plus l'IA est encouragée à répéter cette action dans des situations similaires
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{aiArchitecture[activeTab].description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Exemples concrets:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {aiArchitecture[activeTab].examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conclusion */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Conclusion</h2>
          
          <div className="prose prose-blue max-w-none">
            <p>
              L'intelligence artificielle continue d'évoluer à un rythme rapide, avec des avancées significatives dans divers domaines d'application. Les tendances actuelles montrent une progression vers des modèles plus efficaces, plus accessibles et mieux intégrés dans notre quotidien.
            </p>
            <p>
              Les défis à venir concernent principalement l'éthique, la gouvernance et l'accessibilité de ces technologies. L'avenir de l'IA dépendra de notre capacité à développer des systèmes qui sont non seulement puissants, mais aussi responsables et bénéfiques pour l'ensemble de la société.
            </p>
          </div>
        </section>
        
        {/* Sources */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Sources</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tendances Majeures de l'IA</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">État de l'IA :</span> State of AI Report 2024 - <a href="https://www.stateof.ai" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.stateof.ai</a></li>
                <li><span className="font-medium">Vision par Ordinateur :</span> Computer Vision: Algorithms and Applications - Richard Szeliski</li>
                <li><span className="font-medium">IA Générative :</span> Generative Deep Learning - David Foster</li>
                <li><span className="font-medium">IA Embarquée :</span> TinyML: Machine Learning with TensorFlow Lite - Pete Warden</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Chronologie des avancées majeures</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">ChatGPT (2022) :</span> OpenAI - <a href="https://openai.com/blog/chatgpt" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/blog/chatgpt</a></li>
                <li><span className="font-medium">IA Générative (2023) :</span> OpenAI & Midjourney - <a href="https://openai.com/dall-e-3" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/dall-e-3</a></li>
                <li><span className="font-medium">IA Embarquée (2024) :</span> TensorFlow Lite - <a href="https://www.tensorflow.org/lite" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.tensorflow.org/lite</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Architectures d'IA</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Réseaux de Neurones :</span> Deep Learning - Ian Goodfellow, Yoshua Bengio et Aaron Courville</li>
                <li><span className="font-medium">Apprentissage Profond :</span> Deep Learning Revolution - Terrence J. Sejnowski</li>
                <li><span className="font-medium">Apprentissage par Récompense :</span> Reinforcement Learning: An Introduction - Richard S. Sutton et Andrew G. Barto</li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}