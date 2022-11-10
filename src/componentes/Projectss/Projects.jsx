import './Projects.css'
import Card from '../Card/Card'
import image1 from '../../imagenes/buscador de letras.jpg'
import image2 from '../../imagenes/music player.jpg'
import image3 from '../../imagenes/Reproductor de video.jpg'
import image4 from '../../imagenes/calculadora.jpg'
import image5 from '../../imagenes/tareas.jpg'


const Projects = ()=>{
  return(
    <div id='projects'>
    <h3 className="section-projects">Projec<span>t</span>s</h3>
    <div className="projects-contenedor">
      <Card imagen= {image2} nombre="Reproductor de música" tecnologias="HTML, CSS y Javascript" url="https://github.com/FacundoQuiroga9/Reproductor-de-musica" url2="https://facundoquiroga9.github.io/Reproductor-de-musica/"/>
      <Card imagen= {image3} nombre="Reproductor de video" tecnologias="HTML, CSS y Javascript" url="https://github.com/FacundoQuiroga9/Reproductor-de-video" url2="https://facundoquiroga9.github.io/Reproductor-de-video/"/>
      <Card imagen= {image4} nombre="Calculadora" tecnologias="HTML, CSS, Javascript y React" url="https://github.com/FacundoQuiroga9/Calculadora" url2="https://facundoquiroga9.github.io/Calculadora/"/>
      <Card imagen= {image5} nombre="Anotador de tareas" tecnologias="HTML, CSS, Javascript y React" url="https://github.com/FacundoQuiroga9/Anotador-de-tareas" url2="https://facundoquiroga9.github.io/Anotador-de-tareas/"/>
      <Card imagen= {image1} nombre="Buscador de letras" tecnologias="HTML, CSS y Javascript" url="https://github.com/FacundoQuiroga9/Buscador-de-letras" url2="https://facundoquiroga9.github.io/Buscador-de-letras/"/>
    </div>
    </div>
  )
}


export default Projects
