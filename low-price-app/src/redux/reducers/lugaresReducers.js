import { typesLugares } from "../types/types";


const initialState = {
  lugares: []
}

export const lugaresReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesLugares.add:
      return {
        lugares: [action.payload]
      }

    case typesLugares.list:
      return {
        lugares: [...action.payload]
      }

    case typesLugares.edit:
      return {
        ...state
      }

    case typesLugares.delete:
      return {
        lugares: state.lugares.filter(p => p.codigo !== action.payload)
      }

    default:
      return state
  }

}