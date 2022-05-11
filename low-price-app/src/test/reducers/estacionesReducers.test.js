import { estacionesReducers } from "../../redux/reducers/estacionesReducers"
import {  typesEstaciones } from "../../redux/types/types"

describe('Pruebas en Estaciones Reducer',()=>{

    test('Agregar Estacion',()=>{
        const initState = {
            estaciones: []
        }
        const action ={
            type: typesEstaciones.add,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = estacionesReducers(initState, action)
        expect(state).toEqual({
            estaciones: [{
                nombre: 'estacion Prueba',
            }]
        })
    })
    
    test('Editar Estacion',()=>{
        const initState = {
            estaciones: []
        }
        const action ={
            type: typesEstaciones.edit,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = estacionesReducers(initState, action)
        expect(state).toEqual({
            ...state
        })
    })
    
    test('Borrar Estacion',()=>{
        const initState = {
            estaciones: []
        }
        const action ={
            type: typesEstaciones.delete,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = estacionesReducers(initState, action)
        expect(state).toEqual({
            estaciones: state.estaciones.filter(prod => prod !== action.payload)
        })
    })

    test('State Default',()=>{
        const initState={
            estaciones: []
        }
        const action ={
            type: typesEstaciones.typeInventadoDePrueba,
        }
        const state = estacionesReducers(initState, action)
        expect(state).toEqual(initState)
    })
})