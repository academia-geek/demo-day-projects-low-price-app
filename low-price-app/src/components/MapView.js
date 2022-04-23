import React from 'react';
import 'leaflet/dist/leaflet.css'
import {  MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Markers from './Markers'

// import icon from '../assets/png-transparent-google-map-maker-google-maps-computer-icons-pin-red-and-white-logo-angle-heart-map.png'




const MapView = ()=>{
  const position = [4.712658567400816, -74.22650127759806]//Aqui tenemos que obtener la ubicacion de las personas y ponerla, por el momento pongo una de prueba para que pinte el mapa

  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position} >
        <Popup>
          Holiii por aca vivo Jejeje . <br /> Estamos en Mosquera .
        </Popup>
      </Marker> */}
      <Markers/>
    </MapContainer>
  )
  
}


export default MapView

