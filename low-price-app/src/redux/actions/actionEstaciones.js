import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"//Ingresar la bd de Daniel
import { typesEstaciones } from "../types/types"

const nombreEntidad = "estacionesBD"

//---------------------Edit-----------//
export const editAsync = (idRecibido, estacion) => {
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
    await updateDoc(documenRef, estacion)
      .then(resp => {
        dispatch(editSync(estacion))
        dispatch(listAsyn())
        console.log(resp)
      })
      .catch((err) => console.log(err))

  }
}


export const editSync = (estacion) => {
  return {
    type: typesEstaciones.edit,
    payload: estacion
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
    type: typesEstaciones.delete,
    payload: id
  }

}

//---------------listar----------------//
export const listAsyn = () => {
  return async (dispatch) => {
    const colleccionTraer = await getDocs(collection(baseDato, nombreEntidad))
    const estaciones = []
    colleccionTraer.forEach((doc) => {
      estaciones.push({
        ...doc.data()


      })
    })
    dispatch(listSync(estaciones))

  }
}

export const listSync = (estacion) => {
  return {
    type: typesEstaciones.list,
    payload: estacion
  }

}

//-------------agregar---------------//
export const addAsync = (estacion) => {
  return (dispatch) => {
    addDoc(collection(baseDato, nombreEntidad), estacion)
      .then(resp => {
        dispatch(addSync(estacion))
        //  dispatch(listAsyn())
      })
      .catch(error => {
        console.warn(error);
      })
  }
}

export const addSync = (estacion) => {
  return {
    type: typesEstaciones.add,
    payload: estacion,
  }
}