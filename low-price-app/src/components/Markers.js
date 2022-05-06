import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'
import Popups from './Popups'


const Markers = ({estaciones}) => {

  console.log(estaciones)
  
  const markers = estaciones.map((estacion, index )=> (
    <Marker key={index} position={estacion.geometry} icon={IconLocation}>
      <Popups data={estacion} />
    </Marker>
  ));
  return markers;
}

export default Markers;

