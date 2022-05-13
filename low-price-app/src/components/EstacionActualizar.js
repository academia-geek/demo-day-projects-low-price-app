import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { editAsync } from '../redux/actions/actionEstaciones';

const EstacionActualizar = ({ estacion }) => {
    const dispatch = useDispatch();

    const [values, handleInputChange ] = useForm({
        description: estacion.description,
        name: estacion.name,
        gasolinaExtra: estacion.precio.gasolinaExtraNumero,
        gasolinaCorriente: estacion.precio.gasolinaCorrienteNumero,
        acpm: estacion.precio.acpmNumero,
        promotion: estacion.promotion,
    })

    const { name, description, gasolinaExtra, gasolinaCorriente, acpm, promotion } = values;
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const gasolinaExtraNumero = parseInt(gasolinaExtra)
        const gasolinaCorrienteNumero = parseInt(gasolinaCorriente)
        const acpmNumero = parseInt(acpm)
        const latitudNumero = JSON.parse(localStorage.getItem("lat"))
        const longitudNumero = JSON.parse(localStorage.getItem("lng"))
        const estacionAGuardar = {
            id: estacion.id,
            description: description,
            name: name,
            precio: { gasolinaExtraNumero, gasolinaCorrienteNumero, acpmNumero },
            geometry: [latitudNumero, longitudNumero],
            promotion: promotion
        }
        console.log(estacionAGuardar);
        dispatch(editAsync(estacion.id, estacionAGuardar));
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
                            <label>Promocion</label>
                            <div >
                                <input
                                    type="text"
                                    name="promotion"
                                    value={promotion}
                                    onChange={handleInputChange}
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