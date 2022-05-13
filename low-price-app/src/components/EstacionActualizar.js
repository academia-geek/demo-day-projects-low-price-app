import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import { editAsync } from '../redux/actions/actionEstaciones';

const EstacionActualizar = ({ estacion }) => {
    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        description: estacion.description,
        name: estacion.name,
        gasolinaExtra: estacion.precio.gasolinaExtraNumero,
        gasolinaCorriente: estacion.precio.gasolinaCorrienteNumero,
        acpm: estacion.precio.acpmNumero,
        promotion: estacion.promotion,
    })

    const [promotion, setpromotion] = useState(estacion.promotion)

    const { name, description, gasolinaExtra, gasolinaCorriente, acpm } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(promotion);
        let promotionValue;
        if (promotion === undefined) {
            promotionValue = false
        } else {
            promotionValue = promotion
        }
        const gasolinaExtraNumero = parseInt(gasolinaExtra)
        const gasolinaCorrienteNumero = parseInt(gasolinaCorriente)
        const acpmNumero = parseInt(acpm)
        const estacionAGuardar = {
            id: estacion.id,
            description: description,
            name: name,
            precio: { gasolinaExtraNumero, gasolinaCorrienteNumero, acpmNumero },
            geometry: estacion.geometry,
            promotion: promotionValue
        }
        console.log(estacionAGuardar);
        dispatch(editAsync(estacion.id, estacionAGuardar));

        Swal.fire({
            title: 'Agregado!',
            text: 'Estacion Actualizada',
            icon:'success'
        })
    }

    return (
        <div>
            <div >
                <div >
                    <form onSubmit={handleSubmit}>
                        <h1> Actualizar</h1>
                        <hr />
                        <div>
                            <label>Nombre Estacion</label>
                            <div >
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Descripción</label>
                            <div >
                                <input
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Corriente</label>
                            <div >
                                <input
                                    type="text"
                                    name="gasolinaCorriente"
                                    value={gasolinaCorriente}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Extra</label>
                            <div >
                                <input
                                    type="text"
                                    name="gasolinaExtra"
                                    value={gasolinaExtra}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>ACPM</label>
                            <div >
                                <input
                                    type="text"
                                    name="acpm"
                                    value={acpm}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Promocion </label>
                            <span> Si / No</span>
                            <div >
                                <input
                                    type="reset"
                                    name="promotion"
                                    value={promotion === true ? 'Si' : 'No'}
                                    onClick={()=> promotion === true ? setpromotion(false)  : setpromotion(true)  }
                                />
                            </div>
                        </div>

                        <button className='btnGuardar' type="submit" >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EstacionActualizar