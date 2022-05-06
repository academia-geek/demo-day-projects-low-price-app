import React, { useEffect } from 'react'
import { Marker } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { listAsynFavoritos } from '../redux/actions/actionFavoritos'
import { IconLocation } from './IconLocation'
import Popups from './Popups'


const Markers = ({estaciones, favoritos}) => {
  
  const markers = estaciones.map((estacion, index )=> (
    <Marker key={index} position={estacion.geometry} icon={IconLocation}>
      <Popups data={{name: estacion.name, precio: estacion.precio, id:estacion.id, favoritos: favoritos}} />
    </Marker>
  ));
  return markers;
}

export default Markers;

