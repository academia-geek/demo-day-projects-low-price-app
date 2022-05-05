import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'
import Popups from './Popups'


const Markers = ({estaciones}) => {
  const markers = estaciones.map(estacion => (
    <Marker key={estaciones.id} position={estacion.geometry} icon={IconLocation}>
      <Popups data={estacion} />
    </Marker>
  ));
  return markers;
}

export default Markers;