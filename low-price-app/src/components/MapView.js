import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Markers from './Markers'
import estaciones from '../data/dataCopy'
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import favorito from '../assets/star - copia.png'
import acercaDe from '../assets/Vector.png'
import actualizar from '../assets/actualizar.png'
import perfil from '../assets/perfil.png'
import agregar from '../assets/Plus.png'
import salir from '../assets/cerrarSesion.png'

const MapView = ( ) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
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
      <div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3 className='title'>LOW PRICE APP</h3>
        <section>
          <p className='subTitle'>General</p>

          <p><img src={favorito} alt='' />  Favoritos</p>
          <p><img src={agregar}/>   Agregar Estacion</p>
          <p><img src={actualizar} width="10%"/>  Actualizar Precios</p>
        </section>
        <section>
          <p className='subTitle'>Mi Cuenta</p>
          <p><img src={perfil} alt='' />  Perfil</p>
        </section>
        <section>
          <p className='subTitle'>Otros</p>
          <p><img src={acercaDe} alt='' />  Sobre Nosotros</p>
        </section>
        <section>
          <p className='subTitle'>Salir</p>
          <p><img  width="10%" src={salir} alt='' />  Cerrar Sesión</p>
        </section>
      </Modal>
      <MapContainer center={{ lat: state.lat, lng: state.lng }} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers estaciones={estaciones} />
        <button onClick={openModal} className='Menu'></button>
      </MapContainer>
      </div>
  )
}
export default MapView

