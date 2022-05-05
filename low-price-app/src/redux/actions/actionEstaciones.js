import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"//Ingresar la bd de Daniel
import { typesEstaciones } from "../types/types"

const nombreEntidad = "estacionesBD"

//---------------------Edit-----------//
export const editAsync = (codigo, lugar) => {
  console.log(codigo, lugar)
  return async (dispatch) => {
    const colleccionTraer = collection(baseDato, nombreEntidad)
    const q = query(colleccionTraer, where("id", "==", codigo))
    const traerDatosQ = await getDocs(q)
    let id
    traerDatosQ.forEach(async (docu) => {
      id = docu.id
    })
    console.log(id)
    const documenRef = doc(baseDato, nombreEntidad, id)
    await updateDoc(documenRef, lugar)
      .then(resp => {
        dispatch(editSync(lugar))
        dispatch(listAsyn())
        console.log(resp)
      })
      .catch((err) => console.log(err))

  }
}


export const editSync = (lugar) => {
  return {
    type: typesEstaciones.editSync,
    payload: lugar
  }

}

//-------------------delete--------------------//
export const deleteAsync = (codigo) => {

  return async (dispatch) => {
    const colleccionTraer = collection(baseDato, nombreEntidad)
    const q = query(colleccionTraer, where("id", "==", codigo))
    const traerDatosQ = await getDocs(q)
    traerDatosQ.forEach((docum => {
      deleteDoc(doc(baseDato, nombreEntidad, docum.id))
    }))
    dispatch(deleteSync(codigo))
    dispatch(listAsyn())
  }
}

export const deleteSync = (codigo) => {
  return {
    type: typesEstaciones.delete,
    payload: codigo
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

export const listSync = (lugar) => {
  return {
    type: typesEstaciones.list,
    payload: lugar
  }

}

//-------------agregar---------------//
export const addAsync = (lugar) => {
  return (dispatch) => {
    addDoc(collection(baseDato, nombreEntidad), lugar)
      .then(resp => {
        dispatch(addSync(lugar))
        //  dispatch(listAsyn())
      })
      .catch(error => {
        console.warn(error);
      })
  }
}

export const addSync = (lugar) => {
  return {
    type: typesEstaciones.add,
    payload: lugar,
  }
}