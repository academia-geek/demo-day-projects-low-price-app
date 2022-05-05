import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { addAsync } from '../redux/actions/actionEstaciones';
import uuid from 'react-uuid';

const CrudForm = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        description: '',
        name: '',
        lat: '',
        long: '' ,
        gasolinaExtra: '' ,
        gasolinaCorriente: '' ,
        acpm: ''
    })

    const { description, name, gasolinaExtra, gasolinaCorriente, acpm, lat,long} = values


    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid();
        const gasolinaExtraNumero = parseInt(gasolinaExtra)
        const gasolinaCorrienteNumero = parseInt(gasolinaCorriente)
        const acpmNumero = parseInt(acpm)
        const latitudNumero =  parseInt(lat)
        const longitudNumero =  parseInt(long)
        const estacionAGuardar = {
            id: id, 
            description: description, 
            name: name, 
            precio:{gasolinaExtraNumero, gasolinaCorrienteNumero, acpmNumero}, 
            geometry:[latitudNumero, longitudNumero]
        }
        console.log(estacionAGuardar)
        dispatch(addAsync(estacionAGuardar))
        reset()

        Swal.fire({
            title: 'Agregado!',
            text: 'La estación fue agregada',
            //imageUrl: values.foto,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    return (
        <form onSubmit={handleSubmit} className="crudForm">
            <h4>Agregar Estacion</h4>
            <div>
                <input type="text" name="description" placeholder="description" value={description} onChange={handleInputChange} />
                <input type="text" name="name" placeholder="name" value={name} onChange={handleInputChange} />
                <input type="number" name="lat" placeholder="lat" value={lat} onChange={handleInputChange} />
                <input type="number" name="long" placeholder="long" value={long} onChange={handleInputChange} />
                <input type="number" name="gasolinaExtra" placeholder="gasolinaExtra" value={gasolinaExtra} onChange={handleInputChange} />
                <input type="number" name="gasolinaCorriente" placeholder="gasolinaCorriente" value={gasolinaCorriente} onChange={handleInputChange} />
                <input type="number" name="acpm" placeholder="acpm" value={acpm} onChange={handleInputChange} />
            </div>
            <hr />
            <button type="submit">
                <span>Agregar</span>
            </button>
        </form>
    )
}

export default CrudForm