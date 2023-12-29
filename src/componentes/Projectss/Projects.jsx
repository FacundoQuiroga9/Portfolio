import './Projects.css'
import Card from '../Card/Card'
import image1 from '../../imagenes/Fixi.jpg'
import image2 from '../../imagenes/Ffarm Taid.jpg'
import image3 from '../../imagenes/Dynamite fireworks.jpg'
import {useTranslation} from 'react-i18next'
import html from '../../imagenes/html.png'
import css from '../../imagenes/css.png'
import bootstrap from '../../imagenes/bootstrap.png'
import postgresql from '../../imagenes/postgresql.png'
import ruby from '../../imagenes/ruby.png'
import ror from '../../imagenes/ror.png'
import react from '../../imagenes/react.png'
import js from '../../imagenes/js.png'


const Projects = ()=>{
  const [t, i18n]= useTranslation("global")
  return(
    <div id='projects'>
    <h3 className="section-projects">{t("projects.section")}</h3>
    <div className="projects-contenedor">
    <Card imagen= {image1} nombre={t("projects.card5.title")} tecnologias={t("projects.card5.techs")} url="https://github.com/elisaherre/FIXI_SERVICE" url2="http://www.fixiservice.xyz/">
      <img className='logo-card' src={html} alt="" />
      <img className='logo-card' src={css} alt="" />
      <img className='logo-card' src={bootstrap} alt="" />
      <img className='logo-card' src={postgresql} alt="" />
      <img className='logo-card' src={ruby} alt="" />
      <img className='logo-card' src={ror} alt="" />
    </Card>
      <Card imagen= {image2} nombre={t("projects.card1.title")} tecnologias={t("projects.card1.techs")} url="https://github.com/FacundoQuiroga9/Ffarm-Taid" url2="https://hosteriaffarmtaid.com/">
        <img className='logo-card' src={html} alt="" />
        <img className='logo-card' src={css} alt="" />
        <img className='logo-card' src={js} alt="" />
        <img className='logo-card' src={react} alt="" />
      </Card>
      <Card imagen= {image3} nombre={t("projects.card2.title")} tecnologias={t("projects.card2.techs")} url="https://github.com/FacundoQuiroga9/justice-fireworks" url2="https://dynamitefireworks.uno/">
        <img className='logo-card' src={html} alt="" />
        <img className='logo-card' src={css} alt="" />
        <img className='logo-card' src={js} alt="" />
        <img className='logo-card' src={react} alt="" />
      </Card>
    </div>
    </div>
  )
}


export default Projects
