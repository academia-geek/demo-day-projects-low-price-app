import { typesFavoritos } from "../types/types"

const initialState = {
	favoritos: []
}

export const favoritosReducers = (state = initialState, action) => {
	switch (action.type) {
		case typesFavoritos.add:
			return {
				favoritos: [action.payload]
			}

		case typesFavoritos.list:
			return {
				favoritos: [...action.payload]
			}

		case typesFavoritos.edit:
			return {
				...state
			}

		case typesFavoritos.delete:
			return {
				favoritos: state.favoritos.filter(p => p.id !== action.payload)
			}

		default:
			return state
	}
}