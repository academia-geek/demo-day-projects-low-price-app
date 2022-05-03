import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Markers from './Markers'
// import  {estaciones}  from '../data/data.json'
import estaciones from '../data/dataCopy'
import { useLocation } from 'react-router-dom';

// import icon from '../assets/png-transparent-google-map-maker-google-maps-computer-icons-pin-red-and-white-logo-angle-heart-map.png'


const MapView = () => {
  // const position = [4.712658567400816, -74.22650127759806]//Aqui tenemos que obtener la ubicacion de las personas y ponerla, por el momento pongo una de prueba para que pinte el mapa

  const [state, setState] = useState({
    currentLocation: { lat: '4.707151617979109', lng: '-74.22277595106928' },
    zoom: 15
  })

  const location = useLocation()
  // console.log(location)
  // useEffect(()=>{
  //   if (location.state.latitude && location.state.longitude) {
  //     const currentLocation = {
  //       lat: location.state.latitude,
  //       lng: location.state.longitude
  //     }
  //   }
  // })


  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers estaciones={estaciones} />
    </MapContainer>
  )

}


export default MapView

