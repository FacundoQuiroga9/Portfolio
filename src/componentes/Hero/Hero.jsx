import './Hero.css'
import fotofq1 from '../../imagenes/FacundoQuiroga2.png'
import {useTranslation} from 'react-i18next'


const Hero = ()=>{
  const [t, i18n]= useTranslation("global")

  const lng = localStorage.getItem("lng") || "es"

  return(
    <section id="section-hero" className="hero-contenedor">
      <div className="contenedor-prueba">
      <div className="hero-foto-contenedor">
        <img src={fotofq1} alt="Foto de Facundo" className='hero-foto' />
      </div>
      <div className='hero-info-contenedor'>
        <h1 className="hero-info-nombre">Facundo Quiroga</h1>
        <h2 className="hero-info-trabajo">{t("hero.job")}</h2>
        <p className="hero-info-text">{t("hero.welcome")}</p>
        <button className="hero-info-cv"><a href={`/resume.pdf`} target='_blanck' download='Resume_Facundo_Quiroga.pdf'>{t("hero.button")}</a></button>
      </div>
      </div>

    </section>
  )
}

export default Hero
