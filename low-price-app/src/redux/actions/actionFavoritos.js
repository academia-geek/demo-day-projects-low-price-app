import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"//Ingresar la bd de Daniel
import { typesFavoritos } from "../types/types"

const nombreEntidad = "favoritosBD"

//---------------------Edit-----------//
export const editAsync = (idRecibido, favorito) => {
	return async (dispatch) => {
		const colleccionTraer = collection(baseDato, nombreEntidad)
		const q = query(colleccionTraer, where("id", "==", idRecibido))
		const traerDatosQ = await getDocs(q)
		let id
		traerDatosQ.forEach(async (docu) => {
			id = docu.id
		})
		console.log(id)
		const documenRef = doc(baseDato, nombreEntidad, id)
		await updateDoc(documenRef, favorito)
			.then(resp => {
				dispatch(editSync(favorito))
				dispatch(listAsyn())
				console.log(resp)
			})
			.catch((err) => console.log(err))

	}
}

export const editSync = (favorito) => {
	return {
		type: typesFavoritos.edit,
		payload: favorito
	}

}

//-------------------delete--------------------//
export const deleteAsync = (id) => {

	return async (dispatch) => {
		const colleccionTraer = collection(baseDato, nombreEntidad)
		const q = query(colleccionTraer, where("id", "==", id))
		const traerDatosQ = await getDocs(q)
		traerDatosQ.forEach((docum => {
			deleteDoc(doc(baseDato, nombreEntidad, docum.id))
		}))
		dispatch(deleteSync(id))
		dispatch(listAsyn())
	}
}

export const deleteSync = (id) => {
	return {
		type: typesFavoritos.delete,
		payload: id
	}

}

//---------------listar----------------//
export const listAsyn = () => {
	return async (dispatch) => {
		const colleccionTraer = await getDocs(collection(baseDato, nombreEntidad))
		const favoritos = []
		colleccionTraer.forEach((doc) => {
			favoritos.push({
				...doc.data()


			})
		})
		dispatch(listSync(favoritos))

	}
}

export const listSync = (favorito) => {
	return {
		type: typesFavoritos.list,
		payload: favorito
	}

}

//-------------agregar---------------//
export const addAsync = (favorito) => {
	return (dispatch) => {
		addDoc(collection(baseDato, nombreEntidad), favorito)
			.then(resp => {
				dispatch(addSync(favorito))
				//  dispatch(listAsyn())
			})
			.catch(error => {
				console.warn(error);
			})
	}
}

export const addSync = (favorito) => {
	return {
		type: typesFavoritos.add,
		payload: favorito,
	}
}