import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Markers from './Markers'
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import favorito from '../assets/star - copia.png'
import acercaDe from '../assets/Vector.png'
import actualizar from '../assets/actualizar.png'
import perfil from '../assets/perfil.png'
import agregar from '../assets/Plus.png'
import salir from '../assets/cerrarSesion.png'
import { logoutAsync } from '../redux/actions/actionLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listAsyn } from '../redux/actions/actionEstaciones';



const MapView = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  
  const [state, setState] = useState({
    lng:JSON.parse(localStorage.getItem("lng")),
    lat:JSON.parse(localStorage.getItem("lat")),
    zoom: 18
  })

  // console.log(useLocation())

  const { estaciones } = useSelector(store => store.estaciones)

  useEffect(() => {
    dispatch(listAsyn())
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
    localStorage.clear()
  },[MapContainer]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAsync())
    navigate("/login")
  }
  
  return (
    <div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3 className='title'>LOW PRICE APP</h3>
        <section>
          <p className='subTitle'>General</p>
          <p className='pointer'><img src={favorito} alt='' />  Favoritos</p>
          <p className='pointer'><img src={agregar} alt=''/>   Agregar Estacion</p>
          <p className='pointer'><img src={actualizar} width="10%" alt=''/>  Actualizar Precios</p>
        </section>
        <section>
          <p className='subTitle'>Mi Cuenta</p>
          <p className='pointer'><img src={perfil} alt='' />  Perfil</p>
        </section>
        <section>
          <p className='subTitle'>Otros</p>
          <p className='pointer'><img src={acercaDe} alt='' />  Sobre Nosotros</p>
        </section>
        <section >
          <p onClick={handleLogout} className='subTitle'>Salir</p>
          <p className='pointer' onClick={handleLogout}><img  width="10%" src={salir} alt='' />  Cerrar Sesión</p>
        </section>
      </Modal>
      <MapContainer center={{ lng: JSON.parse(localStorage.getItem("lng")), lat: JSON.parse(localStorage.getItem("lat")) }} zoom={state.zoom}>
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