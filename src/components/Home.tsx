import { Mail } from 'lucide-react';
import img from "../assets/ma_photo.jpeg"

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:my-16 my-10 " id="Home">
        <div className="flex flex-col items-center justify-center text-center md:justify-start md:items-start md:text-left">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
                Bienvenue sur mon portfolio, je suis <span className="text-cyan-400">HENDEV</span> !
            </h1>
            <p className="text-white text-gray-600 mb-8">
                Découvrez mes projets, mes compétences et mon parcours en tant que développeur web.
            </p>
            <a href="#contact" className="bg-white hover:bg-gray-300 hover-gray btn btn-accent flex items-center gap-3 w-100 md:w-auto">
                <button className='w-5 h-5' ><Mail/></button>
                Contactez-moi
            </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center" style={{ width: '100%', height: '350px' }}>
            <img src={img} alt="Illustration" className=" border-10 border-white-400 rounded-lg shadow-lg " 
                style={{ 
                    objectFit: 'cover' ,
                    borderRadius: '199px 175px 0px 200px',
                    WebkitBorderRadius: '199px 175px 0px 200px',
                    MozBorderRadius: '199px 175px 0px 200px'
                }}
            />
        </div>
    </div>
  );
}

export default Home;