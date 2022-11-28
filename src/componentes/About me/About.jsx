import './About.css'
import fotofq2 from '../../imagenes/2.jpg'
import {useTranslation} from 'react-i18next'

const AboutMe= ()=>{
  const [t, i18n]= useTranslation("global")
  return(
    <section className="aboutMe-contenedor" id='about-me'>
      <div className="aboutMe-info-contenedor">
        <h3 className="aboutMe-info-titulo">{t("about.section")}</h3>
        <p className="aboutMe-info-texto">{t("about.text")}</p>
      </div>
      <div className="aboutMe-foto-contenedor">
        <img src={fotofq2} alt="Foto de Facundo" className="aboutMe-foto-foto" />
      </div>
      
    </section>
  )
}

export default AboutMe