import './About.css'
import ReactonRails from '../../imagenes/2h.png'
import {useTranslation} from 'react-i18next'
import { useInView } from 'react-intersection-observer';

const AboutMe= ()=>{
  const [t, i18n]= useTranslation("global")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });


  return(
    <section ref={ref} className="container d-flex align-items-center" id='about-me'>
      <div className="row">
      <div className="col-12 col-md-6 col-lg-4 col-xl-4 px-5 px-md-0 d-flex align-items-center">
        <img src={ReactonRails} alt="Foto de Facundo" className={`aboutMe-image animate__animated ${inView ? 'animate__backInUp animate__slow' : ''}`} />
      </div>
      <div className="col-12 col-md-6 col-lg-8 col-xl-8 px-5 px-md-2 px-lg-4">
        <h3 className={`aboutMe-title animate__animated ${inView ? 'animate__rotateInDownLeft' : ''}`}>{t("about.section")}</h3>
        <p className={`aboutMe-text animate__animated ${inView ? 'animate__fadeIn animate__slower' : ''}`}>{t("about.text")}</p>
      </div>
      </div>
    </section>
  )
}

export default AboutMe
