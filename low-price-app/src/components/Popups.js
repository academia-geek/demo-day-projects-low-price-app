import React, { useEffect, useState } from 'react'
import { Popup } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { obtenerUsuarioStorage } from '../helpers/LocalStorage';
import { addAsync, editAsync } from '../redux/actions/actionFavoritos';

const Popups = (props) => {
  
  const dispatch = useDispatch()
  const { name, precio, id, prom, favoritos } = props.data;

  const emailUsuarioActual = obtenerUsuarioStorage('email')

  const [esFavorito, setEsFavorito] = useState(false)

  useEffect(() => {
    const esFavorito = verificarSiEstacionActualEsFavorita(id);
    setEsFavorito(esFavorito);
}, [])
  

  function verificarSiEstacionActualEsFavorita(id){ 
    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()
    if(favoritoUsuarioActual){
      return favoritoUsuarioActual.listadoIds && favoritoUsuarioActual.listadoIds.includes(id)
    }
    return false;
  }

  function obtenerFavoritoDeUsuarioActual(){
    for (const favorito of favoritos) {
      if(favorito.email === emailUsuarioActual){
        return favorito;
      }
    }
    return undefined;
  }

  function marcarFavorito(){
    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()
    if(favoritoUsuarioActual){
      favoritoUsuarioActual.listadoIds.push(id)
      dispatch(editAsync(emailUsuarioActual, favoritoUsuarioActual))
    } else {
      const nuevoFavoritoUsuarioActual = {
        email: emailUsuarioActual,
        listadoIds: [id]
      }
      dispatch(addAsync(nuevoFavoritoUsuarioActual))
    }
    const esFavorito = verificarSiEstacionActualEsFavorita(id);
    setEsFavorito(esFavorito);
  }

  function desmarcarFavorito(){
    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()
    favoritoUsuarioActual.listadoIds = favoritoUsuarioActual.listadoIds.filter(idrecorriendo => idrecorriendo !== id)
    dispatch(editAsync(emailUsuarioActual, favoritoUsuarioActual))
    const esFavorito = verificarSiEstacionActualEsFavorita(id);
    setEsFavorito(esFavorito);
  }
  
  return (
    <Popup>
      <h3>{name}</h3>
      
       <p><strong>Corriente: </strong>{precio?.gasolinaCorrienteNumero}</p> 
       <p><strong>Extra: </strong>{precio?.gasolinaExtraNumero}</p> 
       <p><strong>ACPM: </strong>{precio?.acpmNumero}</p> 
       {
       prom === true ? <p className='prom'>Promoción</p> : ''
       }
       {esFavorito && 
        <button onClick={()=>{desmarcarFavorito()}}><strong>&#9733; Desmarcar de favoritos</strong></button>}
              {!esFavorito && 
        <button onClick={()=>{marcarFavorito()}}><strong>&#9734; Marcar como favorito</strong></button>} 
    </Popup>
  )
}

export default Popups