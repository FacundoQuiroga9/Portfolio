import './Card.css'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Card = ({imagen, nombre, url, url2, children})=>{
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const cardAnimation = {
    hidden: {  opacity:0},
    visible: { opacity: 1 },
  };
  return(
    <motion.div className="card-contenedor"
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={cardAnimation}
    transition={{duration:1, delay:1}}
    >
        <img src={imagen} alt="Imagen de proyecto" className='card-img'/>
      <div className="card-info-contenedor">
        <h3 className="card-info-nombre">{nombre}</h3>
        <div className="card-info-logos">{children}</div>
        <div className='enlaces-contenedor'><a href={url} className='card-info-button' target="_blanck">
          <svg class="card-info-button-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href={url2} className='card-info-button' target="_blanck">
        <svg className='card-info-button-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
        </a></div>

      </div>
    </motion.div>
  )
}

export default Card
