import React from 'react'
import { Popup } from 'react-leaflet';

const Popups = (props) => {
  const { name, description } = props.data;
  return (
    <Popup>
      <h3>{name}</h3>
      <p>{description}</p>
    </Popup>
  )
}

export default Popups