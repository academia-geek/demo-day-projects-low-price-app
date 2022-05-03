import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';

const CrudForm = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        id: '',
        description: '',
        gasolinaCorriente: '',
        gasolinaExtra: '',
        acpm: '',
        name: '',
        categoria: ''
    })

    const { id, description, gasolinaCorriente, gasolinaExtra, acpm, name, categoria } = values
    const geometry = [145, -789]


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            id,
            description,
            name,
            precio :{
                gasolinaCorriente, gasolinaExtra, acpm
            },
            geometry,
            categoria,
        }
        )
        /* dispatch(addProduct(
            {
                ...values,
            }
        )) */
        reset()

        Swal.fire({
            title: 'Agregado!',
            text: 'Modal with a custom image.',
            imageUrl: values.foto,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="addForm">
                <h1>Agregar Producto</h1>
                <div>
                    <input type="text" name="id" placeholder="id" value={id} onChange={handleInputChange} />
                    <input type="text" name="description" placeholder="description" value={description} onChange={handleInputChange} />
                    <input type="text" name="name" placeholder="name" value={name} onChange={handleInputChange} />
                    <input type="number" name="gasolinaExtra" placeholder="gasolinaExtra" value={gasolinaExtra} onChange={handleInputChange} />
                    <input type="number" name="gasolinaCorriente" placeholder="gasolinaCorriente" value={gasolinaCorriente} onChange={handleInputChange} />
                    <input type="number" name="acpm" placeholder="acpm" value={acpm} onChange={handleInputChange} />
                    <input type="text" name="categoria" placeholder="Categoria" value={categoria} onChange={handleInputChange} />
                </div>
                <button type="submit">
                    <h2>Agregar</h2>
                </button>

            </form>

        </div>
    )
}

export default CrudForm