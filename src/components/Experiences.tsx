import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNEXT from "../assets/techno/next-js.webp";
import imgPRISMA from "../assets/techno/prisma.webp";

import Title from "./Title";
import google from "../assets/companies/amazon.png";
import amazon from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
 

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Node.js", image: imgNODE },
  { id: 6, name: "Tailwind", image: imgTAILWIND },
  { id: 7, name: "TypeScript", image: imgTYPE },
  { id: 8, name: "Next.js", image: imgNEXT },
  { id: 9, name: "Prisma", image: imgPRISMA },
];



const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Amazon",
    period: "Mai 2019 - Déc 2020",
    description: [
      "Développement d'une interface utilisateur pour Amazon Web Services.",
      "Implémentation des tests unitaires et E2E.",
    ],
    image: amazon,
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Google",
    period: "Jan 2021 - Déc 2022",
    description: [
      "Développement d'interfaces utilisateur modernes et responsives.",
      "Optimisation des performances et amélioration de l'expérience utilisateur.",
    ],
    image: google,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Meta",
    period: "Jan 2023 - Présent",
    description: [
      "Conception et développement de composants d'interface réutilisables.",
      "Amélioration de l'accessibilité et des performances des applications web.",
    ],
    image: meta,
  },
];


const Experiences = () => {

    return (
        <div>
            <Title title="Mes Expériences"/>
            <div className="flex justify-center flex-col-reverse gap-4 md:flex-row md:gap-8" id="Experiences">
                <div className="flex flex-col gap-4 justify-center items-center grid grid-rows-3 grid-flow-col gap-4">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex flex-col items-center justify-center gap-2 ">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-200">
                                    <img src={skill.image} alt={skill.name} className="w-full h-full rounded-full border-1 p-1 border-green-200 object-cover"/>
                                </div>
                                <p className="text-white font-normal">{skill.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex flex-col bg-gray-800 p-2 rounded-lg shadow md:w-120">
                            <div className="flex items-center mb-2">
                                <img
                                src={experience.image}
                                alt={experience.company}
                                className="object-cover h-8 w-8"
                                />
                                <div className="ml-4">
                                    <h1 className="text-x3 text-green-300 font-bold">
                                    {experience.role}, {experience.company}
                                    </h1>
                                    <span className="text-sm">{experience.period}</span>
                                </div>
                            </div>
                            
                            <ul className="list-disc ml-16">
                            {
                                experience.description.map((desc, index) => (
                                    <li key={index} className="text-white text-2">
                                        {desc}
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
    export default Experiences;