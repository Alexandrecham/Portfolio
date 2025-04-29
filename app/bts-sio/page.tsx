export default function BTSSIO() {
  const subjects = [
    {
      name: "Culture générale et expression",
      hours: 2,
      coef: 2,
      description: "Perfectionnement des capacités d'expression et de communication à l'écrit comme à l'oral."
    },
    {
      name: "Anglais",
      hours: 2,
      coef: 2,
      description: "Anglais technique et professionnel, communication en contexte international."
    },
    {
      name: "Mathématiques",
      hours: 2,
      coef: 3,
      description: "Mathématiques appliquées à l'informatique : algèbre, analyse, statistiques et probabilités."
    },
    {
      name: "CEJM",
      hours: 2,
      coef: 3,
      description: "Culture Économique, Juridique et Managériale : aspects juridiques, économiques et managériaux des services informatiques."
    },
    {
      name: "Développement d'applications",
      hours: 4,
      coef: 4,
      description: "Conception et développement d'applications, gestion de bases de données, programmation orientée objet."
    },
    {
      name: "Cybersécurité",
      hours: 4,
      coef: 3,
      description: "Sécurité des systèmes d'information, protection des données, audit de sécurité."
    }
  ]

  return (
    <div className="min-h-[calc(100vh-12rem)] py-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Mon BTS SIO</h1>
        <p className="mb-6 text-lg text-gray-700">
          Je suis actuellement en BTS SIO (Services Informatiques aux Organisations) avec l'option
          SLAM (Solutions Logicielles et Applications Métiers). Cette formation me permet d'acquérir des compétences en
          développement d'applications et en gestion de projets informatiques.
        </p>
        
        <div className="grid gap-4">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white/90 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-blue-600">{subject.name}</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{subject.hours}h/sem</span>
                  <span>Coef. {subject.coef}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{subject.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
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
