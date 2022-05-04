import React, { useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import useGeoLocation from '../hooks/useGeoLocation';
import estaciones from '../data/dataCopy'

const Map = () => {
  const [center, setCenter] = useState({ lat: 4.707151617979109, lng: -74.22277595106928 });
  const zoom = 15;
  const mapRef = useRef();

  const markerIcon= new L.Icon({
    iconUrl: require('../assets/PingUbicacion.png'),
    iconSize: [45, 45],
    // iconAnchor:[17, 45],
    // popupAnchor:[0,-46],
  })

  const location = useGeoLocation();

  // const showMyLocation = ()=>{
  //   if(location.loaded && !location.error){
  //     mapRef.current.leafletElement.flyTo([location.coordinates.lat, location.coordinates.lng], zoom, {animate:true})
  //   }else{
  //     alert(location.error.message)
  //   }
  // }
  return (
    <div>
      <MapContainer center={center} zoom={zoom} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {estaciones.map((estacion, index) =>
          <Marker
            position={estacion.geometry}
            icon={markerIcon}
            key={index}
          >
            <Popup>
              <b>{estacion.name}</b>
              <p>{estacion.description}</p>
            </Popup>
          </Marker>)}

        {/* {
       location.loaded && !location.error && (
         <Marker 
         position={[location.coordinates.lat, location.coordinates.lng]}
         icon={markerIcon}
         
         ></Marker>
       )
     } */}
      </MapContainer>
      {/* <button onClick={showMyLocation}>Volver a mi localizacion</button> */}
    </div>
    
  )
}

export default Map