import React from 'react'
import { useNavigate } from 'react-router-dom'
import estaciones from '../data/dataCopy'
import { useDispatch, useSelector } from 'react-redux'
const Favoritos = () => {
    const navigate = useNavigate()
    let { lugares } = useSelector(store => store.lugares)
    return (
        <section id='favoritos'>
			<h1 onClick={()=>navigate('/')} className='lowPriceTitle'>Low Price</h1>
			<hr />
            {
                estaciones.map((s, index) =>
                    <div key={index}>
                        <h3>{s.name}</h3>
                        <h4>${s.precio.gasolinaCorriente}</h4>
                    </div>
                )
            }
        </section>
    )
}

export default Favoritos