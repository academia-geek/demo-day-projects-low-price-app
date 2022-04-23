import React from 'react'
import { Marker} from 'react-leaflet'
import { IconLocation } from './IconLocation'

const Markers = () => {
  return (
    <Marker position={{ lat: '4.712658567400816', lng:'-74.22650127759806'}} icon={IconLocation} />  //Esta posicion debe ser la misma que recibimos de la persona, este es el marcador que se pone en la ubicacion
  )
}

export default Markers