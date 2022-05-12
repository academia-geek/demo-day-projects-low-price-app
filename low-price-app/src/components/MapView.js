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
import { listAsynFavoritos } from '../redux/actions/actionFavoritos';
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
      x: "10vw",
      opacity: 0,
  },
  show: {
      x: "0vw",
      opacity: 1,
      transition: { delay: 0.3 },
  },
};

const MapView = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  
  const [state, setState] = useState({
    lng:JSON.parse(localStorage.getItem("lng")),
    lat:JSON.parse(localStorage.getItem("lat")),
    zoom: 17
  })

  // console.log(useLocation())

  const { estaciones } = useSelector(store => store.estaciones)
  const { favoritos } = useSelector(store => store.favoritos)

  useEffect(() => {
    dispatch(listAsynFavoritos())
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[MapContainer]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAsync())
    navigate("/login")
  }
  
  return (
    <motion.section id='detail' variants={containerVariants} initial="hidden" animate="show" exit="exit">
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3 className='title'>LOW PRICE APP</h3>
        <section>
          <p className='subTitle'>General</p>
          <p className='pointer' onClick={()=>navigate('/favoritos')}><img src={favorito} alt='' />  Favoritos</p>
          <p className='pointer' onClick={()=>navigate('/crudForm')}><img src={agregar} alt=''/>   Agregar Estacion</p>
          <p className='pointer' onClick={()=>navigate('/list')}><img src={actualizar} width="8%" alt=''/>  Actualizar Precios</p>
        </section>
        <section>
          <p className='subTitle'>Mi Cuenta</p>
          <p className='pointer' onClick={()=>navigate('/profile')}><img src={perfil} alt='' />  Perfil</p>
        </section>
        <section>
          <p className='subTitle'>Otros</p>
          <p className='pointer'><img src={acercaDe} alt='' />  Sobre Nosotros</p>
        </section>
        <section >
          <p onClick={handleLogout} className='subTitle'>Salir</p>
          <p className='pointer'  onClick={handleLogout}><img  width="10%" src={salir} alt='' />  Cerrar Sesión</p>
        </section>
        {favoritos && favoritos.map((s, index) =>
                    <p key={index}>
                        
                    </p>
                )
            }
      </Modal>
      <MapContainer center={{ lng: JSON.parse(localStorage.getItem("lng")), lat: JSON.parse(localStorage.getItem("lat")) }} zoom={state.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers estaciones={estaciones}  favoritos={favoritos} />
        <button onClick={openModal} className='Menu'></button>
      </MapContainer>
    </motion.section>
  )
}
export default MapView