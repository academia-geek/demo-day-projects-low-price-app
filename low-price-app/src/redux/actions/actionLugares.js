import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"//Ingresar la bd de Daniel
import { typesLugares } from "../types/types"

//---------------------Edit-----------//
export const editAsync = (codigo, lugar) => {
  console.log(codigo, lugar)
  return async (dispatch) => {
    const colleccionTraer = collection(baseDato, "lugaresBD")
    const q = query(colleccionTraer, where("codigo", "==", codigo))
    const traerDatosQ = await getDocs(q)
    let id
    traerDatosQ.forEach(async (docu) => {
      id = docu.id
    })
    console.log(id)
    const documenRef = doc(baseDato, "lugaresBD", id)
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
    type: typesLugares.editSync,
    payload: lugar
  }

}

//-------------------delete--------------------//
export const deleteAsync = (codigo) => {

  return async (dispatch) => {
    const colleccionTraer = collection(baseDato, "lugaresBD")
    const q = query(colleccionTraer, where("codigo", "==", codigo))
    const traerDatosQ = await getDocs(q)
    traerDatosQ.forEach((docum => {
      deleteDoc(doc(baseDato, "lugaresBD", docum.id))
    }))
    dispatch(deleteSync(codigo))
    dispatch(listAsyn())
  }
}

export const deleteSync = (codigo) => {
  return {
    type: typesLugares.delete,
    payload: codigo
  }

}

//---------------listar----------------//
export const listAsyn = () => {
  return async (dispatch) => {
    const colleccionTraer = await getDocs(collection(baseDato, "lugaresBD"))
    const lugares = []
    colleccionTraer.forEach((doc) => {
      lugares.push({
        ...doc.data()


      })
    })
    dispatch(listSync(lugares))

  }
}

export const listSync = (lugar) => {
  return {
    type: typesLugares.list,
    payload: lugar
  }

}

//-------------agregar---------------//
export const addAsync = (lugar) => {
  return (dispatch) => {
    addDoc(collection(baseDato, "lugaresBD"), lugar)
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
    type: typesLugares.add,
    payload: lugar,
  }
}