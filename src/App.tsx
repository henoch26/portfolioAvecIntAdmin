import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"
function App() {
  return (
    <div className="ml-4 mr-4 min-h-screen">
        <div className="px-2 md:px-8 lg:px-16">
          <Navbar />
          <Home />
        </div>

        <hr className="w-4/5 text-transparent shadow-4 mx-auto mt-2 mb-2" />

        <div>
          <About />
        </div>

<hr className="w-4/5 text-transparent shadow-4 mx-auto mt-2 mb-2" />
        <div>
          <Experiences/>
        </div>

<hr className="w-4/5 text-transparent shadow-4 mx-auto mt-2 mb-2" />
        <div className="md:px-[15%]">
          <Projects/>
        </div>

<hr className="w-4/5 text-transparent shadow-4 mx-auto mt-2 mb-2" />        
        <div className="md:px-[15%]">
          <Projects/>
        </div>
        
<hr className="w-4/5 text-transparent shadow-4 mx-auto mt-2 mb-2" />
        <div>
          <Footer />
        </div>
    </div>
    
    
  )
}

export default App
