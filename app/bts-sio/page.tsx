import { Code2, Server, Cpu } from "lucide-react";

export default function BTSSIO() {
  return (
    <div className="min-h-[calc(100vh-12rem)] py-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Mon BTS SIO option SLAM</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">La formation</h2>
          
          {/* Présentation générale du BTS SIO */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">BTS SIO</h3>
            <p className="text-gray-700 leading-relaxed">
              Le BTS SIO (Services Informatiques aux Organisations) est une formation de niveau Bac+2 qui forme des professionnels 
              de l'informatique. Cette formation permet d'acquérir des compétences techniques, organisationnelles et relationnelles 
              nécessaires pour travailler dans le domaine des services informatiques. Le programme couvre un large éventail de 
              domaines, incluant le développement, la cybersécurité, les réseaux et la gestion de projets.
            </p>
          </div>

          {/* Options SLAM et SISR en grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Option SLAM */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Option SLAM</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                L'option SLAM (Solutions Logicielles et Applications Métiers) forme des spécialistes du développement d'applications. 
                Les étudiants apprennent à concevoir, développer et maintenir des solutions logicielles. Ils acquièrent des compétences 
                en programmation, en gestion de bases de données, en architecture logicielle et en développement web.
              </p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Débouchés :</p>
                <p className="text-sm text-gray-600">Développeur, Analyste programmeur, Chef de projets informatiques</p>
              </div>
            </div>

            {/* Option SISR */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Option SISR</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                L'option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) forme des experts en infrastructure informatique. 
                Les étudiants apprennent à installer, configurer et gérer les réseaux et systèmes informatiques des entreprises. 
                Ils se spécialisent dans la sécurité, l'administration système et la maintenance des infrastructures.
              </p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Débouchés :</p>
                <p className="text-sm text-gray-600">Administrateur réseau, Technicien système, Responsable infrastructure</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Première année (2023-2024)</h2>
          <div className="bg-white/90 p-5 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-medium mb-3">Cours et projets</h3>
            <p className="mb-3 text-gray-700">
              Durant ma première année, j'ai acquis des compétences fondamentales dans trois domaines principaux :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><span className="font-medium">Réseau</span> : Configuration de réseaux locaux, mise en place de serveurs, protocoles TCP/IP, routage et sécurisation des infrastructures réseau.</li>
              <li><span className="font-medium">Développement</span> : Apprentissage des langages de programmation (Java, PHP, JavaScript), conception de bases de données relationnelles, développement d'applications web.</li>
              <li><span className="font-medium">Cybersécurité</span> : Principes fondamentaux de la sécurité informatique, identification des vulnérabilités, méthodes de protection des données et des systèmes.</li>
            </ul>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Stage chez Air France</h3>
            <p className="mb-3 text-gray-700">
              <span className="font-medium">Air France, Prévention Cybersécurité</span> — Stage de 1ère année à Tremblay en France (93290), juin 2024
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Analyse statistique des vulnérabilités de sécurité informatique au sein des métiers de l'entreprise</li>
              <li>Découverte des métiers RSSI et CTH à travers une journée d'immersion avec les équipes</li>
              <li>Participation à la sensibilisation des employés aux bonnes pratiques de sécurité informatique</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Deuxième année (2024-2025)</h2>
          <div className="bg-white/90 p-5 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-medium mb-3">Cours et projets</h3>
            <p className="mb-3 text-gray-700">
              En deuxième année, nos cours se sont concentrés sur l'approfondissement des compétences en développement et en cybersécurité. 
              Durant cette année, j'ai réalisé trois projets majeurs :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><span className="font-medium">Application Météo React</span> : Développement d'une application web interactive utilisant l'API météo pour afficher les prévisions en temps réel.</li>
              <li><span className="font-medium">Base de Données Twitch</span> : Conception et implémentation d'une base de données complexe inspirée de Twitch, comprenant 50 tables relationnelles modélisant l'écosystème complet de la plateforme.</li>
              <li><span className="font-medium">Site de Tournoi E-Sport</span> : Création d'une plateforme web complète pour l'organisation et la gestion de tournois e-sport avec système d'inscription, génération de brackets et suivi des scores.</li>
            </ul>
            <p className="text-gray-700">
              Ces projets m'ont permis de mettre en pratique mes compétences en développement front-end et back-end, en conception de bases de données, et en gestion de projets informatiques.
            </p>
          </div>
          
          <div className="bg-white/90 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Alternance chez GRDF</h3>
            <p className="mb-3 text-gray-700">
              <span className="font-medium">GRDF, Data Analyst MOE</span> — Alternance en 2ème année de BTS à Saint Denis (93000), septembre 2024-juillet 2025
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Travail sur les contrats d'interface et les habilitations pour sécuriser l'accès aux données sensibles</li>
              <li>Préparation et présentation lors des comités opérationnels</li>
              <li>Recette des outils via requêtes SQL</li>
              <li>Application des besoins métiers dans nos outils</li>
            </ul>
          </div>
        </section>
        
        <div className="mt-6">
          <a
            href="/Tableau Compétences.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Télécharger le tableau de compétences
          </a>
        </div>
      </div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50"></div>
    </div>
  )
}
