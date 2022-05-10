import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { addAsync } from '../redux/actions/actionEstaciones';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

const CrudForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

    const { description, name, gasolinaExtra, gasolinaCorriente, acpm, lat, long, promotion } = values


    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid();
        const gasolinaExtraNumero = parseInt(gasolinaExtra)
        const gasolinaCorrienteNumero = parseInt(gasolinaCorriente)
        const acpmNumero = parseInt(acpm)
        const latitudNumero = parseFloat(lat)
        const longitudNumero = parseFloat(long)
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
    }

    return (
        <form onSubmit={handleSubmit} className="crudForm">
            <h1 onClick={() => navigate('/map')} className='lowPriceTitle'>Low Price</h1>
            <hr />
            <h4>Agregar Estacion</h4>
            <div>
                <input type="text" name="name" placeholder="name" value={name} onChange={handleInputChange} />
                <input type="text" name="description" placeholder="description" value={description} onChange={handleInputChange} />
                <input type="number" name="lat" placeholder="lat" value={lat} onChange={handleInputChange} />
                <input type="number" name="long" placeholder="long" value={long} onChange={handleInputChange} />
                <input type="number" name="gasolinaExtra" placeholder="gasolinaExtra" value={gasolinaExtra} onChange={handleInputChange} />
                <input type="number" name="gasolinaCorriente" placeholder="gasolinaCorriente" value={gasolinaCorriente} onChange={handleInputChange} />
                <input type="number" name="acpm" placeholder="acpm" value={acpm} onChange={handleInputChange} />
                <label>Promoción</label>
                <div className='radioDiv'>
                    <div >
                        <label>si</label>
                        <input type='radio' name="promotion" value={true} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>no</label>
                        <input type='radio' name="promotion" value={false} onChange={handleInputChange} checked />
                    </div>
                </div>
            </div>
            <hr />
            <button type="submit">
                <span>Agregar</span>
            </button>
        </form>
    )
}

export default CrudForm