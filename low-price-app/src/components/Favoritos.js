import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listAsyn } from '../redux/actions/actionFavoritos'
import { listAsyn as listEstaciones } from '../redux/actions/actionEstaciones'


const Favoritos = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAsyn())
        dispatch(listEstaciones())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const { favoritos } = useSelector(store => store.favoritos)

    const { estaciones } = useSelector(store => store.estaciones)


    const estacionesId = favoritos.map(f => f.id);
    console.log(estacionesId);

    const estacion = estaciones.filter(e=>e.id === estacionesId[0])
    console.log(estacion);


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
             {/* {
                estaciones.map((s, index) =>
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
            }  */}
        </section>
    )
}

export default Favoritos