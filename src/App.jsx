import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import AboutMe from './componentes/About me/About'
import Skills from './componentes/Skills/Skills'
import Projects from './componentes/Projects/Projects'
import Contact from './componentes/Contact/Contact'
import Footer from './componentes/Footer/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
