import './Contact.css'
import imagenContacto from "../../imagenes/fq.png"
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Contact = ()=>{
  const [t, i18n]= useTranslation("global")
  const validarFormulario = (nombre, email,mensaje)=>{
    const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if(!(nombre.trim().length > 3)){
      return'name'
    }if(!(regex.test(email))){
      return "e-mail"
    }if(mensaje.length< 50){
     return "message"
    }
  }
  const [nombre, setNombre]= useState('')
  const [email, setEmail]= useState('')
  const [mensaje, setMensaje]= useState('')
  const error = validarFormulario(nombre, email,mensaje)
  const modal = document.querySelector('.desactivado')



  const ocultarModal =()=>{
    modal.classList.remove('contacto-modal-contenedor')
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const contactTitleAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const contactFormAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const contactPhotoAnimation = {
    hidden: {  x:300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  return(
    <div id='contacts' className='section'>
    <motion.h3 className="section-title"
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={contactTitleAnimation}
    transition={{duration:1, delay:.5}}
    >
      {t("contact.section")}
      </motion.h3>
    <div className='contacto-contenedor'>
      <div className="formulario-contenedor">



      <motion.form action='' className='formulario' id='formulario'
          onSubmit={e=>{
            e.preventDefault();
            if(!error){
              emailjs.sendForm('service_pjc9e5i','template_blsf4ww', e.target,'eyhRaGuc2ZMqOOaax')
            .then(modal.classList.add('contacto-modal-contenedor'))
            .catch(error => console.log(error))
            setNombre('')
            setEmail('')
            setMensaje('')
            }
            }}
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={contactFormAnimation}
            transition={{duration:1, delay:1}}
    >
        <label htmlFor='nombre'>{t("contact.name")} <span>*</span></label>
        <input  name="nombre" type="text" className="formulario-nombre" value={nombre} onChange={e =>setNombre(e.target.value)} required/>
        <label htmlFor='mail'>{t("contact.e-mail")} <span>*</span></label>
        <input placeholder={t("contact.placeholder")}  name="mail" type="text" className="formulario-mail" onChange={e =>setEmail(e.target.value)} value={email} required/>
        <label htmlFor='mensaje'>{t("contact.message")} <span>*</span></label>
        <textarea name="mensaje" type="textarea" className="formulario-mensaje" onChange={e =>setMensaje(e.target.value)} value={mensaje} required/>
        <p>{error ? t(`contact.err-${error}`):""}</p>
        <button type="submit" disabled={error} className="formulario-boton">{t("contact.button")}</button>
      </motion.form>
      <div>
          <motion.div className="contenedor-fondo-imagen"
           ref={ref}
           initial="hidden"
           animate={inView ? 'visible' : 'hidden'}
           variants={contactPhotoAnimation}
           transition={{duration:1, delay:1}}
          >
            <div className='contenedor-imagen-contacto'>
             <img src={imagenContacto} alt="Foto de Facundo Quiroga" className='formulario-imagen'/>
            </div>
         </motion.div>
         <motion.div className="contacto-logos"
         ref={ref}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
         variants={contactPhotoAnimation}
         transition={{duration:1, delay:1}}
         >
        <a href="https://www.linkedin.com/in/facundo-quirogaga/" target='_blanck'>
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://wa.me/+542804569725?text=" target='_blanck'>
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="mailto:contacto@quirogafacundo.com" target='_blanck'>
          <i class="bi bi-envelope-fill"></i>
        </a>
        <a href="https://github.com/FacundoQuiroga9?tab=repositories" target='_blanck'>
          <i class="bi bi-github"></i>
        </a>
      </motion.div>
        </div>
      </div>

      <div className="desactivado">
      <div className="contacto-modal">
        <p className="contacto-modal-agradecimiento">{t("contact.modal.thanks")}</p>
        <button onClick={ocultarModal} className='formulario-boton'>{t("contact.modal.button")}</button>
      </div>
      </div>

    </div>
    </div>
  )

}


export default Contact
