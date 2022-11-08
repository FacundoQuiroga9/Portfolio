import './Hero.css'
import fotofq1 from '../../imagenes/FacundoQuiroga2.png'

const Hero = ()=>{
  return(
    <section id="section-hero" className="hero-contenedor">
      <div className="contenedor-prueba">
      <div className="hero-foto-contenedor">
        <img src={fotofq1} alt="Foto de Facundo" className='hero-foto' />
      </div>
      <div className='hero-info-contenedor'>
        <h1 className="hero-info-nombre">Facundo Quiroga</h1>
        <h2 className="hero-info-trabajo">DESARROLLADOR WEB</h2>
        <p className="hero-info-text">Hola! Bienvenido a mi portfolio. Aquí encontrarás toda mi información profesional.</p>
        <button className="hero-info-cv"><a href='/cv.pdf' target='_blanck' download='cvFacundoQuiroga.pdf'>Descargar CV</a></button>
      </div>
      </div>
      
    </section>
  )
}

export default Hero