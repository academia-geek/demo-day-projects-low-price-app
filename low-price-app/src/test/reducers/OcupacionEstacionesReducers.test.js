import { ocupacionEstacionesReducers } from "../../redux/reducers/ocupacionEstacionesReducers"
import { typesOcupacionEstaciones } from "../../redux/types/types"

describe('Pruebas en Ocupacion Estaciones Reducer',()=>{

    test('Agregar Estacion',()=>{
        const initState = {
            ocupacionEstaciones: []
        }
        const action ={
            type: typesOcupacionEstaciones.add,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = ocupacionEstacionesReducers(initState, action)
        expect(state).toEqual({
            ocupacionEstaciones: [{
                nombre: 'estacion Prueba',
            }]
        })
    })
    
    test('Editar Estacion',()=>{
        const initState = {
            ocupacionEstaciones: []
        }
        const action ={
            type: typesOcupacionEstaciones.edit,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = ocupacionEstacionesReducers(initState, action)
        expect(state).toEqual({
            ...state
        })
    })
    
    test('Borrar Estacion',()=>{
        const initState = {
            ocupacionEstaciones: []
        }
        const action ={
            type: typesOcupacionEstaciones.delete,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = ocupacionEstacionesReducers(initState, action)
        expect(state).toEqual({
            ocupacionEstaciones: state.ocupacionEstaciones.filter(prod => prod !== action.payload)
        })
    })

    test('State Default',()=>{
        const initState={
            ocupacionEstaciones: []
        }
        const action ={
            type: typesOcupacionEstaciones.typeInventadoDePrueba,
        }
        const state = ocupacionEstacionesReducers(initState, action)
        expect(state).toEqual(initState)
    })
})