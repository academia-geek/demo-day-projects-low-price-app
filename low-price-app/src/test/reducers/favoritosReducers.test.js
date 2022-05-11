import { favoritosReducers } from "../../redux/reducers/favoritosReducers"
import { typesFavoritos } from "../../redux/types/types"

describe('Pruebas en favoritos Reducer',()=>{

    test('Agregar Estacion',()=>{
        const initState = {
            favoritos: []
        }
        const action ={
            type: typesFavoritos.add,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = favoritosReducers(initState, action)
        expect(state).toEqual({
            favoritos: [{
                nombre: 'estacion Prueba',
            }]
        })
    })
    
    test('Editar Estacion',()=>{
        const initState = {
            favoritos: []
        }
        const action ={
            type: typesFavoritos.edit,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = favoritosReducers(initState, action)
        expect(state).toEqual({
            ...state
        })
    })
    
    test('Borrar Estacion',()=>{
        const initState = {
            favoritos: []
        }
        const action ={
            type: typesFavoritos.delete,
            payload: {
                nombre: 'estacion Prueba',
            }
        }
        const state = favoritosReducers(initState, action)
        expect(state).toEqual({
            favoritos: state.favoritos.filter(prod => prod !== action.payload)
        })
    })

    test('State Default',()=>{
        const initState={
            favoritos: []
        }
        const action ={
            type: typesFavoritos.typeInventadoDePrueba,
        }
        const state = favoritosReducers(initState, action)
        expect(state).toEqual(initState)
    })
})