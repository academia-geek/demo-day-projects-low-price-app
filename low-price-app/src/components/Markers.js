import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'


const Markers = (props) => {
  const { estaciones } = props
  const markers = estaciones.map(estacion => (
    <Marker
      key={estaciones.id}
      position={estacion.geometry}
      icon={IconLocation}
    />
  ));
  return markers;
}

export default Markers;