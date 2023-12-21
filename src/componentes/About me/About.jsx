import './About.css'
import ReactonRails from '../../imagenes/2h.png'
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const AboutMe= ()=>{
  const [t, i18n]= useTranslation("global")

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const aboutImageAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const aboutInfoAnimation = {
    hidden: {  x:100, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  return(
    <section className="aboutMe-contenedor" id='about-me'>
      <motion.div className="aboutMe-foto-contenedor"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={aboutImageAnimation}
      transition={{duration:1, delay:.5}}
      >
        <img src={ReactonRails} alt="Foto de Facundo" className="aboutMe-foto-foto" />
      </motion.div>
      <motion.div className="aboutMe-info-contenedor"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={aboutInfoAnimation}
      transition={{duration:1, delay:.5}}
      >
        <h3 className="aboutMe-info-titulo">{t("about.section")}</h3>
        <p className="aboutMe-info-texto">{t("about.text")}</p>
      </motion.div>
    </section>
  )
}

export default AboutMe
