import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import logo from '../assets/logo.png'


const Home = () => {
  const [state, setState] = useState({
    lng: 0,
    lat: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        localStorage.setItem("lng", JSON.stringify(long));
        localStorage.setItem("lat", JSON.stringify(lat));
      },
      function (error) {
        console.log(error)
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }, []);


  return (
    <section className='homeTextCont'>
      <h1>Bienvenido a Low Price App</h1>
      <div>
        <img alt='' src={logo} />
        <small>Recuerda que para tener una mejor experiencia de usuario,  debes darnos permisos para acceder a tu ubicacion; asi sabremos en donde estas y podremos mostrarte las estaciones cercanas</small>
      </div>
      <hr />
      <p>El tiempo y el dinero que gastamos en dirigirnos a una estacion de gasolina y no encontrar el producto indicado o el precio justo, pueden ser situaciones molestas para quien tiene un vehiculo. 
       </p><p> Low Price App es una aplicacion que busca hacerte la vida mas comoda, ya que te proporciona las estaciones cercanas a tu ubicacion, algunos de los productos que ofrecen  y su precio, para que seas tú quien decida cual es la mejor alternativa.</p>
      <strong>Somos una aplicacion que piensa en ti y en tu economía. </strong>
      <button>
        <Link to={{
          pathname: '/map',
        }}>Ver mi Ubicación</Link></button>
    </section>
  )
}
export default Home