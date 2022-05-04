import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Markers from './Markers'
import estaciones from '../data/dataCopy'

const MapView = ( ) => {
  const [state, setState] = useState({
      lat: '4.707151617979109', lng: '-74.22277595106928' ,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          lng: position.coords.longitude,
          lat: position.coords.latitude
        })
      },
      function (error) {
        console.log(error)
      },
      { enableHighAccuracy: true }
    );
  });


  return (
    <MapContainer center={{lat:state.lat, lng:state.lng}} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers estaciones={estaciones} />
    </MapContainer>
  )

}


export default MapView

