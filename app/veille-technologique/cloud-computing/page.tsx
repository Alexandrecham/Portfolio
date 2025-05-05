"use client";

import { useState } from 'react';

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

  const cloudTrends: CloudTrend[] = [
    {
      name: 'Multi-Cloud',
      description: 'Les entreprises adoptent des stratégies multi-cloud pour optimiser les coûts, améliorer la résilience et éviter l\'enfermement propriétaire. Cette approche permet de tirer parti des forces de différents fournisseurs cloud.',
      icon: 'M',
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100'
    },
    {
      name: 'Edge Computing',
      description: 'Le traitement des données à la périphérie du réseau réduit la latence et permet des applications en temps réel. Cette approche est essentielle pour l\'IoT et la 5G.',
      icon: 'E',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100'
    },
    {
      name: 'Serverless',
      description: 'L\'informatique sans serveur permet aux développeurs de se concentrer sur le code sans gérer l\'infrastructure. Cette approche optimise les coûts et améliore la productivité.',
      icon: 'S',
      color: 'bg-green-500',
      iconBg: 'bg-green-100'
    },
    {
      name: 'Green Cloud',
      description: 'Le cloud écologique vise à réduire l\'empreinte carbone des centres de données. Les fournisseurs adoptent des énergies renouvelables et optimisent l\'efficacité énergétique.',
      icon: 'G',
      color: 'bg-emerald-500',
      iconBg: 'bg-emerald-100'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2023',
      title: 'Démocratisation du Multi-Cloud',
      description: 'Adoption massive des stratégies multi-cloud par les entreprises',
      icon: '☁️',
      iconColor: 'bg-blue-500',
      source: 'Gartner - State of Cloud 2023'
    },
    {
      year: '2024',
      title: 'Explosion de l\'Edge Computing',
      description: 'Croissance rapide des solutions edge computing avec la 5G',
      icon: '📡',
      iconColor: 'bg-purple-500',
      source: 'IDC - Edge Computing Market Analysis'
    },
    {
      year: '2025',
      title: 'Cloud Souverain et FinOps',
      description: 'Émergence des clouds souverains et optimisation des coûts',
      icon: '🔒',
      iconColor: 'bg-green-500',
      source: 'Cloud Native Computing Foundation'
    }
  ];

  const cloudArchitecture: Record<string, CloudComponent> = {
    iaas: {
      name: '🏗️ Infrastructure as a Service',
      description: 'Services d\'infrastructure cloud de base',
      examples: ['Amazon EC2', 'Google Compute Engine', 'Azure VMs'],
      color: 'text-blue-600',
      source: 'AWS Documentation'
    },
    paas: {
      name: '🚀 Platform as a Service',
      description: 'Plateformes de développement cloud',
      examples: ['Heroku', 'Google App Engine', 'Azure App Service'],
      color: 'text-purple-600',
      source: 'Microsoft Azure Documentation'
    },
    saas: {
      name: '💼 Software as a Service',
      description: 'Applications cloud prêtes à l\'emploi',
      examples: ['Salesforce', 'Microsoft 365', 'Google Workspace'],
      color: 'text-green-600',
      source: 'Salesforce Documentation'
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* En-tête */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-4">L&#39;Évolution du Cloud Computing</h1>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Une analyse approfondie des tendances et innovations qui façonnent l&#39;avenir du cloud computing,
            transformant la manière dont les entreprises gèrent et déploient leurs ressources informatiques.
          </p>
        </section>

        {/* Tendances */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Tendances Majeures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cloudTrends.map((trend, index) => (
              <div
                key={index}
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
              <div key={index} className="flex gap-4">
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
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Architectures Cloud</h2>
          <div className="space-y-6">
            <div className="flex gap-4 border-b">
              {Object.entries(cloudArchitecture).map(([key, component], index) => (
                <button
                  key={index}
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
              {Object.entries(cloudArchitecture).map(([key, component], index) => (
                <div
                  key={index}
                  className={`space-y-4 ${activeTab === key ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-700">{component.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Exemples populaires :</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {component.examples.map((example, index) => (
                        <li key={`${example}-${index}`}>{example}</li>
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
              Le cloud computing continue d&#39;évoluer rapidement, offrant de nouvelles possibilités pour 
              les entreprises et les développeurs. Les tendances actuelles montrent une progression vers 
              des solutions plus flexibles, écologiques et orientées edge computing.
            </p>
            <p>
              Les défis futurs concernent principalement la sécurité, la souveraineté des données et 
              l&#39;optimisation des coûts. L&#39;avenir du cloud dépendra de notre capacité à créer des 
              infrastructures plus durables et plus efficaces.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Sources</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tendances Cloud</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">État du Cloud :</span> Gartner - <a href="https://www.gartner.com/cloud" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">State of Cloud 2025</a></li>
                <li><span className="font-medium">Edge Computing :</span> IDC - Edge Computing Market Analysis 2025</li>
                <li><span className="font-medium">Green Cloud :</span> Green Cloud Computing - Trends and Challenges</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Architectures Cloud</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">IaaS :</span> AWS - <a href="https://aws.amazon.com/architecture" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cloud Architecture Center</a></li>
                <li><span className="font-medium">PaaS :</span> Microsoft - <a href="https://azure.microsoft.com/solutions" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Azure Solutions Architecture</a></li>
                <li><span className="font-medium">SaaS :</span> Salesforce - <a href="https://www.salesforce.com/products" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enterprise Cloud Solutions</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}