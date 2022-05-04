import React, { useEffect, useState } from 'react';
import MapView from './MapView';

const Home = () => {
	const [state, setState] = useState({
		longitude: 0,
		latitude: 0,
	});


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position){
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      },
      function(error){
        console.log(error)
      },
      {enableHighAccuracy:true}
    );
  },);
  
  return (
    <div>
      <MapView localizacion ={state}/>
    </div>
  )
}

export default Home


