import { typesOcupacionEstaciones } from "../types/types"

const initialState = {
	ocupacionEstaciones: []
}

export const ocupacionEstacionesReducers = (state = initialState, action) => {
	switch (action.type) {
		case typesOcupacionEstaciones.add:
			return {
				ocupacionEstaciones: [action.payload]
			}

		case typesOcupacionEstaciones.list:
			return {
				ocupacionEstaciones: [...action.payload]
			}

		case typesOcupacionEstaciones.edit:
			return {
				...state
			}

		case typesOcupacionEstaciones.delete:
			return {
				ocupacionEstaciones: state.ocupacionEstaciones.filter(p => p.codigo !== action.payload)
			}

		default:
			return state
	}
}