import './Card.css'
import { useInView } from 'react-intersection-observer';

const Card = ({imagen, nombre, url, url2, children})=>{
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return(
    <div className="card-container">
        <img src={imagen} alt="Imagen de proyecto" className='card-img'/>
      <div className="card-info-container">
        <h3 className="card-title">{nombre}</h3>
        <div className="card-logos">{children}</div>
        <div className='buttons-container'>
          {url && (<a href={url} className='card-button' target="_blanck">
           <i class="bi bi-github"></i>
          </a>
          )}
          <a href={url2} className='card-button' target="_blanck">
            <i class="bi bi-window"></i>
          </a></div>

      </div>
    </div>
  )
}

export default Card
