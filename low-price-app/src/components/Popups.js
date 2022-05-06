import React from 'react'
import { Popup } from 'react-leaflet';

const Popups = (props) => {
  const { name, precio } = props.data;
  
  return (
    <Popup>
      <h3>{name}</h3>
       <p><strong>Corriente:</strong>{precio?.gasolinaCorrienteNumero}</p> 
       <p><strong>Extra:</strong>{precio?.gasolinaExtraNumero}</p> 
       <p><strong>ACPM:</strong>{precio?.acpmNumero}</p> 
       <button>Modificar</button>
    </Popup>
  )
}

export default Popups