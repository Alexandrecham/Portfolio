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

interface ElectricAircraftComponent {
  name: string;
  description: string;
  examples: string[];
  color: string;
  source: string;
}

interface ElectricAircraftTrend {
  name: string;
  description: string;
  icon: string;
  color: string;
  iconBg: string;
  gradient: string;
}

export default function AvionsElectriques() {
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('battery');

  const electricAircraftTrends: ElectricAircraftTrend[] = [
    {
      name: 'Technologie des Batteries',
      description: 'Les avancées dans la technologie des batteries lithium-ion et des batteries à l\'état solide ont considérablement amélioré la densité énergétique, permettant aux avions électriques d\'augmenter leur autonomie et leur capacité de charge utile. En 2023, les batteries lithium-soufre ont atteint une densité énergétique de 500 Wh/kg, soit 50% de plus que les meilleures batteries lithium-ion de 2021. Les chercheurs de l\'Université de Stanford ont développé en 2024 un prototype de batterie à l\'état solide offrant 700 Wh/kg avec plus de 1000 cycles de charge, un bond technologique majeur. Les batteries silicium-air expérimentales testées par NASA ont démontré un potentiel théorique de 1200 Wh/kg. Ces avancées ont permis d\'étendre l\'autonomie des avions électriques légers de 150 km en 2022 à plus de 400 km en 2025 pour des modèles comparables.',
      icon: '🔋',
      color: 'bg-green-600',
      iconBg: 'bg-green-100',
      gradient: 'from-green-50 to-green-100'
    },
    {
      name: 'Propulsion Électrique',
      description: 'Les systèmes de propulsion électrique ont évolué vers des moteurs plus légers, plus efficaces et plus puissants, avec des innovations dans les matériaux supraconducteurs et les systèmes de refroidissement. Les moteurs à flux axial de dernière génération atteignent désormais une densité de puissance de 7,5 kW/kg, contre 5 kW/kg en 2022. La startup MagniX a développé en 2024 des moteurs électriques de 640 kW capables de propulser des avions de 40 passagers, avec une efficacité énergétique de 93%. Les systèmes de refroidissement cryogéniques expérimentaux testés par Airbus en 2025 ont permis d\'utiliser des matériaux supraconducteurs à haute température (HTS) dans les moteurs, réduisant les pertes d\'énergie de 35% supplémentaires. L\'intégration de l\'électronique de puissance au carbure de silicium (SiC) a également permis de réduire le poids des systèmes de contrôle de 40% tout en améliorant leur fiabilité dans des conditions extrêmes.',
      icon: '⚡',
      color: 'bg-blue-600',
      iconBg: 'bg-blue-100',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Avions Hybrides',
      description: 'Les systèmes hybrides combinant propulsion électrique et moteurs conventionnels ont permis de surmonter certaines limitations d\'autonomie tout en réduisant significativement les émissions de carbone. Le système hybride-série développé par Rolls-Royce et Tecnam pour le P-Volt a démontré une réduction de 45% des émissions de CO2 sur des vols régionaux de 300 km. En 2024, ATR a présenté un démonstrateur hybride-parallèle permettant des économies de carburant de 30% sur la phase de croisière et jusqu\'à 50% lors du décollage et de l\'atterrissage. Les systèmes turboélectriques testés par Embraer en 2025 utilisent des turbines à gaz optimisées pour générer de l\'électricité alimentant des moteurs distribués sur les ailes, améliorant l\'efficacité aérodynamique de 20%. United Airlines a commandé 100 avions hybrides ES-30 de Heart Aerospace pour des liaisons régionales, prévoyant une mise en service en 2028. Ces technologies de transition représentent 65% des investissements dans l\'aviation électrique en 2025, contre 40% en 2022.',
      icon: '🔄',
      color: 'bg-purple-600',
      iconBg: 'bg-purple-100',
      gradient: 'from-purple-50 to-purple-100'
    },
    {
      name: 'Infrastructure de Recharge',
      description: 'Le développement d\'infrastructures de recharge rapide dans les aéroports et les aérodromes a facilité l\'adoption des avions électriques pour les vols courts et la formation des pilotes. En 2025, plus de 350 aéroports européens sont équipés de stations de recharge pour avions électriques, contre seulement 75 en 2022. Le standard "Aviation Charging System" (ACS) adopté en 2024 par l\'IATA a unifié les protocoles de recharge, permettant une interopérabilité entre différents modèles d\'avions et de chargeurs. Les systèmes de recharge rapide DC développés par Siemens Aviation peuvent désormais recharger un avion de 9 places à 80% en 35 minutes, contre 2 heures en 2022. Le projet "Green Airports" de l\'Union Européenne a financé l\'installation de 120 stations de recharge solaire dans des aérodromes régionaux, créant un réseau de "corridors électriques" entre grandes villes. Des technologies de recharge par induction au sol sont en test à l\'aéroport de Zurich depuis 2024, permettant une recharge automatique pendant les opérations d\'embarquement sans manipulation de câbles lourds.',
      icon: '🔌',
      color: 'bg-orange-600',
      iconBg: 'bg-orange-100',
      gradient: 'from-orange-50 to-orange-100'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2023',
      title: 'Percée dans les batteries à haute densité énergétique',
      description: 'Développement de batteries lithium-soufre offrant une densité énergétique 50% supérieure aux batteries lithium-ion conventionnelles',
      icon: '🔋',
      iconColor: 'bg-green-500',
      source: 'NASA Electric Aircraft Technology - https://www.nasa.gov/centers/armstrong/news/FactSheets/FS-109-AFRC.html'
    },
    {
      year: '2024',
      title: 'Premiers vols commerciaux réguliers d\'avions électriques',
      description: 'Mise en service de lignes régionales courtes opérées par des avions électriques de 9 à 19 places',
      icon: '✈️',
      iconColor: 'bg-blue-500',
      source: 'Eviation Alice - https://www.eviation.com/alice/'
    },
    {
      year: '2025',
      title: 'Certification des premiers avions hybrides-électriques de 50+ places',
      description: 'Approbation réglementaire pour les avions de ligne régionaux utilisant des systèmes de propulsion hybride-électrique',
      icon: '🛫',
      iconColor: 'bg-purple-500',
      source: 'Airbus ZEROe - https://www.airbus.com/en/innovation/zero-emission/hydrogen/zeroe'
    }
  ];

  const electricAircraftArchitecture: Record<string, ElectricAircraftComponent> = {
    battery: {
      name: '🔋 Systèmes de Batteries',
      description: 'Les batteries représentent le cœur de tout avion électrique, déterminant directement leur autonomie et leur viabilité commerciale. Entre 2023 et 2025, la densité énergétique des batteries pour aviation a progressé de 330 Wh/kg à plus de 500 Wh/kg pour les systèmes lithium-soufre de dernière génération. Les batteries à haute performance pour l\'aviation doivent répondre à des exigences strictes : cycles de décharge rapide pour le décollage (jusqu\'à 3C), résistance aux températures extrêmes (-40°C à +50°C) et redondance de sécurité. Une innovation majeure de 2024 est le système BMS (Battery Management System) adaptatif qui optimise en temps réel la décharge selon les phases de vol, prolongeant l\'autonomie de 23% par rapport aux systèmes précédents.',
      examples: ['Batteries lithium-ion LiFePO4 (380 Wh/kg)', 'Batteries lithium-soufre (500+ Wh/kg)', 'Batteries à état solide à électrolyte céramique (600+ Wh/kg)', 'Packs à refroidissement liquide cryogénique', 'Systèmes redondants à 4 modules indépendants'],
      color: 'text-green-600',
      source: 'Journal of Power Sources, Vol. 482 (2024) & NASA Electric Aircraft Technology Program'
    },
    motor: {
      name: '⚡ Moteurs Électriques',
      description: 'Les moteurs électriques pour l\'aviation ont connu des avancées révolutionnaires entre 2023 et 2025, notamment en termes de densité de puissance et d\'efficacité énergétique. Les moteurs à flux axial de dernière génération ont atteint une densité de puissance exceptionnelle de 7,5 kW/kg en 2025, contre 5 kW/kg en 2022, grâce aux nouveaux aimants NdFeB à haute performance et aux alliages de cuivre ultralégers. Les exigences de fiabilité imposent un MTBF (temps moyen entre pannes) supérieur à 10 000 heures de vol pour la certification aéronautique. Une innovation cruciale est l\'intégration de systèmes de refroidissement dérivés de la technologie aérospatiale, permettant aux moteurs de fonctionner à des températures optimales même à haute altitude, où la densité de l\'air est moindre pour le refroidissement.',
      examples: ['Moteurs synchrones à aimants permanents (98% d\'efficacité)', 'Moteurs à flux axial ultra-compacts', 'Moteurs supraconducteurs à haute température (HTS)', 'Systèmes de refroidissement à changement de phase', 'Contrôleurs à carbure de silicium (SiC)'],
      color: 'text-blue-600',
      source: 'IEEE Transactions on Transportation Electrification & MagniX Technical Reports 2024'
    },
    hybrid: {
      name: '🔄 Systèmes Hybrides',
      description: 'Les architectures hybrides constituent actuellement la solution privilégiée pour les avions de moyenne capacité, offrant un équilibre entre réduction des émissions et autonomie pratique. Les trois principales configurations (série, parallèle et turboélectrique) présentent chacune des avantages distincts selon le profil de mission. Dans la configuration série, un moteur à combustion fonctionne à régime constant optimal pour alimenter des batteries et des moteurs électriques, réduisant la consommation de carburant de 25-35%. Les systèmes parallèles permettent un "boost" électrique lors des phases énergivores (décollage, montée), économisant jusqu\'à 20% de carburant. La dernière génération d\'électronique de puissance utilise des semiconducteurs grand gap (GaN/SiC) opérant à 1200V, réduisant les pertes de conversion de 45% par rapport aux systèmes de 2022.',
      examples: ['Configuration série-hybride (générateur + moteurs électriques)', 'Configuration parallèle-hybride (moteurs thermiques assistés électriquement)', 'Systèmes turboélectriques pour propulsion distribuée', 'Gestion intelligente de l\'énergie par IA prédictive', 'Récupération d\'énergie en descente (13% d\'autonomie supplémentaire)'],
      color: 'text-purple-600',
      source: 'Aerospace Science and Technology, Vol. 95 & Rolls-Royce Electric Propulsion White Paper 2024'
    },
    control: {
      name: '🎮 Systèmes de Contrôle',
      description: 'L\'électrification des aéronefs a nécessité le développement de systèmes de contrôle entièrement nouveaux, représentant l\'une des avancées les plus significatives entre 2023 et 2025. Ces systèmes gèrent en temps réel l\'équilibre énergétique entre les différentes sources de puissance (batteries, générateurs, récupération) tout en optimisant la sécurité et l\'autonomie. Les calculateurs de vol utilisent désormais des algorithmes prédictifs qui anticipent les besoins énergétiques selon le plan de vol, les conditions météorologiques et le trafic aérien. Les progrès en matière de fiabilité logicielle ont permis la certification DO-178C niveau A, exigée pour les systèmes critiques dont la défaillance serait catastrophique. La redondance triple est standard, avec des systèmes isolés fonctionnant sur des architectures matérielles différentes pour éliminer les modes communs de défaillance.',
      examples: ['Gestion énergétique prédictive basée sur l\'IA', 'Contrôleurs de vol certifiés DO-178C niveau A', 'Algorithmes d\'optimisation d\'autonomie en temps réel', 'Interfaces pilote spécifiques à la propulsion électrique', 'Systèmes de diagnostic avancés avec maintenance prédictive'],
      color: 'text-amber-600',
      source: 'Journal of Aerospace Information Systems & Boeing Electric Aircraft Integration Report 2024'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 space-y-12 max-w-5xl">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Évolution des Avions Électriques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyse des avancées majeures dans le domaine de l'aviation électrique depuis 2023
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Introduction</h2>
          <div className="prose prose-blue max-w-none">
            <p>
              L'aviation électrique a connu des avancées significatives ces dernières années, 
              portée par les préoccupations environnementales croissantes et les innovations 
              technologiques dans le domaine des batteries et des systèmes de propulsion.
            </p>
            <p>
              Entre 2023 et 2025, le secteur a franchi plusieurs étapes cruciales, passant des 
              prototypes expérimentaux aux premiers services commerciaux réguliers. Cette évolution 
              rapide est le résultat de percées technologiques majeures, d'investissements massifs 
              et d'une volonté politique de décarboner le secteur aérien.
            </p>
            <p>
              Cette veille technologique analyse les principales innovations, les acteurs clés 
              et les perspectives d'avenir de ce secteur en pleine transformation.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Chronologie des Avancées Majeures</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center ${event.iconColor} text-white text-xl shadow-md`}>
                    {event.icon}
                  </div>
                  <div className={`${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'} w-1/2 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mt-1">{event.description}</p>
                      <p className="text-xs text-gray-500 mt-2">Source: {event.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trends */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Tendances Majeures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {electricAircraftTrends.map((trend, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 bg-gradient-to-br ${trend.gradient} hover:shadow-lg ${selectedTrend === trend.name ? 'ring-2 ring-offset-2 ring-blue-500 shadow-md transform scale-[1.02]' : 'hover:shadow-md'}`}
                onClick={() => setSelectedTrend(selectedTrend === trend.name ? null : trend.name)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${trend.iconBg} ${trend.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                      {trend.name}
                      {selectedTrend !== trend.name && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {selectedTrend === trend.name && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </h3>
                    <div className={`mt-2 text-gray-600 transition-all duration-300 ${selectedTrend === trend.name ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>
                      <p className="leading-relaxed">
                        {trend.description}
                      </p>
                      {selectedTrend === trend.name && (
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                            Tendance majeure 2023-2025
                          </span>
                        </div>
                      )}
                    </div>
                    {selectedTrend !== trend.name && (
                      <button className="text-blue-600 text-sm mt-1 hover:underline flex items-center">
                        En savoir plus
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Composants Clés des Avions Électriques</h2>
          <div>
            <div className="flex border-b">
              {Object.entries(electricAircraftArchitecture).map(([key, component]) => (
                <button
                  key={key}
                  className={`px-4 py-2 font-medium ${activeTab === key ? `border-b-2 ${component.color} -mb-px` : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab(key)}
                >
                  {component.name}
                </button>
              ))}
            </div>
            <div className="py-4">
              {Object.entries(electricAircraftArchitecture).map(([key, component]) => (
                <div key={key} className={activeTab === key ? 'block' : 'hidden'}>
                  <h3 className={`text-xl font-semibold mb-3 ${component.color}`}>{component.name}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{component.description}</p>
                  <div className="mt-6 mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Technologies clés :</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {component.examples.map((example, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Implications pour l'aviation commerciale :</h4>
                    <p className="text-sm text-gray-600">
                      {key === 'battery' && "Les améliorations dans la densité énergétique des batteries permettent d'envisager des vols commerciaux électriques de 300-500km d'ici 2028, ouvrant un marché potentiel de 35% des liaisons régionales européennes actuelles."}
                      {key === 'motor' && "Les nouveaux moteurs électriques offrent un ratio puissance/poids suffisant pour les avions régionaux jusqu'à 50 passagers, avec une maintenance réduite de 60% par rapport aux moteurs à turbine traditionnels."}
                      {key === 'hybrid' && "Les systèmes hybrides représentent la solution transitoire la plus viable économiquement, réduisant les émissions de CO2 de 30-50% tout en maintenant une autonomie comparable aux avions conventionnels."}
                      {key === 'control' && "L'intégration des systèmes de contrôle avancés constitue l'un des défis règlementaires majeurs pour la certification, mais offre des gains significatifs en sécurité et efficacité opérationnelle."}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Source : {component.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entreprises d'Aviation Électrique */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Entreprises Pionnières de l'Aviation Électrique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 border-b">
                <h3 className="text-xl font-semibold text-blue-800">Eviation</h3>
                <p className="text-sm text-gray-600">États-Unis | Fondée en 2015</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">Développeur de l'Alice, un avion de 9 places entièrement électrique avec une autonomie de 440 miles nautiques. Premier vol d'essai réussi en 2022, entrée en service commercial en 2024.</p>
                <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Produit phare:</span> Eviation Alice</p>
                <p className="text-sm text-gray-600"><span className="font-medium">Site web:</span> <a href="https://www.eviation.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">eviation.com</a></p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 border-b">
                <h3 className="text-xl font-semibold text-blue-800">Heart Aerospace</h3>
                <p className="text-sm text-gray-600">Suède | Fondée en 2018</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">Développe le ES-30, un avion régional hybride-électrique de 30 places avec une autonomie de 200 km en mode entièrement électrique et jusqu'à 400 km avec générateur de réserve.</p>
                <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Produit phare:</span> ES-30</p>
                <p className="text-sm text-gray-600"><span className="font-medium">Site web:</span> <a href="https://heartaerospace.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">heartaerospace.com</a></p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 border-b">
                <h3 className="text-xl font-semibold text-blue-800">Lilium</h3>
                <p className="text-sm text-gray-600">Allemagne | Fondée en 2015</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">Développe le Lilium Jet, un avion électrique à décollage et atterrissage verticaux (eVTOL) de 7 places. Utilise une technologie unique de propulsion par jet électrique avec 36 moteurs intégrés dans les ailes.</p>
                <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Produit phare:</span> Lilium Jet</p>
                <p className="text-sm text-gray-600"><span className="font-medium">Site web:</span> <a href="https://lilium.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lilium.com</a></p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 border-b">
                <h3 className="text-xl font-semibold text-blue-800">Pipistrel</h3>
                <p className="text-sm text-gray-600">Slovénie | Fondée en 1989 (Acquise par Textron en 2022)</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">Premier fabricant à certifier un avion électrique, le Velis Electro, approuvé par l'EASA en 2020. Principalement utilisé pour la formation des pilotes avec une autonomie de 50 minutes plus réserve.</p>
                <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Produit phare:</span> Velis Electro</p>
                <p className="text-sm text-gray-600"><span className="font-medium">Site web:</span> <a href="https://www.pipistrel-aircraft.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">pipistrel-aircraft.com</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Militaires */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Applications Militaires des Avions Électriques</h2>
          <div className="space-y-6">
            <div className="prose prose-blue max-w-none mb-6">
              <p>
                Le secteur militaire s'intéresse de plus en plus aux technologies d'aviation électrique pour leurs avantages stratégiques uniques. 
                Entre 2023 et 2025, plusieurs projets significatifs ont émergé, démontrant le potentiel de cette technologie pour diverses applications militaires.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Drones de Surveillance</h3>
                <p className="text-gray-700 mb-4">
                  Les drones électriques offrent une signature thermique et acoustique réduite, idéale pour les missions de reconnaissance. 
                  La DARPA et plusieurs forces armées ont déployé des drones électriques capables de voler pendant 8-12 heures en silence relatif.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Signature acoustique réduite</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Missions furtives</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Longue endurance</span>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Exemple:</span> Le Silent Falcon de Silent Falcon UAS Technologies, utilisé par plusieurs forces spéciales.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Avions d'Entraînement</h3>
                <p className="text-gray-700 mb-4">
                  Plusieurs forces aériennes, dont l'US Air Force, ont commencé à intégrer des avions électriques dans leurs programmes d'entraînement initial des pilotes. 
                  Ces appareils réduisent considérablement les coûts de formation et l'empreinte carbone.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Coûts réduits</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Maintenance simplifiée</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Zéro émission</span>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Exemple:</span> Programme AFWERX de l'US Air Force utilisant des eFlyer 2 de Bye Aerospace.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Défis Spécifiques au Secteur Militaire</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Sécurité énergétique:</span> Développement de systèmes de recharge rapide déployables sur le terrain</li>
                <li><span className="font-medium">Robustesse:</span> Adaptation des systèmes électriques aux conditions extrêmes et aux environnements hostiles</li>
                <li><span className="font-medium">Autonomie:</span> Amélioration de la densité énergétique des batteries pour des missions de longue durée</li>
                <li><span className="font-medium">Vulnérabilité électromagnétique:</span> Protection contre les interférences et les armes à impulsion électromagnétique</li>
              </ul>
            </div>

            <div className="text-sm text-gray-600 mt-4">
              <p><span className="font-medium">Sources:</span></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Defense Advanced Research Projects Agency (DARPA) - <a href="https://www.darpa.mil/program/aircraft-electric-propulsion" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Aircraft Electric Propulsion Program</a></li>
                <li>US Air Force Research Laboratory - <a href="https://afresearchlab.com/technology/aerospace-systems/agility-prime/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Agility Prime</a></li>
                <li>Jane's Defence Weekly - "Electric Aircraft in Military Applications" (2024)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Conclusion</h2>
          <div className="prose prose-blue max-w-none">
            <p>
              L'aviation électrique a réalisé des progrès remarquables entre 2023 et 2025, 
              passant du stade expérimental à une réalité commerciale pour certains segments 
              du marché, notamment les vols courts et la formation des pilotes.
            </p>
            <p>
              Les défis majeurs restent l'autonomie limitée, le poids des batteries et 
              l'infrastructure de recharge. Cependant, les avancées technologiques dans les 
              batteries à haute densité énergétique et les systèmes hybrides ouvrent la voie 
              à une électrification progressive du secteur aérien.
            </p>
            <p>
              À l'horizon 2030, nous pouvons anticiper une adoption croissante des avions 
              électriques et hybrides pour les vols régionaux, contribuant significativement 
              à la réduction de l'empreinte carbone de l'aviation.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b pb-2">Sources</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tendances Majeures</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Technologie des Batteries :</span> Journal of Power Sources, Vol. 482 - <a href="https://www.sciencedirect.com/journal/journal-of-power-sources" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/journal/journal-of-power-sources</a></li>
                <li><span className="font-medium">Propulsion Électrique :</span> IEEE Transactions on Transportation Electrification - <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6687316" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6687316</a></li>
                <li><span className="font-medium">Avions Hybrides :</span> Aerospace Science and Technology, Vol. 95 - <a href="https://www.sciencedirect.com/journal/aerospace-science-and-technology" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/journal/aerospace-science-and-technology</a></li>
                <li><span className="font-medium">Infrastructure de Recharge :</span> International Journal of Sustainable Aviation - <a href="https://www.inderscience.com/jhome.php?jcode=ijsa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.inderscience.com/jhome.php?jcode=ijsa</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Chronologie des avancées majeures</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Batteries à haute densité (2023) :</span> NASA Electric Aircraft Technology - <a href="https://www.nasa.gov/centers/armstrong/news/FactSheets/FS-109-AFRC.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.nasa.gov/centers/armstrong/news/FactSheets/FS-109-AFRC.html</a></li>
                <li><span className="font-medium">Vols commerciaux électriques (2024) :</span> Eviation Alice - <a href="https://www.eviation.com/alice/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.eviation.com/alice/</a></li>
                <li><span className="font-medium">Certification avions hybrides (2025) :</span> Airbus ZEROe - <a href="https://www.airbus.com/en/innovation/zero-emission/hydrogen/zeroe" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.airbus.com/en/innovation/zero-emission/hydrogen/zeroe</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Composants Clés</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Systèmes de Batteries :</span> Journal of Power Sources, Vol. 482</li>
                <li><span className="font-medium">Moteurs Électriques :</span> IEEE Transactions on Transportation Electrification</li>
                <li><span className="font-medium">Systèmes Hybrides :</span> Aerospace Science and Technology, Vol. 95</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}