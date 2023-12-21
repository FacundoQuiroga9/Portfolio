import './Hero.css'
import fotofq1 from '../../imagenes/FacundoQuiroga2.png'
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const Hero = ()=>{
  const [t, i18n]= useTranslation("global")

  const lng = localStorage.getItem("lng") || "es"

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const heroPhotoAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const heroInfoAnimation = {
    hidden: {  x:100, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  return(
    <section id="section-hero" className="hero-contenedor">
      <div className="contenedor-prueba">
      <motion.div className="hero-foto-contenedor"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={heroPhotoAnimation}
      transition={{duration:1, delay:.5}}
      >
        <img src={fotofq1} alt="Foto de Facundo" className='hero-foto' />
      </motion.div>
      <motion.div className='hero-info-contenedor'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={heroInfoAnimation}
        transition={{duration:1, delay:.5}}
      >
        <h1 className="hero-info-nombre">Facundo Quiroga</h1>
        <h2 className="hero-info-trabajo">{t("hero.job")}</h2>
        <p className="hero-info-text">{t("hero.welcome")}</p>
        <button className="hero-info-cv"><a href={`/Resume.pdf`} target='_blanck' download='Resume_Facundo_Quiroga.pdf'>{t("hero.button")}</a></button>
      </motion.div>
      </div>

    </section>
  )
}

export default Hero
