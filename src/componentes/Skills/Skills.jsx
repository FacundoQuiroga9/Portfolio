import './Skills.css'
import Modal from '../Modal-skill/Modal'
import Javascriptlogo from '../SVGs/Javascript/Javascript'
import Illustrator from '../SVGs/Illustrator/Illustrator'
import Photoshop from '../SVGs/Photoshop/Photoshop'
import Figma from '../SVGs/Figma/Figma'
import Wordpress from '../SVGs/Wordpress/Wordpress'
import Github from '../SVGs/Github/Github'
import Git from '../SVGs/Git/Git'
import Bootstrap from '../SVGs/Bootstrap/Bootstrap'
import Vscode from '../SVGs/Vscode/Vscode'
import Sass from '../SVGs/Sass/Sass'
import Vite from '../SVGs/Vite/Vite'
import React from '../SVGs/React/React'
import Css from '../SVGs/Css/Css'
import Htmllogo from '../SVGs/Html/Html'
import Rubylogo from '../SVGs/Ruby/Ruby'
import Railslogo from '../SVGs/Rails/Rails'
import Postgresqllogo from '../SVGs/PostgreSQL/Postgresql'
import { useState } from 'react'
import {useTranslation} from 'react-i18next'

const Skills = ()=>{
    const [modalHtml, setModalHtml] = useState(false)
    const [modalCss, setModalCss] = useState(false)
    const [modalJs, setModalJs] = useState(false)
    const [modalRuby, setModalRuby] = useState(false)
    const [modalRails, setModalRails] = useState(false)
    const [modalPostgresql, setModalPostgresql] = useState(false)
    const [modalReact, setModalReact] = useState(false)
    const [modalVite, setModalVite] = useState(false)
    const [modalSass, setModalSass] = useState(false)
    const [modalBootstrap, setModalBootstrap] = useState(false)
    const [modalVSCode, setModalVSCode] = useState(false)
    const [modalGit, setModalGit] = useState(false)
    const [modalGithub, setModalGithub] = useState(false)
    const [modalWordpress, setModalWordpress] = useState(false)
    const [modalIllustrator, setModalIllustrator] = useState(false)
    const [modalPhotoshop, setModalPhotoshop] = useState(false)
    const [modalFigma, setModalFigma] = useState(false)
    const [t, i18n]= useTranslation("global")

  return(
    <section className="skills-contenedor" id='skills'>
      <h3 className="skills-title">{t("skills.section")}</h3>
      <div className="skills-info-contenedor">
        <div className="skills-info-contenido-contenedor">
          <h4 className="skills-info-contenido-subtitulo">{t("skills.development.title")}</h4>
          <div className="skills-info-contenido-logos">
            <Htmllogo onClick={()=> setModalHtml(!modalHtml)} />
            <Modal estado={modalHtml} cambiarEstado={setModalHtml} imagen={<Htmllogo size="modal-svg"/>} descripcion={t("skills.development.html")}/>

            <Css onClick={()=> setModalCss(!modalCss)} />
            <Modal estado={modalCss} cambiarEstado={setModalCss} imagen={<Css size="modal-svg"/>} descripcion={t("skills.development.css")}/>

            <Javascriptlogo onClick={()=> setModalJs(!modalJs)} />
            <Modal estado={modalJs} cambiarEstado={setModalJs} imagen={<Javascriptlogo size="modal-svg"/>} descripcion={t("skills.development.javascript")}/>

            <React onClick={()=> setModalReact(!modalReact)} />
            <Modal estado={modalReact} cambiarEstado={setModalReact} imagen={<React size="modal-svg"/>} descripcion={t("skills.development.react")}/>

            <Rubylogo onClick={()=> setModalRuby(!modalRuby)} />
            <Modal estado={modalRuby} cambiarEstado={setModalRuby} imagen={<Rubylogo size="modal-svg"/>} descripcion={t("skills.development.ruby")}/>

            <Railslogo alto="1rem" ancho="1rem" onClick={()=> setModalRails(!modalRails)} />
            <Modal estado={modalRails} cambiarEstado={setModalRails} imagen={<Railslogo size="modal-svg" />} descripcion={t("skills.development.rails")}/>

            <Postgresqllogo onClick={()=> setModalPostgresql(!modalPostgresql)} />
            <Modal estado={modalPostgresql} cambiarEstado={setModalPostgresql} imagen={<Postgresqllogo size="modal-svg" />} descripcion={t("skills.development.postgreSQL")}/>

            <Vite onClick={()=> setModalVite(!modalVite)} />
            <Modal estado={modalVite} cambiarEstado={setModalVite} imagen={<Vite size="modal-svg" />} descripcion={t("skills.development.vite")}/>

            <Sass onClick={()=> setModalSass(!modalSass)} />
            <Modal estado={modalSass} cambiarEstado={setModalSass} imagen={<Sass size="modal-svg" />} descripcion={t("skills.development.sass")}/>

            <Bootstrap onClick={()=> setModalBootstrap(!modalBootstrap)} />
            <Modal estado={modalBootstrap} cambiarEstado={setModalBootstrap} imagen={<Bootstrap size="modal-svg" />} descripcion={t("skills.development.bootstrap")}/>

            <Vscode onClick={()=> setModalVSCode(!modalVSCode)} />
            <Modal estado={modalVSCode} cambiarEstado={setModalVSCode} imagen={<Vscode size="modal-svg" />} descripcion={t("skills.development.vs-code")}/>

            <Git onClick={()=> setModalGit(!modalGit)} />
            <Modal estado={modalGit} cambiarEstado={setModalGit} imagen={<Git size="modal-svg" />} descripcion={t("skills.development.git")}/>

            <Github onClick={()=> setModalGithub(!modalGithub)} />
            <Modal estado={modalGithub} cambiarEstado={setModalGithub} imagen={<Github size="modal-svg" />} descripcion={t("skills.development.github")}/>

            <Wordpress onClick={()=> setModalWordpress(!modalWordpress)} />
            <Modal estado={modalWordpress} cambiarEstado={setModalWordpress} imagen={<Wordpress size="modal-svg" />} descripcion={t("skills.development.wordpress")}/>

          </div>
        </div>
        <div className="skills-info-contenido-contenedor">
          <h4 className="skills-info-contenido-subtitulo">{t("skills.design.title")}</h4>
          <div className="skills-info-contenido-logos">

            <Figma onClick={()=> setModalFigma(!modalFigma)} />
            <Modal estado={modalFigma} cambiarEstado={setModalFigma} imagen={<Figma size="modal-svg" />} descripcion={t("skills.design.figma")}/>

            <Photoshop onClick={()=> setModalPhotoshop(!modalPhotoshop)} />
            <Modal estado={modalPhotoshop} cambiarEstado={setModalPhotoshop} imagen={<Photoshop size="modal-svg" />} descripcion={t("skills.design.photoshop")}/>

            <Illustrator onClick={()=> setModalIllustrator(!modalIllustrator)} />
            <Modal estado={modalIllustrator} cambiarEstado={setModalIllustrator} imagen={<Illustrator size="modal-svg" />} descripcion={t("skills.design.illustrator")}/>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
