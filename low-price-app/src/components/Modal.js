import React from 'react'
import '../styles/Modal.css'


const Modal = ({children, isOpen, closeModal}) => {
  const handleModalContainerClick = e => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
      <div className='modalContainer' onClick={handleModalContainerClick}>
        <button onClick={closeModal} className='modalClose'>X</button>
        {children}
      </div>
    </article>
  )
}

export default Modal