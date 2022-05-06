import React from 'react'
import { Popup } from 'react-leaflet';

const Popups = (props) => {
  const { name, precio } = props.data;
  return (
    <Popup>
      <h3>{name}</h3>
      {/* <p>{precio.gasolinaExtraNumero}</p> */}
      <button>Actualizar</button>
    </Popup>
  )
}

export default Popups