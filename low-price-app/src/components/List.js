import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, listAsyn } from '../redux/actions/actionEstaciones';
import Edit from './Edit';

const List = () => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [enviarDatosModal, setEnviarDatosModal] = useState([])

  const { estaciones } = useSelector(store => store.estaciones)

  useEffect(() => {
    dispatch(listAsyn())
  }, [])

  const editar = (id) => {
    //--------t=conseguir los datos de ese objeto con ese id--------------//
    const traerLaEstacion = estaciones.find(t => t.id === id)

    setModal(true)
    setEnviarDatosModal(traerLaEstacion)


  }

  return (
    <div>
      <Table>
        <thead>
        </thead>
        <tbody>
          {
            estaciones.map((p, index) => (
              <tr key={index}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.geometry[0]+''+ p.geometry[1]}</td>
                <td>{p.precio.gasolinaExtraNumero}</td>
                <td>{p.precio.gasolinaCorrienteNumero}</td>
                <td>{p.precio.acpm}</td>
                <td>
                  <Button margin={10} onClick={() => dispatch(deleteAsync(p.id))}> <Image onClick={() => dispatch(deleteAsync(p.id))} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png' /> </Button>

                  <Button margin={10} onClick={() => editar(p.id)}> <Image onClick={() => editar(p.id)} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png' /></Button>
                </td>

              </tr>
            ))
          }

        </tbody>
      </Table>
      {
        modal === true ? <Edit modal={enviarDatosModal} /> : ''
      }
    </div>
  );
};

export default List;