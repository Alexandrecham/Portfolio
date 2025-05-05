import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-12rem)] py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
          <div className="flex flex-col h-full">
            <div className="flex-shrink-0 flex justify-center mb-6">
              <label 
                htmlFor="profile-picture" 
                className="relative w-48 h-48 rounded-full overflow-hidden cursor-pointer"
              >
                <Image
                  src="/pov.jpg"
                  alt="Photo de profil"
                  fill
                  className="object-cover"
                  priority
                />
              </label> 
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-6 text-center">Alexandre Chambraud</h1>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
                Passionné par l'informatique, j'ai choisi le BTS SIO option SLAM à l'EFREI Paris pour développer mes compétences techniques. J'ai fait le choix d'une première année en initial pour maîtriser les fondamentaux, suivie d'une deuxième année en alternance pour mettre en pratique mes connaissances dans le monde professionnel. Je cherche une alternance dans le domaine de la cybersécurité pour mon futur bachelor Cybersécurité et ethical hacking à partir de septembre 2025.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Formation</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>2023-2025 EFREI Paris Panthéon-Assas Université BTS/SIO option SLAM, 94100 Villejuif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>2021-2023 Institut du Marais Charlemagne Pollès 75010 Paris, Lycée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>2016-2021 École Alsacienne 75006 Paris, Collège/Lycée</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <div>
                  <p className="font-medium">GRDF, Data Analyst MOE</p>
                  <p className="text-sm">Alternance en 2ème année de BTS, septembre 2024-juillet 2025</p>
                  <ul className="text-sm mt-1 ml-4 list-disc">
                    <li>Recettes d'outils via requêtes SQL</li>
                    <li>Travail sur les contracts d'interface et les habilitations</li>
                    <li>Préparation des comités opérationnels</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <div>
                  <p className="font-medium">Air France, Prévention Cybersécurité</p>
                  <p className="text-sm">Stage de 1ère année de BTS, juin 2024</p>
                  <p className="text-sm mt-1">Statistiques sur les enquêtes de phishing au sein de l'entreprise, apprentissage du métier de RSSI et chasseur de menaces (CTH)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
