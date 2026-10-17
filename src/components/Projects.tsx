import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import Title from "./Title";
const projects = [
  {
    id: 1,
    title: 'Gestionnaire de tâches',
    description: 'Une application web permettant de créer, organiser et suivre ses tâches quotidiennes.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
    image: img1,
  },
  {
    id: 2,
    title: 'Gestion de bibliothèque',
    description: 'Une plateforme de gestion des livres, des emprunts et des lecteurs avec un suivi des disponibilités.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    demoLink: '#',
    repoLink: '#',
    image: img2,
  },
  {
    id: 3,
    title: 'Site de gestion scolaire',
    description: 'Un site web permettant de gérer les élèves, les enseignants, les classes et les résultats scolaires.',
    technologies: ['React', 'Django', 'PostgreSQL'],
    demoLink: '#',
    repoLink: '#',
    image: img3,
  },
  {
    id: 4,
    title: 'Gestion de palmeraie avec IA',
    description: 'Une application de suivi des récoltes, des ventes et des activités agricoles intégrant des fonctionnalités d’intelligence artificielle.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn'],
    demoLink: '#',
    repoLink: '#',
    image: img4,
  },
  {
    id: 5,
    title: 'Portfolio personnel',
    description: 'Un site web professionnel présentant mon profil, mes compétences, mes projets et mes coordonnées.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
    image: img5,
  },
  {
    id: 6,
    title: 'Plateforme HAB.4 Academy',
    description: 'Une plateforme de mise en relation entre les parents et les encadreurs pour faciliter les cours à domicile et le suivi scolaire.',
    technologies: ['Next.js', 'Django', 'PostgreSQL'],
    demoLink: '#',
    repoLink: '#',
    image: img6,
  },
];



const Projects = () => {

    return (
        <div >
            <Title title="Mes Projets"/>
            <div className="md:grid md:grid-cols-3 gap-4" id="Projects">
              {
                projects.map((project) => (
                  <div key={project.id} className="flex flex-col bg-gray-800 p-2 rounded-lg border border-gray-600 shadow mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-2"/>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Demo
                      </a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Code Source
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    )

}

export default Projects;