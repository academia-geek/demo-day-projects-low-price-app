import React, { useEffect, useState } from 'react'
import { Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerUsuarioStorage } from '../helpers/LocalStorage';
import { addAsync, editAsync } from '../redux/actions/actionFavoritos';
import { listAsynOcupacionEstaciones } from '../redux/actions/actionOcupacionEstaciones';
import actualizar from '../assets/boton-actualizar.png'
import EstacionActualizar from './EstacionActualizar';

const Popups = (props) => {

  const dispatch = useDispatch()
  const { name, precio, id, promotion, favoritos } = props.data;

  const { ocupacionEstaciones } = useSelector(store => store.ocupacionEstaciones)

  const emailUsuarioActual = obtenerUsuarioStorage('email')

  const [esFavorito, setEsFavorito] = useState(false)
  const [modalEditar, setModalEditar] = useState(false)
  const [EstacionEditar, setEstacionEditar] = useState({})

  const modalEditarAbrir = (estacion) => {
    setEstacionEditar(estacion)
    setModalEditar(true)
  }


  useEffect(() => {
    const esFavorito = verificarSiEstacionActualEsFavorita(id);
    setEsFavorito(esFavorito);
    dispatch(listAsynOcupacionEstaciones())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function verificarSiEstacionActualEsFavorita(id) {
    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()
    if (favoritoUsuarioActual) {
      return favoritoUsuarioActual.listadoIds && favoritoUsuarioActual.listadoIds.includes(id)
    }
    return false;
  }

  function obtenerFavoritoDeUsuarioActual() {
    for (const favorito of favoritos) {
      if (favorito.email === emailUsuarioActual) {
        return favorito;
      }
    }
    return undefined;
  }

  function marcarFavorito() {
    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()
    if (favoritoUsuarioActual) {
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

  function desmarcarFavorito() {
    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()
    favoritoUsuarioActual.listadoIds = favoritoUsuarioActual.listadoIds.filter(idrecorriendo => idrecorriendo !== id)
    dispatch(editAsync(emailUsuarioActual, favoritoUsuarioActual))
    const esFavorito = verificarSiEstacionActualEsFavorita(id);
    setEsFavorito(esFavorito);
  }

  function buscarOcupacionMasReciente() {
    const estacionesFiltradas = ocupacionEstaciones.filter(p => p.estacion === id).sort((a, b) => b.fecha - a.fecha);
    if (estacionesFiltradas && estacionesFiltradas.length > 0) {
      let textoAMostrar = 'Registrado con ocupaci??n ' + estacionesFiltradas[0].ocupacion + ' hace ';
      const fechaActual = new Date().getTime();
      const diferenciaEntreTiempoActualyUltimoRegistro = fechaActual - estacionesFiltradas[0].fecha;
      let diferenciaEnDias = Math.floor(diferenciaEntreTiempoActualyUltimoRegistro / (1000 * 3600 * 24));
      let diferenciaEnHoras = Math.floor(diferenciaEntreTiempoActualyUltimoRegistro / (1000 * 60 * 60));
      let diferenciaEnMinutos = Math.floor(diferenciaEntreTiempoActualyUltimoRegistro / (1000 * 60));
      let diferenciaEnSegundos = Math.floor(diferenciaEntreTiempoActualyUltimoRegistro / (1000));
      if (diferenciaEnDias > 0) {
        textoAMostrar += diferenciaEnDias + ' d??as ';
      }
      if (diferenciaEnHoras > 0) {
        if (diferenciaEnHoras > 24) {
          diferenciaEnHoras = diferenciaEnHoras % 24
        }
        textoAMostrar += diferenciaEnHoras + ' horas ';
      }
      if (diferenciaEnMinutos > 0) {
        if (diferenciaEnMinutos > 60) {
          diferenciaEnMinutos = diferenciaEnMinutos % 60
        }
        textoAMostrar += diferenciaEnMinutos + ' minutos ';
      }
      if (diferenciaEnSegundos > 0) {
        if (diferenciaEnSegundos > 60) {
          diferenciaEnSegundos = diferenciaEnSegundos % 60
        }
        textoAMostrar += diferenciaEnSegundos + ' segundos ';
      }
      /* console.log('hi' + textoAMostrar) */
      return textoAMostrar
    }
    return '';
  }

  return (
    <>
    <Popup>
      <h3>{name}</h3>
      <p><strong>{buscarOcupacionMasReciente()}</strong></p>
      <p><strong>Corriente: </strong>{precio?.gasolinaCorrienteNumero}</p>
      <p><strong>Extra: </strong>{precio?.gasolinaExtraNumero}</p>
      <p><strong>ACPM: </strong>{precio?.acpmNumero}</p>
      {
        promotion === true ? <p className='prom'>Promoci??n</p> : ''
      }
      {esFavorito &&
        <button onClick={() => { desmarcarFavorito() }}><strong>&#9733; Desmarcar de favoritos</strong></button>}
      {!esFavorito &&
        <button onClick={() => { marcarFavorito() }}><strong>&#9734; Marcar como favorito</strong></button>}
      
      
      <button onClick={()=>modalEditarAbrir(props.data)} className='btnActualizarPopUp'>
        <img alt='' src={actualizar} width="30px" />
        Actualizar
      </button>
      {
        modalEditar === true ?
          <div className='modalEditar'>
            <EstacionActualizar estacion={EstacionEditar} />
            <button className='btnCerrar' onClick={() => setModalEditar(false)}>Cerrar</button>
          </div>
          :
          ''
      }
    </Popup>
    </>
  )
}

export default Popups