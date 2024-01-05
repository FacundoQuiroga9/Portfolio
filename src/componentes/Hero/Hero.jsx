import './Hero.css'
import fotofq1 from '../../imagenes/FacundoQuiroga2.png'
import {useTranslation} from 'react-i18next'
import { useInView } from 'react-intersection-observer';
import 'animate.css';


const Hero = ()=>{
  const [t, i18n]= useTranslation("global")

  const lng = localStorage.getItem("lng") || "es"

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return(
    <section ref={ref} id="section-hero" className="container d-flex align-items-center">
      <div className="row align-items-center">
      <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 px-5 px-md-2 px-lg-4">
        <img src={fotofq1} alt="Foto de Facundo" className={`hero-photo animate__animated ${inView ? 'animate__swing animate__slow' : ''}`} />
      </div>
      <div className='col-sm-12 col-md-7 col-lg-8 col-xl-8 px-4 my-4 text-center'>
        <h1 className={`hero-title animate__animated ${inView ? 'animate__rotateInDownLeft' : ''}`}>Facundo Quiroga</h1>
        <h2 className={`hero-subtitle animate__animated ${inView ? 'animate__fadeIn animate__slower' : ''}`}>{t("hero.job")}</h2>
        <p className={`hero-text animate__animated ${inView ? 'animate__fadeIn animate__slower' : ''}`}>{t("hero.welcome")}</p>
        <a href={`/Resume.pdf`} className={`btn-custom mt-3 p-3 animate__animated ${inView ? 'animate__pulse animate__faster' : ''}`} target='_blanck' download='Resume_Facundo_Quiroga.pdf'>{t("hero.button")}</a>
      </div>
      </div>



    </section>
  )
}

export default Hero
