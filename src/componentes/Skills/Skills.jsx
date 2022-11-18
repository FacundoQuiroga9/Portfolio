import './Skills.css'
import Modal from '../Modal-skill/Modal'
import html from '../../imagenes/html.png'
import css from '../../imagenes/css.png'
import javascript from '../../imagenes/javascript.png'
import typescript from '../../imagenes/typescript.png'
import react from '../../imagenes/react.png'
import vite from '../../imagenes/vite.png'
import sass from '../../imagenes/sass.png'
import bootstrap from '../../imagenes/bootstrap.png'
import vscode from '../../imagenes/vscode.png'
import git from '../../imagenes/git.png'
import github from '../../imagenes/github.png'
import wordpress from '../../imagenes/wordpress.png'
import figma from '../../imagenes/figma.png'
import illustrator from '../../imagenes/illustrator.png'
import photoshop from '../../imagenes/photoshop.png'
import { useState } from 'react'

const Skills = ()=>{
    const [modalHtml, setModalHtml] = useState(false)
    const [modalCss, setModalCss] = useState(false)
    const [modalJs, setModalJs] = useState(false)
    const [modalTs, setModalTs] = useState(false)
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

  
  return(
    <section className="skills-contenedor" id='skills'>
      <h3 className="skills-title">S<span>k</span>ills</h3>
      <div className="skills-info-contenedor">
        <div className="skills-info-contenido-contenedor">
          <h4 className="skills-info-contenido-subtitulo">DESARROLLO WEB</h4>
          <div className="skills-info-contenido-logos">
            <picture className='picture-container'>
              <svg onClick={()=> setModalHtml(!modalHtml)} className='logo-html' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.9 95.37"><polygon className='fondo' points="6.5 87.37 0 15.07 70.9 15.07 64.4 87.37 35.4 95.37 6.5 87.37" fill="blueviolet"/><polygon className='fondo2' points="35.4 20.25 35.4 90.17 35.46 90.19 59.52 83.72 65.08 20.25 35.4 20.25" fill="blueviolet"/><polygon className='letra' points="35.4 47.77 23.7 47.77 22.9 38.67 35.4 38.67 35.4 29.77 35.4 29.77 13.2 29.77 13.4 32.17 15.6 56.67 35.4 56.67 35.4 47.77" fill="#170c18"/><polygon className='letra' points="35.4 70.77 35.4 70.77 25.5 68.17 24.9 61.07 20.1 61.07 16 61.07 17.2 74.97 35.4 80.07 35.4 79.97 35.4 70.77" fill="#170c18"/><polygon className='letra' points="35.4 47.77 35.4 56.67 46.3 56.67 45.3 68.17 35.4 70.77 35.4 80.07 53.6 74.97 53.7 73.47 55.8 50.17 56 47.77 53.6 47.77 35.4 47.77" fill="#170c18"/><polygon className='letra' points="35.4 29.77 35.4 35.27 35.4 38.67 35.4 38.67 56.8 38.67 56.8 38.67 56.8 38.67 57 36.67 57.4 32.17 57.6 29.77 35.4 29.77" fill="#170c18"/><path className='titulo' d="M21.75,4.63h4.5v4.5h4.1V4.63h4.5v13.5h-4.5v-4.5h-4.1v4.5h-4.5V4.63Z" transform="translate(-15.2 -4.63)" fill="blueviolet"/><path className='titulo' d="M40.85,9.13h-4V4.63h12.4v4.5h-4v9h-4.5l.1-9Z" transform="translate(-15.2 -4.63)" fill="blueviolet"/><path className='titulo' d="M51.25,4.63H56l2.9,4.7,2.9-4.7h4.7v13.5H62v-6.7l-3.1,4.8h-.1l-3.1-4.8v6.7h-4.4V4.63Z" transform="translate(-15.2 -4.63)" fill="blueviolet"/><path className='titulo' d="M68.75,4.63h4.5v9h6.3v4.5H68.75Z" transform="translate(-15.2 -4.63)" fill="blueviolet"/></svg>
              <div className='tool-tip' role='tooltip'>HTML</div>
            </picture>  
            <Modal estado={modalHtml} cambiarEstado={setModalHtml} imagen={`${html}`} descripcion='Html es un lenguaje de marcado para la elaboración de páginas web. Define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros'/> 
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalCss(!modalCss)} className='logo-css' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.4 100"><path className='fondo' d="M50.3,100,19.5,91.5l-6.9-77H88l-6.9,77L50.3,100Z" transform="translate(-12.6 0)" fill="blueviolet"/><polygon className='fondo2' points="37.72 18.34 37.72 96.12 37.79 96.14 64.55 88.94 70.73 18.34 37.72 18.34" fill="blueviolet"/><path className='centro' d="M29,49.7l.8,8.4H48.6V49.7Zm-1.6-17,.8,8.4H48.5V32.7ZM48.5,71.6h0l-9.4-2.5-.6-6.7H30l1.2,13.2,17.2,4.8h0l.1-8.8Z" transform="translate(-12.6 0)" fill="#170c18"/><path className='titulo' d="M30.7,0H40.9V4.3H35V8.6h5.9v4.3H30.7ZM43,0H53.2V3.7H47.3v.7h5.9V13H43V9.1h5.9V8.3H43V0ZM55.2,0H65.4V3.7H59.5v.7h5.9V13H55.2V9.1h5.9V8.3H55.2V0Z" transform="translate(-12.6 0)" fill="blueviolet"/><path className='centro' d="M68.1,49.7l1.5-17H48.5v8.4H60.4l-.8,8.6H48.5v8.4H58.9L57.9,69l-9.4,2.5v8.8l17.3-4.8.1-1.4,2-22.2.2-2.2Z" transform="translate(-12.6 0)" fill="#170c18"/></svg>
            <div className='tool-tip' role='tooltip'>CSS</div>
            </picture>
            <Modal estado={modalCss} cambiarEstado={setModalCss} imagen={`${css}`} descripcion='Css es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web, e interfaces de usuario escritas en HTML'/> 
            
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalJs(!modalJs)} className='logo-js' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path className='fondo' d="M0,0H256V256H0Z" transform="translate(0 0)" fill="blueviolet"/><path className='letra' d="M67.31,213.93,86.9,202.08c3.78,6.7,7.22,12.37,15.47,12.37,7.9,0,12.89-3.1,12.89-15.12v-81.8h24v82.14c0,24.91-14.6,36.26-35.91,36.26-19.25,0-30.42-10-36.09-22" transform="translate(0 0)" fill="#170c18"/><path className='letra' d="M152.38,211.35,172,200c5.16,8.42,11.86,14.61,23.71,14.61,10,0,16.33-5,16.33-11.86,0-8.25-6.53-11.17-17.53-16l-6-2.58c-17.36-7.39-28.87-16.66-28.87-36.26,0-18,13.74-31.79,35.23-31.79,15.29,0,26.29,5.33,34.19,19.25l-18.73,12c-4.12-7.39-8.59-10.31-15.46-10.31-7.05,0-11.52,4.47-11.52,10.31,0,7.22,4.47,10.14,14.78,14.61l6,2.57c20.45,8.77,32,17.7,32,37.81,0,21.65-17,33.51-39.87,33.51-22.34,0-36.77-10.66-43.82-24.58" transform="translate(0 0)" fill="#170c18"/></svg>
            <div className='tool-tip' role='tooltip'>Javascript</div>
            </picture>
            <Modal estado={modalJs} cambiarEstado={setModalJs} imagen={`${javascript}`} descripcion='JavScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico. Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas.'/> 
            
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalTs(!modalTs)} className='logo-typescript' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polygon className='fondo' points="0 128 0 256 128 256 256 256 256 128 256 0 128 0 0 0 0 128" fill="blueviolet"/><path className='letra' d="M56.61,128.85l-.08,10.48H89.85V234h23.57V139.33h33.32V129.05a97.33,97.33,0,0,0-.29-10.56c-.12-.17-20.39-.25-45-.21l-44.74.13Z" transform="translate(0 0)" fill="#170c18"/><path className='letra' d="M206.57,118.11a31.85,31.85,0,0,1,16,9.22c2.35,2.52,5.85,7.11,6.13,8.21.08.33-11.05,7.8-17.8,12-.24.16-1.21-.9-2.31-2.52-3.29-4.8-6.75-6.87-12-7.23-7.76-.53-12.76,3.53-12.72,10.32a9.39,9.39,0,0,0,1.1,4.79c1.71,3.54,4.88,5.65,14.83,10,18.33,7.88,26.17,13.08,31.05,20.48,5.44,8.25,6.66,21.41,3,31.21-4.06,10.64-14.14,17.87-28.32,20.27-4.39.77-14.79.65-19.51-.2-10.28-1.83-20-6.91-26-13.57-2.36-2.6-6.95-9.39-6.67-9.88a20.29,20.29,0,0,1,2.36-1.5c1.14-.65,5.45-3.13,9.51-5.49l7.35-4.26,1.55,2.27c2.15,3.29,6.87,7.8,9.71,9.31,8.17,4.3,19.38,3.7,24.91-1.26a11.13,11.13,0,0,0,1.42-14.18c-2-2.85-6.05-5.25-17.59-10.24-13.21-5.69-18.9-9.23-24.1-14.84a33.72,33.72,0,0,1-7-12.8c-1-3.61-1.22-12.67-.45-16.33,2.73-12.76,12.36-21.66,26.25-24.3C191.65,116.69,202.14,117,206.57,118.11Z" transform="translate(0 0)" fill="#170c18"/></svg>
            <div className='tool-tip' role='tooltip'>Typescript</div>
            </picture>
            <Modal estado={modalTs} cambiarEstado={setModalTs} imagen={`${typescript}`} descripcion='TypeScript es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.'/> 
            
            
            <picture className='picture-container'>
              <svg onClick={()=> setModalReact(!modalReact)} className='logo-react' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 82.8"><path d="M96.5,50c0-6.2-7.7-12-19.5-15.6,2.7-12,1.5-21.6-3.8-24.7A8.48,8.48,0,0,0,69,8.6v4.2a4.77,4.77,0,0,1,2.2.5c2.6,1.5,3.7,7.1,2.8,14.3a38.87,38.87,0,0,1-1,5.6,103,103,0,0,0-12-2.1,97,97,0,0,0-7.9-9.5c6.2-5.7,12-8.9,15.9-8.9V8.6c-5.2,0-12,3.7-18.9,10.2C43.1,12.4,36.2,8.7,31,8.7v4.2c3.9,0,9.7,3.1,15.9,8.8a76.11,76.11,0,0,0-7.8,9.5,99.44,99.44,0,0,0-12,2.1c-.4-1.9-.8-3.7-1-5.5-.9-7.2.2-12.9,2.8-14.4a4.77,4.77,0,0,1,2.2-.5V8.7a7.89,7.89,0,0,0-4.3,1.1c-5.3,3.1-6.5,12.6-3.8,24.6C11.2,38.1,3.5,43.9,3.5,50S11.2,62,23,65.6c-2.7,12-1.5,21.6,3.8,24.7a8.58,8.58,0,0,0,4.3,1.1c5.2,0,12-3.7,18.9-10.2,7,6.4,13.8,10.1,19,10.1a7.89,7.89,0,0,0,4.3-1.1c5.3-3.1,6.5-12.6,3.8-24.6C88.8,62,96.5,56.1,96.5,50ZM71.8,37.4c-.7,2.4-1.6,5-2.6,7.5-.8-1.5-1.6-3-2.5-4.5s-1.8-3-2.7-4.4a63.37,63.37,0,0,1,7.8,1.4ZM63.1,57.5a81.22,81.22,0,0,1-4.6,7.2c-2.8.2-5.7.4-8.6.4a79.35,79.35,0,0,1-8.5-.4c-1.6-2.3-3.1-4.7-4.6-7.2s-2.7-5-3.9-7.5c1.2-2.5,2.5-5.1,3.9-7.6a81.22,81.22,0,0,1,4.6-7.2c2.8-.2,5.7-.4,8.6-.4a79.35,79.35,0,0,1,8.5.4c1.6,2.3,3.1,4.7,4.6,7.2s2.7,5,3.9,7.5a68,68,0,0,1-3.9,7.6Zm6.1-2.4c1,2.5,1.9,5.1,2.6,7.5q-3.75.9-7.8,1.5c.9-1.5,1.9-3,2.7-4.5a33.72,33.72,0,0,0,2.5-4.5ZM50,75.3a66.35,66.35,0,0,1-5.3-6.1c1.7.1,3.4.1,5.2.1s3.5,0,5.3-.1A63.85,63.85,0,0,1,50,75.3ZM35.9,64.1q-4-.6-7.8-1.5c.7-2.4,1.6-5,2.6-7.5.8,1.5,1.6,3,2.5,4.5S35,62.7,35.9,64.1Zm14-39.4a66.35,66.35,0,0,1,5.3,6.1c-1.7-.1-3.4-.1-5.2-.1s-3.5,0-5.3.1C46.4,28.6,48.2,26.5,49.9,24.7Zm-14,11.2c-.9,1.5-1.9,3-2.7,4.5s-1.7,3-2.5,4.5c-1-2.5-1.9-5.1-2.6-7.5q3.75-.9,7.8-1.5ZM18.8,59.6c-6.7-2.9-11-6.6-11-9.6s4.3-6.7,11-9.6c1.6-.7,3.4-1.3,5.2-1.9A85.85,85.85,0,0,0,28.3,50a101,101,0,0,0-4.2,11.5,54.06,54.06,0,0,1-5.3-1.9ZM29,86.7c-2.6-1.5-3.7-7.1-2.8-14.3a38.87,38.87,0,0,1,1-5.6,103,103,0,0,0,12,2.1,97,97,0,0,0,7.9,9.5c-6.2,5.7-12,8.9-15.9,8.9a5.8,5.8,0,0,1-2.2-.6ZM73.9,72.2c.9,7.2-.2,12.9-2.8,14.4a4.77,4.77,0,0,1-2.2.5C65,87.1,59.2,84,53,78.3a76.11,76.11,0,0,0,7.8-9.5,99.44,99.44,0,0,0,12-2.1A29.73,29.73,0,0,1,73.9,72.2Zm7.3-12.6c-1.6.7-3.4,1.3-5.2,1.9A85.85,85.85,0,0,0,71.7,50a101,101,0,0,0,4.2-11.5,54.06,54.06,0,0,1,5.3,1.9c6.7,2.9,11,6.6,11,9.6s-4.3,6.8-11,9.6Z" transform="translate(-3.5 -8.6)" fill="blueviolet"/><circle cx="46.5" cy="41.4" r="8.7" fill="blueviolet"/></svg>
              <div className='tool-tip' role='tooltip'>React js</div>
            </picture>
            <Modal estado={modalReact} cambiarEstado={setModalReact} imagen={`${react}`} descripcion='React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.'/> 
            
            
            <picture className='picture-container'>
            <svg  onClick={()=> setModalVite(!modalVite)} className='logo-vite' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2454.31 2457.39">
              <path className='fondo' d="M2464.1,381.6,1311.2,2443.2c-23.8,42.6-85,42.8-109.1.5L26.3,381.8C0,335.6,39.5,279.7,91.8,289.1L1246,495.4a64.24,64.24,0,0,0,22.3,0l1130-206C2450.3,279.9,2490,335.3,2464.1,381.6Z" transform="translate(-17.93 -17.9)" fill="#69008e"/><path className='rayito' d="M1795.7,18.5,942.5,185.7a31.39,31.39,0,0,0-25.3,28.9L864.8,1101a31.25,31.25,0,0,0,29.4,33.1,33.14,33.14,0,0,0,8.9-.7l237.5-54.8a31.29,31.29,0,0,1,37.7,36.8L1107.7,1461a31.31,31.31,0,0,0,39.8,36.2l146.7-44.6a31.34,31.34,0,0,1,39.8,36.3l-112,542.8c-7,34,38.1,52.5,57,23.4l12.6-19.4L1986.8,648.2c11.6-23.2-8.4-49.7-33.9-44.8l-244.5,47.2c-23,4.4-42.5-17-36-39.4L1832,58c6.3-22.6-13.3-44-36.3-39.5Z" transform="translate(-17.93 -17.9)" fill="blueviolet"/></svg>
              <div className='tool-tip' role='tooltip'>Vite</div>
            </picture>
            <Modal estado={modalVite} cambiarEstado={setModalVite} imagen={`${vite}`} descripcion='Vite es una herramienta para Frontend que permite crear aplicaciones de Javascript usando algún framework o libreria como ReactJs, Vuejs, Angular ya sea con algún framework especifico o Vanillajs.'/> 
            
            
            <picture className='picture-container'>
              <svg onClick={()=> setModalSass(!modalSass)} className='logo-sass' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.91 72.16"><path d="M84.4,55.3a19.26,19.26,0,0,0-8.7,2,20.16,20.16,0,0,1-2-4.5,11.84,11.84,0,0,1-.2-3.8,33.27,33.27,0,0,1,1.1-4.1c0-.2-.2-1-2.1-1s-3.6.4-3.8.9a15.78,15.78,0,0,0-.8,2.9c-.3,1.8-3.9,8-5.9,11.3a10.11,10.11,0,0,1-1.3-3.3,11.84,11.84,0,0,1-.2-3.8,33.27,33.27,0,0,1,1.1-4.1c0-.2-.2-1-2.1-1s-3.6.4-3.8.9-.4,1.7-.8,2.9-5.1,11.6-6.3,14.3A31.11,31.11,0,0,1,47,68.1c-.4.8,0,.1-.1.1l-.5,1h0c-.3.5-.5.9-.7.9a6.25,6.25,0,0,1,0-3c.7-3.6,2.4-9.3,2.4-9.5s.3-1.1-1.1-1.6a1.77,1.77,0,0,0-2,.3c-.1,0-.2.3-.2.3s1.5-6.4-2.9-6.4c-2.8,0-6.6,3-8.5,5.8-1.2.7-3.8,2-6.5,3.5-1,.6-2.1,1.2-3.1,1.7l-.2-.2C18.5,55.5,8.6,51.4,9,43.7c.2-2.8,1.1-10.2,19.1-19.1,14.7-7.3,26.5-5.3,28.5-.8C59.5,30.2,50.3,42,35,43.7c-5.8.7-8.9-1.6-9.6-2.4s-.9-.9-1.2-.8c-.5.3-.2,1.1,0,1.5a8.88,8.88,0,0,0,5.5,4.3c2.8.9,9.6,1.4,17.9-1.8C56.8,40.9,64.1,31,62,22.7c-2.2-8.5-16.2-11.2-29.5-6.5C24.6,19,16,23.4,9.9,29.2,2.6,36,1.4,42,1.9,44.5c1.7,8.8,13.9,14.6,18.8,18.9-.2.1-.5.3-.7.4C17.5,65,8.2,69.8,5.9,75c-2.6,5.8.4,10,2.4,10.6,6.3,1.7,12.7-1.4,16.2-6.5s3-11.9,1.4-14.9l-.1-.1L27.7,63c1.2-.7,2.5-1.4,3.5-2a26.34,26.34,0,0,0-1.3,6.4c-.3,3.3,1.1,7.6,2.9,9.3a3.38,3.38,0,0,0,2.3.8c2.1,0,3-1.7,4-3.8a58.88,58.88,0,0,0,2.4-5.4s-1.4,7.8,2.4,7.8c1.4,0,2.8-1.8,3.5-2.8h0a.31.31,0,0,1,.1-.2.52.52,0,0,0,.2-.4h0c.6-1,1.8-3.2,3.7-6.9C54,60.9,56.3,55,56.3,55a29.34,29.34,0,0,0,.9,3.9,34.62,34.62,0,0,0,2,4.5l-.9,1.2h0c-.5.6-1,1.2-1.5,1.9a66.4,66.4,0,0,0-4.5,5.6,1.55,1.55,0,0,0,.4,2.1,3.49,3.49,0,0,0,2.4.4,9.4,9.4,0,0,0,3.5-.8,9.8,9.8,0,0,0,3-1.6,6.81,6.81,0,0,0,2.9-6A12.44,12.44,0,0,0,63.4,62a5.58,5.58,0,0,0,.5-.8,74.47,74.47,0,0,0,5.3-9.1,29.34,29.34,0,0,0,.9,3.9,42.07,42.07,0,0,0,1.7,3.9,16.7,16.7,0,0,0-5.1,6.6c-1.1,3.2-.2,4.6,1.4,5a5,5,0,0,0,2.6-.5,10,10,0,0,0,3.2-1.7c1.9-1.4,3.7-3.3,3.6-5.9a13.71,13.71,0,0,0-.8-3.5A18.75,18.75,0,0,1,86,58.8c8.3,1,10,6.2,9.7,8.4A5.93,5.93,0,0,1,93.1,71c-.6.4-.8.5-.7.8s.3.4.8.3a6.41,6.41,0,0,0,4.5-5.8c.3-5.4-4.6-11-13.3-11ZM20,77.1c-2.8,3-6.6,4.2-8.3,3.2s-1.1-5.5,2.3-8.7a40.94,40.94,0,0,1,6.5-4.9c.4-.2,1-.6,1.7-1a.31.31,0,0,1,.2-.1c.1-.1.3-.2.4-.3A11.94,11.94,0,0,1,20,77.1ZM40.2,63.3c-1,2.3-3,8.4-4.2,8s-1.7-4.8-.2-9.3a19.4,19.4,0,0,1,3.3-6c1.5-1.7,3.2-2.3,3.6-1.6C43.1,55.3,40.8,61.9,40.2,63.3Zm16.6,8c-.4.2-.8.4-1,.2s.2-.4.2-.4,2.1-2.2,2.9-3.3c.5-.6,1-1.3,1.6-2.1v.2c.1,2.9-2.5,4.7-3.7,5.4Zm12.9-2.9c-.3-.2-.3-.9.8-3.1a11.33,11.33,0,0,1,2.9-3.7,5,5,0,0,1,.3,1.6A5.77,5.77,0,0,1,69.7,68.4Z" transform="translate(-1.8 -13.91)" fill="blueviolet"/></svg>
              <div className='tool-tip' role='tooltip'>Sass</div>
            </picture>
            <Modal estado={modalSass} cambiarEstado={setModalSass} imagen={`${sass}`} descripcion='Sass es un metalenguaje de CSS. Es un lenguaje de script que es traducido a CSS, SassScript es el lenguaje de script en sí mismo.'/> 
            
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalBootstrap(!modalBootstrap)} className='logo-bootstrap' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.3 75.8"><path d="M22.2,12.1A9.54,9.54,0,0,0,12.9,22c.2,5-.1,11.4-1.7,16.6s-4.4,8.6-8.8,9v4.8c4.5.4,7.2,3.8,8.8,9S13,73.1,12.9,78a9.42,9.42,0,0,0,9.3,9.9H77.9A9.54,9.54,0,0,0,87.2,78c-.2-5,.1-11.4,1.7-16.6s4.4-8.6,8.8-9V47.6c-4.5-.4-7.2-3.8-8.8-9S87.1,26.9,87.2,22a9.42,9.42,0,0,0-9.3-9.9ZM66.9,58.8c0,7.1-5.3,11.4-14.1,11.4h-15a1.58,1.58,0,0,1-1.6-1.6h0V31.4a1.58,1.58,0,0,1,1.6-1.6H52.7c7.3,0,12.1,4,12.1,10.1a9,9,0,0,1-7.4,8.8v.2c5.8.6,9.5,4.5,9.5,9.9ZM51.2,34.9H42.7V47h7.2c5.6,0,8.6-2.2,8.6-6.2,0-3.8-2.6-5.9-7.3-5.9ZM42.7,51.8V65.1h8.8c5.8,0,8.8-2.3,8.8-6.7s-3.1-6.6-9.2-6.6Z" transform="translate(-2.4 -12.1)" fill="blueviolet" fill-rule="evenodd"/></svg>
            <div className='tool-tip' role='tooltip'>Bootstrap</div>
            </picture>
            <Modal estado={modalBootstrap} cambiarEstado={setModalBootstrap} imagen={`${bootstrap}`} descripcion='Bootstrap es una biblioteca multiplataforma para diseño de sitios y aplicaciones web. Contiene elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales. A diferencia de muchos frameworks web, solo se ocupa del desarrollo front-end.'/> 
            

            <picture className='picture-container'>
            <svg onClick={()=> setModalVSCode(!modalVSCode)} className='logo-vscode' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.11 93"><path className='part2' d="M3.7,35.4s-2.3-1.7.5-3.9l6.4-5.7a2.73,2.73,0,0,1,3.8-.2L73.5,70.3V91.7s0,3.4-4.4,3Z" transform="translate(-2.81 -3.01)" fill="#58017c"/><path className='part4' d="M18.9,49.3,3.7,63.1s-1.6,1.2,0,3.2l7.1,6.4s1.7,1.8,4.2-.2L31.1,60.3Z" transform="translate(-2.81 -3.01)" fill="#380456"/><path className='part3' d="M45.7,49.4,73.6,28,73.4,6.7S72.2,2,68.2,4.5L31.1,38.3Z" transform="translate(-2.81 -3.01)" fill="#4b036d"/><path className='part1' d="M69.1,94.8a3.71,3.71,0,0,0,3.6,1.1L94.5,85.2c2.8-1.9,2.4-4.3,2.4-4.3v-64c0-2.8-2.9-3.8-2.9-3.8L75.1,4c-4.1-2.5-6.8.5-6.8.5S71.8,2,73.5,6.7V91.4a3.29,3.29,0,0,1-.4,1.7c-.5,1-1.6,1.9-4.2,1.5Z" transform="translate(-2.81 -3.01)" fill="blueviolet"/></svg>
            <div className='tool-tip' role='tooltip'>VS Code</div>
            </picture>
            <Modal estado={modalVSCode} cambiarEstado={setModalVSCode} imagen={`${vscode}`} descripcion='Visual Studio Code es un editor de código fuente.'/> 
            
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalGit(!modalGit)} className='logo-git' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.66 98.75"><path d="M97.1,45.6,54.1,2.5a6.34,6.34,0,0,0-9,0h0l-8.9,8.9L47.5,22.7a7.55,7.55,0,0,1,9.6,9.6L68,43.4a7.6,7.6,0,0,1,7.8,1.8,7.49,7.49,0,0,1,0,10.7h0a7.49,7.49,0,0,1-10.7,0,7.39,7.39,0,0,1-1.6-8.2L53.2,37.4V64.2a9,9,0,0,1,2,1.4,7.49,7.49,0,0,1,0,10.7h0A7.57,7.57,0,0,1,44.5,65.6,8.52,8.52,0,0,1,47,63.9V37a7,7,0,0,1-2.5-1.7A7.55,7.55,0,0,1,42.9,27L31.7,15.9,2.2,45.4a6.34,6.34,0,0,0,0,9h0L45.3,97.5a6.34,6.34,0,0,0,9,0L97.2,54.6a6.43,6.43,0,0,0-.1-9" transform="translate(-0.33 -0.63)" fill="blueviolet"/></svg>
            <div className='tool-tip' role='tooltip'>Git</div>
            </picture>
            <Modal estado={modalGit} cambiarEstado={setModalGit} imagen={`${git}`} descripcion='Git es un software de control de versiones. Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.'/> 
            
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalGithub(!modalGithub)} className='logo-github' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 95.67"><path d="M49.8,4.2A49,49,0,0,0,34.3,99.7c2.4.5,3.3-1.1,3.3-2.4s0-5-.1-9.1C23.9,91.2,21,82.4,21,82.4c-2.2-5.7-5.4-7.2-5.4-7.2-4.4-3,.3-3,.3-3,4.9.3,7.5,5,7.5,5,4.4,7.5,11.5,5.3,14.3,4.1a10.5,10.5,0,0,1,3.1-6.6c-10.8-1.1-22.3-5.3-22.3-24a19.43,19.43,0,0,1,5-13.2c-.5-1.2-2.2-6.2.5-13,0,0,4.1-1.3,13.5,5a45.61,45.61,0,0,1,12.3-1.6,50,50,0,0,1,12.3,1.6c9.4-6.3,13.5-5,13.5-5,2.7,6.7,1,11.7.5,13a19.06,19.06,0,0,1,5,13.2c0,18.8-11.5,23-22.4,24.2C60.5,76.4,62,79.4,62,84c0,6.6-.1,11.8-.1,13.4,0,1.3.9,2.8,3.4,2.4A49.07,49.07,0,0,0,49.8,4.2" transform="translate(-0.8 -4.2)" fill="blueviolet"/><path d="M19.1,74a.59.59,0,0,1-.8.1c-.4-.2-.6-.5-.4-.7s.5-.3.8-.2.6.6.4.8m2.5,2.2c-.2.2-.7.1-1-.2s-.4-.8-.1-1,.7-.1,1,.2a.92.92,0,0,1,.1,1m1.6,2.7c-.3.2-.8,0-1.1-.4s-.3-1,0-1.2.8,0,1.1.4.3,1,0,1.2M26,82.1c-.3.3-.8.2-1.3-.2a1.15,1.15,0,0,1-.3-1.3c.3-.3.8-.2,1.3.2s.6,1,.3,1.3m3.6,1.1c-.1.4-.7.6-1.2.4s-.9-.6-.8-1,.7-.6,1.2-.4a.88.88,0,0,1,.8,1m4.1.4c0,.4-.5.7-1,.7s-1.1-.3-1.1-.7.5-.7,1-.7c.7,0,1.1.3,1.1.7m4.1-.1c.1.4-.3.8-.9.9s-1.1-.1-1.2-.5.3-.8.9-.9a.89.89,0,0,1,1.2.5" transform="translate(-0.8 -4.2)" fill="blueviolet"/></svg>
            <div className='tool-tip' role='tooltip'>Github</div>
            </picture>
            <Modal estado={modalGithub} cambiarEstado={setModalGithub} imagen={`${github}`} descripcion='Github es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git.'/> 
            
            
            <picture className='picture-container'>
            <svg onClick={()=> setModalWordpress(!modalWordpress)} className='logo-wordpress' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 95"><path d="M8.9,50.5a40.84,40.84,0,0,0,23,36.7L12.4,33.9A41.2,41.2,0,0,0,8.9,50.5Zm68.2-2.1a20.93,20.93,0,0,0-3.4-11.2c-2.1-3.4-4-6.2-4-9.6a7,7,0,0,1,6.8-7.2H77a40.65,40.65,0,0,0-61.4,7.8h2.6c4.3,0,10.9-.5,10.9-.5a1.71,1.71,0,0,1,.3,3.4s-2.2.3-4.7.4L39.5,75.6l8.9-26.7L42,31.4c-2.2-.1-4.3-.4-4.3-.4-2.2-.1-1.9-3.5.3-3.4,0,0,6.7.5,10.7.5,4.3,0,10.9-.5,10.9-.5a1.71,1.71,0,0,1,.3,3.4s-2.2.3-4.7.4L69.9,75.2,74,61.6c1.8-5.6,3.1-9.7,3.1-13.2Z" transform="translate(-2.1 -3)" fill="blueviolet"/><path d="M50.3,54.1,38.1,89.6a40.29,40.29,0,0,0,25-.6l-.3-.6ZM85.4,30.9a27.66,27.66,0,0,1,.3,4.2,39.06,39.06,0,0,1-3.1,14.6l-12.4,36A40.84,40.84,0,0,0,90.5,50.5a43.31,43.31,0,0,0-5.1-19.6Z" transform="translate(-2.1 -3)" fill="blueviolet"/><path d="M49.6,3A47.5,47.5,0,1,0,97.1,50.5,47.54,47.54,0,0,0,49.6,3Zm0,92.8A45.3,45.3,0,1,1,94.9,50.5,45.32,45.32,0,0,1,49.6,95.8Z" transform="translate(-2.1 -3)" fill="blueviolet"/></svg>
            <div className='tool-tip' role='tooltip'>Wordpress</div>
            </picture>
            <Modal estado={modalWordpress} cambiarEstado={setModalWordpress} imagen={`${wordpress}`} descripcion='Wordpress es un sistema de gestión de contenidos, enfocado a la creación de cualquier tipo de página web'/> 
            
            
          </div>
        </div>  
        <div className="skills-info-contenido-contenedor">
          <h4 className="skills-info-contenido-subtitulo">DISEÑO</h4>
          <div className="skills-info-contenido-logos">
            <picture className='picture-container'>
            <svg onClick={()=> setModalFigma(!modalFigma)} className='logo-figma' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.8 100"><path className='bola5' d="M33.3,100A16.73,16.73,0,0,0,50,83.3V66.7H33.3a16.65,16.65,0,1,0,0,33.3Z" transform="translate(-16.6 0)" fill="#9e04d4"/><path className='bola3' d="M16.7,50A16.73,16.73,0,0,1,33.4,33.3H50V66.6H33.3A16.5,16.5,0,0,1,16.7,50Z" transform="translate(-16.6 0)" fill="#410058"/><path className='bola1' d="M16.7,16.7A16.64,16.64,0,0,1,33.3,0H50V33.3H33.3A16.56,16.56,0,0,1,16.7,16.7Z" transform="translate(-16.6 0)" fill="#69008e"/><path className='bola2' d="M50,0H66.7a16.7,16.7,0,1,1,0,33.4H50Z" transform="translate(-16.6 0)" fill="blueviolet"/><path className='bola4' d="M83.3,50A16.65,16.65,0,1,1,66.7,33.3,16.73,16.73,0,0,1,83.3,50Z" transform="translate(-16.6 0)" fill="#8a03b9"/></svg>
            <div className='tool-tip' role='tooltip'>Figma</div>
            </picture>
            <Modal estado={modalFigma} cambiarEstado={setModalFigma} imagen={`${figma}`} descripcion='Figma es un editor de gráficos vectorial y una herramienta de generación de prototipos, principalmente basada en la web'/> 

            <picture className='picture-container'>
            <svg onClick={()=> setModalPhotoshop(!modalPhotoshop)} className='logo-photoshop logo-marca' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.4 95.9"><path className='fondo' d="M18.5,2H82.1A17.41,17.41,0,0,1,99.5,19.4V80.5A17.41,17.41,0,0,1,82.1,97.9H18.5A17.26,17.26,0,0,1,1.1,80.6V19.4A17.41,17.41,0,0,1,18.5,2Z" transform="translate(-1.1 -2)" fill="blueviolet"/><path className='letra' d="M23.3,69.3V27.1c0-.3.1-.5.4-.5H26c1,0,2,0,3.1-.1s2.3,0,3.6-.1h3.7a23.38,23.38,0,0,1,8.5,1.3,13.74,13.74,0,0,1,5.5,3.4,13.52,13.52,0,0,1,3,4.7,16,16,0,0,1,.9,5.3,13.72,13.72,0,0,1-9.1,13.7A27.31,27.31,0,0,1,36,56.2H32.1V69.4a.63.63,0,0,1-.5.6h-8C23.4,69.9,23.3,69.7,23.3,69.3Zm8.9-34.7V48.4c.6,0,1.1.1,1.6.1H36a14.87,14.87,0,0,0,4.7-.7,6.94,6.94,0,0,0,3.4-2.2,6,6,0,0,0,1.3-4.2,8.08,8.08,0,0,0-.9-3.7,5.48,5.48,0,0,0-2.9-2.3,11.3,11.3,0,0,0-4.8-.8H34a5.1,5.1,0,0,0-1.8,0Z" transform="translate(-1.1 -2)" fill="#170c18"/><path className='letra' d="M79.9,45.9A13,13,0,0,0,76,44.5a23.15,23.15,0,0,0-4.6-.5,10.68,10.68,0,0,0-2.5.3,2.22,2.22,0,0,0-1.3.8,2,2,0,0,0-.3,1.1,2.46,2.46,0,0,0,.4,1.1,4.86,4.86,0,0,0,1.4,1.1c.9.5,1.9.9,2.9,1.4a30.3,30.3,0,0,1,6.3,3,8.68,8.68,0,0,1,3.2,3.4,7.62,7.62,0,0,1,.9,4.2,9.81,9.81,0,0,1-1.6,5.5,10.54,10.54,0,0,1-4.6,3.7,18.16,18.16,0,0,1-7.4,1.3,35.32,35.32,0,0,1-5.6-.5A15.73,15.73,0,0,1,59,69.1a1,1,0,0,1-.5-.8V61a.4.4,0,0,1,.2-.4c.1-.1.2,0,.4,0a18.68,18.68,0,0,0,5.1,2,19.73,19.73,0,0,0,4.8.6,7.1,7.1,0,0,0,3.4-.6,1.85,1.85,0,0,0,1.1-1.7,1.94,1.94,0,0,0-1-1.6,21.74,21.74,0,0,0-4-1.9,21.32,21.32,0,0,1-5.8-3,10.46,10.46,0,0,1-3.1-3.5,7.62,7.62,0,0,1-.9-4.2,9.65,9.65,0,0,1,5.7-8.8,15.59,15.59,0,0,1,7.3-1.4,29.22,29.22,0,0,1,5.1.4,20,20,0,0,1,3.5.9c.2,0,.3.2.4.4s.1.3.1.5v6.7a.52.52,0,0,1-.2.4A2.64,2.64,0,0,1,79.9,45.9Z" transform="translate(-1.1 -2)" fill="#170c18"/></svg>
            <div className='tool-tip' role='tooltip'>Photoshop</div>
            </picture>
            <Modal estado={modalPhotoshop} cambiarEstado={setModalPhotoshop} imagen={`${photoshop}`} descripcion='Adobe Photoshop es un editor de fotografías usado principalmente para el retoque de fotografías y gráficos'/> 
            
            

            <picture className='picture-container'>
            <svg onClick={()=> setModalIllustrator(!modalIllustrator)} className='logo-illustrator' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.1 94.7"><path className='fondo' d="M18.3,3H81A17.2,17.2,0,0,1,98.2,20.2V80.5A17.2,17.2,0,0,1,81,97.7H18.3A17.26,17.26,0,0,1,1.1,80.5V20.2A17.2,17.2,0,0,1,18.3,3Z" transform="translate(-1.1 -3)" fill="blueviolet"/><path className='letra' d="M48.1,59.8h-15L30,69.3a.76.76,0,0,1-.8.6H21.6c-.4,0-.6-.2-.4-.7l13-37.5a9.29,9.29,0,0,1,.4-1.3,11,11,0,0,0,.2-2.6c0-.2.1-.4.3-.4H45.6c.3,0,.5.1.5.3L61,69.2c.1.4,0,.6-.4.6H52.1c-.3,0-.6-.2-.6-.4ZM35.4,51.6H45.7c-.2-.8-.6-1.9-.9-2.9s-.7-2.3-1.1-3.5-.8-2.5-1.2-3.7-.8-2.4-1.1-3.6-.6-2.2-.9-3.2h-.1A50.09,50.09,0,0,1,39,39.9c-.6,1.9-1.2,4-1.9,6a29.38,29.38,0,0,1-1.7,5.7Z" transform="translate(-1.1 -3)" fill="#170c18"/><path className='letra' d="M69.8,34.1a5.43,5.43,0,0,1-3.6-1.4A5.49,5.49,0,0,1,64.8,29a4.75,4.75,0,0,1,1.5-3.6A5.43,5.43,0,0,1,69.9,24a5,5,0,0,1,3.7,1.4A4.88,4.88,0,0,1,74.9,29a5,5,0,0,1-1.4,3.7A4.68,4.68,0,0,1,69.8,34.1ZM65.3,69.3V38.1c0-.4.2-.6.5-.6h8c.4,0,.5.2.5.6V69.2c0,.4-.2.6-.5.6H65.9C65.5,69.9,65.3,69.7,65.3,69.3Z" transform="translate(-1.1 -3)" fill="#170c18"/></svg>
            <div className='tool-tip' role='tooltip'>Illustrator</div>
            </picture>
            <Modal estado={modalIllustrator} cambiarEstado={setModalIllustrator} imagen={`${illustrator}`} descripcion='Adobe Illustrator es un editor de gráficos vectoriales sirve para editar, entre otras cosas'/> 
            
            
            
          </div>
        </div>  
        
      </div>
    </section>
  )
}

export default Skills