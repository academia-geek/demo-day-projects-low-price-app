import React from 'react'
import { useDispatch } from 'react-redux'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'
import { addAsync } from '../redux/actions/actionFavoritos'

const PruebaAddFavoritos = () => {
    const dispatch = useDispatch()
    const email = obtenerUsuarioStorage('email')
    const prueba = {
        email: email,
        id:'eb4c808-72ff-76c8-3d56-6a0636f255be'
    }

    const handle = () => {
        console.log(prueba);
        dispatch(addAsync(prueba))
    }

  return (
    <div>
        <button onClick={handle}>Agregar</button>
    </div>
  )
}

export default PruebaAddFavoritos