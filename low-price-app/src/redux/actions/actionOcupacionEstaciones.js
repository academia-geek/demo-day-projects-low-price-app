import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"//Ingresar la bd de Daniel
import { typesOcupacionEstaciones } from "../types/types"

const nombreEntidad = "ocupacionEstacionesBD"

//---------------------Edit-----------//
export const editAsyncOcupacionEstacion = (codigo, ocupacionEstacion) => {
	return async (dispatch) => {
		const colleccionTraer = collection(baseDato, nombreEntidad)
		const q = query(colleccionTraer, where("codigo", "==", codigo))
		const traerDatosQ = await getDocs(q)
		let id
		traerDatosQ.forEach(async (docu) => {
			id = docu.id
		})
		const documenRef = doc(baseDato, nombreEntidad, id)
		await updateDoc(documenRef, ocupacionEstacion)
			.then(resp => {
				dispatch(editSync(ocupacionEstacion))
				dispatch(listAsynOcupacionEstaciones())			})
			.catch((err) => console.log(err))

	}
}

export const editSync = (ocupacionEstacion) => {
	return {
		type: typesOcupacionEstaciones.edit,
		payload: ocupacionEstacion
	}

}

//-------------------delete--------------------//
export const deleteAsyncOcupacionEstacion = (codigo) => {

	return async (dispatch) => {
		const colleccionTraer = collection(baseDato, nombreEntidad)
		const q = query(colleccionTraer, where("codigo", "==", codigo))
		const traerDatosQ = await getDocs(q)
		traerDatosQ.forEach((docum => {
			deleteDoc(doc(baseDato, nombreEntidad, docum.id))
		}))
		dispatch(deleteSync(codigo))
		dispatch(listAsynOcupacionEstaciones())
	}
}

export const deleteSync = (codigo) => {
	return {
		type: typesOcupacionEstaciones.delete,
		payload: codigo
	}

}

//---------------listar----------------//
export const listAsynOcupacionEstaciones = () => {
	return async (dispatch) => {
		const colleccionTraer = await getDocs(collection(baseDato, nombreEntidad))
		let ocupacionEstaciones = []
		colleccionTraer.forEach((doc) => {
			ocupacionEstaciones.push({
				...doc.data()


			})
		})
		ocupacionEstaciones = ocupacionEstaciones.sort((a, b)=>b.fecha-a.fecha)
		dispatch(listSync(ocupacionEstaciones))

	}
}

export const listSync = (ocupacionEstacion) => {
	return {
		type: typesOcupacionEstaciones.list,
		payload: ocupacionEstacion
	}

}

//-------------agregar---------------//
export const addAsyncOcupacionEstacion = (ocupacionEstacion) => {
	return (dispatch) => {
		addDoc(collection(baseDato, nombreEntidad), ocupacionEstacion)
			.then(resp => {
				dispatch(addSync(ocupacionEstacion))
				//  dispatch(listAsyn())
			})
			.catch(error => {
				console.warn(error);
			})
	}
}

export const addSync = (ocupacionEstacion) => {
	return {
		type: typesOcupacionEstaciones.add,
		payload: ocupacionEstacion,
	}
}