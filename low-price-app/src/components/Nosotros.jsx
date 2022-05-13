import React from 'react'
import Daniel from '../assets/Daniel.jpeg'
import Lizeth from '../assets/Lizeth.jpeg'
import Yineth from '../assets/Yineth.png'
import estilos from '../styles/_nosotros.scss'

const Nosotros = () => {
  return (
      <div className='nosotros'>
   <center><h1 className='tituloN'>Equipo Low Price App</h1></center>
    <div className='generalNosotros'>
        
        <div>
            <img className='imgD' src={Daniel} alt="" />
            <p>Daniel josé Correa</p>
            <p>Desarrollador Front-End</p>  
        </div>
        <div>
            <img className='imgD'src={Lizeth} alt="" />
            <p>Lizeth Paola Delgadillo</p>
            <p>Desarrolladora Front-End</p>
        </div>
        <div>
            <img className='imgD'src={Yineth} alt="" />
            <p>Yineth Paola Duarte</p>
            <p>Desarrolladora Front-End</p>
        </div>
    </div>
    <div className='p1'>
    <p>Lou Price App es una herramienta que surge como respuesta a las necesidades de aquellas personas
        que tienen vehículos y no han logrado encontrar una estación de gasolina confiable, con precios justos, 
        con los productos indicados y de la calidad requerida.
    </p>
    <p>
        En Low Price App encontrarás una Herramienta confiable y fácil de navegar con la cual podrás
        tomar la mejor decisión para tí y tu vehículo.
    </p>
    </div>
    </div>
  )
}

export default Nosotros