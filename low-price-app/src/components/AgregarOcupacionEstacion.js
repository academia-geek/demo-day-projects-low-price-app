import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { addAsyncOcupacionEstacion } from '../redux/actions/actionOcupacionEstaciones';
import { listAsyn } from '../redux/actions/actionEstaciones';
import { Form, Button, Image } from 'react-bootstrap';
import '../styles/_listaOcupacionEstaciones.scss';
import ListOcupacionEstaciones from './ListOcupacionEstaciones';

const AgregarOcupacionEstacion = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, handleInputChange, reset] = useForm({
        estacion: '',
        ocupacion: ''
    })

    const { estacion, ocupacion } = values

    const { estaciones } = useSelector(store => store.estaciones)

    const opcionesOcupacion = ['baja', 'media', 'alta'];

    useEffect(() => {
        dispatch(listAsyn())
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        const codigo = uuid();
        const estacionAGuardar = {
            codigo: codigo,
            fecha: +new Date(),
            estacion: estacion,
            ocupacion: ocupacion

        }
        dispatch(addAsyncOcupacionEstacion(estacionAGuardar))
        reset()

        Swal.fire({
            title: 'Agregado!',
            text: 'La ocupación de la estación fue agregada',
        })
    }

    return (
        <div className='general'>
            <h1 onClick={() => navigate('/map')} className='lowPriceTitle'>Low Price</h1>
            <hr />
             <Form onSubmit={handleSubmit} margin={50}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select name="estacion" value={estacion} onChange={handleInputChange}>
                        <option>Selecciona la estación</option>
                        {estaciones.map((estacion, indiceEstacion) => (
                            <option value={estacion.id} key={indiceEstacion}>{estacion.name}</option>
                        ))
                    }
                    </Form.Select>

                    <Form.Select name="ocupacion" value={ocupacion} onChange={handleInputChange}>
                        <option>Selecciona la ocupacion</option>
                        {opcionesOcupacion.map((opcionOcupacion, indiceOpcionOcupacion) => (
                            <option value={opcionOcupacion} key={indiceOpcionOcupacion}>{opcionOcupacion}</option>
                        ))
                    }
                    </Form.Select>
                

                    
                </Form.Group>

                <Button type="submit">
                    <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' />
                </Button>
             
            </Form>
            <ListOcupacionEstaciones/>
        </div>
    )
}

export default AgregarOcupacionEstacion