import './Modal.css'

const Modal = ({estado, cambiarEstado, descripcion, imagen})=>{
  return(
    <>
    {estado &&
      <div className='skill-modal-contenedor'>
      <div className="skill-modal">
        <div className='boton-container'>
        <i onClick={()=> cambiarEstado(false)} class="bi bi-x-lg"></i>
        </div>
        <img src={imagen} alt="" />
        <p className="skill-modal-informacion">{descripcion}</p>
      </div>
    </div>
    }
    </>
  )
}

export default Modal