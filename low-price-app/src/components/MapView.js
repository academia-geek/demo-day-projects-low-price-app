// import React, { useEffect, useState } from 'react';
// import 'leaflet/dist/leaflet.css'
// import { MapContainer, TileLayer } from 'react-leaflet'
// import Markers from './Markers'
// import estaciones from '../data/dataCopy'



// const MapView = ( ) => {
//   
//   const [state, setState] = useState({
//     lat: '4.707151617979109', lng: '-74.22277595106928' ,
//   });

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         setState({
//           lng: position.coords.longitude,
//           lat: position.coords.latitude
//         })
//       },
//       function (error) {
//         console.log(error)
//       },
//       { enableHighAccuracy: true }
//     );
//   });
//  




//   return (
//       <div>
//       
//       <MapContainer center={{ lat: state.lat, lng: state.lng }} zoom={15}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Markers estaciones={estaciones} />
//         
//       </MapContainer>
//       </div>
//   )
// }
// export default MapView

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Markers from './Markers'
import estaciones from '../data/dataCopy'
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import favorito from '../assets/star - copia.png'
import acercaDe from '../assets/Vector.png'
import actualizar from '../assets/actualizar.png'
import perfil from '../assets/perfil.png'
import agregar from '../assets/Plus.png'
import salir from '../assets/cerrarSesion.png'
import { logoutAsync } from '../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const MapView = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  

  const [state, setState] = useState({
    lat: 6.240445573444923,
    lng: -75.57989476715278,
    zoom: 18
  })


  useEffect(() => {
    console.log("update");
    console.log(state);
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setState({
            ...state,
            lng: position.coords.longitude,
            lat: position.coords.latitude,
            // zoom: state.zoom + 10
          })
        },
        function (error) {
          console.log(error)
        },
      );
        console.log(state.lng, state.lat)
    }, 2000);
  });
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
           <p className='pointer'><img src={agregar}/>   Agregar Estacion</p>
           <p className='pointer'><img src={actualizar} width="10%"/>  Actualizar Precios</p>
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
