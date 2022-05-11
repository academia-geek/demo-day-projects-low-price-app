import { typesEstaciones } from "../types/types";

const initialState = {
  estaciones: []
}

export const estacionesReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesEstaciones.add:
      return {
        estaciones: [action.payload]
      }

    case typesEstaciones.list:
      return {
        estaciones: [...action.payload]
      }

    case typesEstaciones.edit:
      return {
        ...state
      }

    case typesEstaciones.delete:
      return {
        estaciones: state.estaciones.filter(p => p.id !== action.payload)
      }

    default:
      return state
  }
}