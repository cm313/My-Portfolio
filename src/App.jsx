import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  
  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection: bg-cyan-3000 selection:text-cyan-300 h-screen">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
    </div>
          <div className="container mx-auto px-8">
          <Navbar />
          <Title />
          <About />
          <Skills />
          <Projects/>
          <Contact/>
          </div>
    </div>
    </>
  )
}

export default App