import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { addAsync } from '../redux/actions/actionEstaciones';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom'
import atras from '../assets/atras.png'
import home from '../assets/home.png'
import { logoutAsync } from '../redux/actions/actionLogin';
import cerrarS from '../assets/cerrar-sesion2.png'

const CrudForm = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        description: '',
        name: '',
        lat: '',
        long: '',
        gasolinaExtra: '',
        gasolinaCorriente: '',
        acpm: '',
        promotion: false
    })

    const { description, name, gasolinaExtra, gasolinaCorriente, acpm, promotion} = values
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid();
        const gasolinaExtraNumero = parseInt(gasolinaExtra)
        const gasolinaCorrienteNumero = parseInt(gasolinaCorriente)
        const acpmNumero = parseInt(acpm)
        const latitudNumero = JSON.parse(localStorage.getItem("lat"))
        const longitudNumero = JSON.parse(localStorage.getItem("lng"))
        const estacionAGuardar = {
            id: id,
            description: description,
            name: name,
            precio: { gasolinaExtraNumero, gasolinaCorrienteNumero, acpmNumero },
            geometry: [latitudNumero, longitudNumero],
            promotion: promotion

        }
        console.log(estacionAGuardar)
        dispatch(addAsync(estacionAGuardar))
        reset()
        Swal.fire({
            title: 'Agregado!',
            text: 'La estación fue agregada',
        })
        
        navigate('/map')
    }
    

    return (
        <div className='fondo'>
            
            <form onSubmit={handleSubmit} className="crudForm">
                <h4>Agregar Estación</h4>
                <div>
                    <input type="text" name="name" placeholder="name" value={name} onChange={handleInputChange} />
                    <input type="text" name="description" placeholder="description" value={description} onChange={handleInputChange} />
                    <input type="number" name="gasolinaExtra" placeholder="gasolinaExtra" value={gasolinaExtra} onChange={handleInputChange} />
                    <input type="number" name="gasolinaCorriente" placeholder="gasolinaCorriente" value={gasolinaCorriente} onChange={handleInputChange} />
                    <input type="number" name="acpm" placeholder="acpm" value={acpm} onChange={handleInputChange} />
                </div>
                <hr />
                <button type="submit">
                    <span>Agregar</span>
                </button>
            </form>
            <div className='btnsNav'>
                <button className='btnNav' onClick={() => navigate('/map')}><img alt='' src={atras}  width="50px"/></button>
                <button className='btnNav' onClick={() => navigate('/')}><img alt='' src={home} width="50px"/></button>
                <button className='btnNav' onClick={handleLogout}><img alt='' src={cerrarS} width="50px" /></button>
            </div>
        </div>
    )
}

export default CrudForm