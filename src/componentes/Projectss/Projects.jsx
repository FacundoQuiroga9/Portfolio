import './Projects.css'
import Card from '../Card/Card'
import image1 from '../../imagenes/Fixi.png'
import image2 from '../../imagenes/Ffarm Taid.png'
import image3 from '../../imagenes/Reproductor de video.jpg'
import image4 from '../../imagenes/calculadora.jpg'
import image5 from '../../imagenes/tareas.jpg'
import {useTranslation} from 'react-i18next'


const Projects = ()=>{
  const [t, i18n]= useTranslation("global")
  return(
    <div id='projects'>
    <h3 className="section-projects">{t("projects.section")}</h3>
    <div className="projects-contenedor">
    <Card imagen= {image1} nombre={t("projects.card5.title")} tecnologias={t("projects.card5.techs")} url="https://github.com/FacundoQuiroga9/Buscador-de-letras" url2="http://www.fixiservice.xyz/"/>
      <Card imagen= {image2} nombre={t("projects.card1.title")} tecnologias={t("projects.card1.techs")} url="https://github.com/FacundoQuiroga9/Ffarm-Taid" url2="https://hosteriaffarmtaid.com/"/>
      <Card imagen= {image3} nombre={t("projects.card2.title")} tecnologias={t("projects.card2.techs")} url="https://github.com/FacundoQuiroga9/Reproductor-de-video" url2="https://facundoquiroga9.github.io/Reproductor-de-video/"/>
      <Card imagen= {image4} nombre={t("projects.card3.title")} tecnologias={t("projects.card3.techs")} url="https://github.com/FacundoQuiroga9/Calculadora" url2="https://facundoquiroga9.github.io/Calculadora/"/>
      <Card imagen= {image5} nombre={t("projects.card4.title")} tecnologias={t("projects.card4.techs")} url="https://github.com/FacundoQuiroga9/Anotador-de-tareas" url2="https://facundoquiroga9.github.io/Anotador-de-tareas/"/>
    </div>
    </div>
  )
}


export default Projects
