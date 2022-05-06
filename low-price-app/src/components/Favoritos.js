import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listAsynFavoritos } from '../redux/actions/actionFavoritos'
import { listAsyn as listEstaciones } from '../redux/actions/actionEstaciones'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'


const Favoritos = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const emailUsuarioActual = obtenerUsuarioStorage('email')


    useEffect(() => {
        dispatch(listAsynFavoritos())
        dispatch(listEstaciones())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function obtenerFavoritoDeUsuarioActual(){
        for (const favorito of favoritos) {
          if(favorito.email === emailUsuarioActual){
            return favorito;
          }
        }
        return undefined;
      }


    const { favoritos } = useSelector(store => store.favoritos)

    const { estaciones } = useSelector(store => store.estaciones)

    const favoritoUsuarioActual = obtenerFavoritoDeUsuarioActual()

    const estacionesFavoritos = obtenerListadoEstacionesDeFavoritos(favoritoUsuarioActual)

    function obtenerListadoEstacionesDeFavoritos(favoritoUsuarioActual){
        const listadoEstacionesFavoritos = [];
        if(favoritoUsuarioActual){
            const idsFavoritos = favoritoUsuarioActual.listadoIds
            for (const idFavorito of idsFavoritos) {
                for (const estacion of estaciones) {
                    if(estacion.id === idFavorito){
                        listadoEstacionesFavoritos.push(estacion);
                    }
                };
            };
            
        }
        return listadoEstacionesFavoritos;
    }


    return (
        <section id='favoritos'>
            <h1 onClick={() => navigate('/')} className='lowPriceTitle'>Low Price</h1>
            <hr />
            <h2>Favoritos</h2>
            <div className='indicePrecios'>
                <span className='red'> Corriente </span>
                <span className='green'> Extra </span>
                <span className='blue'> ACPM </span>
            </div>
            <hr />
             {estacionesFavoritos && estacionesFavoritos.map((s, index) =>
                    <section key={index}>
                        <div >
                            <h3>{s.name}</h3>
                            <div>
                                <h4 className='red precios'>${s.precio.gasolinaCorrienteNumero}</h4>
                                <h4 className='green precios'>${s.precio.gasolinaExtraNumero}</h4>
                                <h4 className='blue precios'>${s.precio.acpmNumero}</h4>
                            </div>
                        </div>
                        <hr />
                    </section>
                )
            }
        </section>
    )
}

export default Favoritos