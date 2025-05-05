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
      description: 'Base de l\'apprentissage profond moderne',
      examples: ['Perceptron', 'CNN', 'Transformers'],
      color: 'text-blue-600',
      source: 'Deep Learning - Goodfellow et al.'
    },
    deep: {
      name: '🔄 Apprentissage Profond',
      description: 'Architectures multicouches complexes',
      examples: ['ResNet', 'BERT', 'GPT'],
      color: 'text-purple-600',
      source: 'Deep Learning Revolution'
    },
    reinforcement: {
      name: '🎮 Apprentissage par Renforcement',
      description: 'Apprentissage par essai et erreur',
      examples: ['Q-Learning', 'AlphaGo', 'PPO'],
      color: 'text-green-600',
      source: 'Reinforcement Learning - Sutton & Barto'
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* En-tête */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-4">L\'Évolution de l\'Intelligence Artificielle</h1>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Une exploration des avancées majeures et des tendances émergentes dans le domaine de l\'intelligence artificielle,
            transformant notre façon de vivre, de travailler et d\'interagir avec la technologie.
          </p>
        </section>

        {/* Tendances */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Tendances Majeures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTrends.map((trend) => (
              <div
                key={trend.name}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  selectedTrend === trend.name
                    ? 'ring-2 ring-blue-500 shadow-lg'
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedTrend(trend.name === selectedTrend ? null : trend.name)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${trend.iconBg} rounded-lg flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${trend.color} bg-clip-text text-transparent`}>
                      {trend.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{trend.name}</h3>
                </div>
                <p className={`text-gray-700 transition-all ${
                  selectedTrend === trend.name ? 'line-clamp-none' : 'line-clamp-3'
                }`}>
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Chronologie des Événements Clés</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 ${event.iconColor} rounded-full flex items-center justify-center text-white`}>
                  {event.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <span className="text-sm text-gray-500">{event.year}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{event.description}</p>
                  <a
                    href={event.source}
                    className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Architectures d\'IA</h2>
          <div className="space-y-6">
            <div className="flex gap-4 border-b">
              {Object.entries(aiArchitecture).map(([key, component]) => (
                <button
                  key={key}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === key
                      ? component.color + ' border-b-2 border-current'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {component.name}
                </button>
              ))}
            </div>
            <div className="p-4">
              {Object.entries(aiArchitecture).map(([key, component]) => (
                <div
                  key={key}
                  className={`space-y-4 ${activeTab === key ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-700">{component.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Exemples populaires :</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {component.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500">
                    Source : {component.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Conclusion</h2>
          <div className="prose prose-blue max-w-none">
            <p>
              L\'intelligence artificielle continue d\'évoluer à un rythme rapide, avec des avancées significatives 
              dans divers domaines d\'application. Les tendances actuelles montrent une progression vers des 
              modèles plus efficaces, plus accessibles et mieux intégrés dans notre quotidien.
            </p>
            <p>
              Les défis à venir concernent principalement l\'éthique, la gouvernance et l\'accessibilité de ces 
              technologies. L\'avenir de l\'IA dépendra de notre capacité à développer des systèmes qui sont non 
              seulement puissants, mais aussi responsables et bénéfiques pour l\'ensemble de la société.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Sources</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tendances Majeures de l\'IA</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">État de l\'IA :</span> State of AI Report 2024 - <a href="https://www.stateof.ai" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.stateof.ai</a></li>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Architectures d\'IA</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Réseaux de Neurones :</span> Deep Learning - Ian Goodfellow, Yoshua Bengio et Aaron Courville</li>
                <li><span className="font-medium">Apprentissage Profond :</span> Deep Learning Revolution - Terrence J. Sejnowski</li>
                <li><span className="font-medium">Apprentissage par Renforcement :</span> Reinforcement Learning: An Introduction - Richard S. Sutton et Andrew G. Barto</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}