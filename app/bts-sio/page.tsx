export default function BTSSIO() {
  return (
    <div className="min-h-[calc(100vh-12rem)] py-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Mon BTS SIO option SLAM</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">La formation</h2>
          <p className="mb-4 text-gray-700">
            Le BTS SIO (Services Informatiques aux Organisations) avec l'option SLAM (Solutions Logicielles et Applications Métiers) 
            est une formation de niveau Bac+2 qui forme des professionnels capables de concevoir, développer et maintenir des solutions 
            informatiques pour les entreprises.
          </p>
          <p className="mb-4 text-gray-700">
            L'option SLAM est orientée vers le développement d'applications, la gestion de bases de données, 
            et la mise en place de solutions logicielles. Elle permet d'acquérir des compétences en programmation, 
            en architecture logicielle, en cybersécurité et en gestion de projets informatiques.
          </p>
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
              <li>Analyse statistique des campagnes de phishing au sein de l'entreprise</li>
              <li>Apprentissage des méthodes et outils du métier de RSSI (Responsable de la Sécurité des Systèmes d'Information)</li>
              <li>Formation aux techniques de détection et neutralisation des menaces (CTH - Cyber Threat Hunting)</li>
              <li>Participation à la sensibilisation des employés aux bonnes pratiques de sécurité informatique</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Deuxième année (2024-2025)</h2>
          <div className="bg-white/90 p-5 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-medium mb-3">Cours et projets</h3>
            <p className="mb-3 text-gray-700">
              En deuxième année, j'ai approfondi mes connaissances en me concentrant particulièrement sur le développement et la cybersécurité. J'ai réalisé trois projets majeurs :
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
              <li>Développement et optimisation d'outils via requêtes SQL pour l'analyse de données</li>
              <li>Travail sur les contrats d'interface et les habilitations pour sécuriser l'accès aux données sensibles</li>
              <li>Préparation et présentation lors des comités opérationnels</li>
              <li>Participation à l'amélioration continue des processus de gestion des données</li>
              <li>Collaboration avec les équipes techniques et métiers pour répondre aux besoins d'analyse</li>
            </ul>
          </div>
        </section>
        
        <div className="mt-6">
          <a
            href="/tdc.pdf"
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
