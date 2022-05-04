import React from 'react'
import { useNavigate } from 'react-router-dom'
import estaciones from '../data/dataCopy'

const Favoritos = () => {
    const navigate = useNavigate()
    return (
        <section id='favoritos'>
			<h1 onClick={()=>navigate('/')} className='lowPriceTitle'>Low Price</h1>
			<hr />
            {
                estaciones.map((s, index) =>
                    <div key={index}>
                        <h3>{s.name}</h3>
                        <h5>{s.geometry}</h5>
                        <h4>${s.precio.gasolinaCorriente} g</h4>
                    </div>
                )
            }
        </section>
    )
}

export default Favoritos