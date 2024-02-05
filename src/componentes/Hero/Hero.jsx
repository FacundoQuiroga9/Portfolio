import './Hero.css'
import fotofq1 from '../../imagenes/FacundoQuiroga2.png'
import {useTranslation} from 'react-i18next'
import 'animate.css';


const Hero = ()=>{
  const [t, i18n]= useTranslation("global")

  const lng = localStorage.getItem("lng") || "es"


  return(
    <section id="section-hero" className="container d-flex align-items-center">
      <div className="row align-items-center">
      <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 px-5 px-md-2 px-lg-4">
        <img src={fotofq1} alt="Foto de Facundo" className="hero-photo" />
      </div>
      <div className='col-sm-12 col-md-7 col-lg-8 col-xl-8 px-4 my-4 text-center'>
        <h1 className="hero-title">Facundo Quiroga</h1>
        <h2 className="hero-subtitle">{t("hero.job")}</h2>
        <p className="hero-text">{t("hero.welcome")}</p>
        <a href={`/Resume.pdf`} className="btn-custom mt-3 p-3"  target='_blanck' download='Resume_Facundo_Quiroga.pdf'>{t("hero.button")}</a>
      </div>
      </div>



    </section>
  )
}

export default Hero
