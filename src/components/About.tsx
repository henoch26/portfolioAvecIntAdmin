import Title from "./Title"
import img from "../assets/ma_photo.jpeg"
import {LetterText,CalendarSync, Paintbrush} from "lucide-react"

const aboutSections = [
  {
    id: 1,
    title: "Développeur Fullstack",
    description:
      "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description:
      "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];


const About = () => {

  return (
    
        <div className="flex flex-col justify-center px-2 md:px-8 lg:px-16 py-6 " id="About">
        <Title title="À propos de moi" />
        <div className="flex flex-col w-4/5  md:flex-row items-center justify-center mx-auto gap-8">
            <div className="hidden md:block">
                <img src={img} alt="Illustration" className=" border-4 border-white-400 rounded-lg shadow-lg w-60  "       
                />
            </div>
            <div className="flex flex-col md:grid-cols-3 gap-2">
            {aboutSections.map((section) => (
            <div key={section.id} className="flex gap-4 bg-gray-300 p-3 rounded-lg shadow md:w-100">
                <div className="flex items-center w-12 justify-center">
                {section.icon}
                </div>
                <div>
                    <h3 className="text-x3 text-black font-bold ">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                </div>
            </div>
                ))}
            </div>
        </div>
        </div>

  );
}

export default About;