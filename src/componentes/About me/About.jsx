import './About.css'
import fotofq2 from '../../imagenes/2.jpg'

const AboutMe= ()=>{
  return(
    <section className="aboutMe-contenedor" id='about-me'>
      <div className="aboutMe-info-contenedor">
        <h3 className="aboutMe-info-titulo">About <span>m</span>e</h3>
        <p className="aboutMe-info-texto">Cuando comencé a programar descubrí un mundo con un montón de posibilidades para explorar mis conocimientos y creatividad. Desde entonces, me encuentro envuelto en un aprendizaje constante permitiendo perfeccionarme como desarrollador web.</p>
      </div>
      <div className="aboutMe-foto-contenedor">
        <img src={fotofq2} alt="Foto de Facundo" className="aboutMe-foto-foto" />
      </div>
      
    </section>
  )
}

export default AboutMe