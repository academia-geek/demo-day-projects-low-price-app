import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'


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
        //aqui debe enviar al local storage
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        localStorage.setItem("lng", JSON.stringify(long));
        localStorage.setItem("lat", JSON.stringify(lat));

      },
      function (error) {
        console.log(error)
      },
      { enableHighAccuracy: true }
    );

  }, []);



  return (
    <div>
      <h1>Geolocation</h1>
      <p>Longitude:{state.longitude}</p>
      <p>Latitude:{state.latitude}</p>
      <Link to={{
        pathname: '/map',
        state
      }}>Ver mi Geolocation</Link>
    </div>
  )
}
export default Home