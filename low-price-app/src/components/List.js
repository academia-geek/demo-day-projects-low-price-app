import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, listAsyn } from '../redux/actions/actionLugares';
import Edit from './Edit';

const List = () => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [enviarDatosModal, setEnviarDatosModal] = useState([])

  const { lugares } = useSelector(store => store.lugares)

  useEffect(() => {
    dispatch(listAsyn())
  }, [])

  const editar = (codigo) => {
    //--------t=conseguir los datos de ese objeto con ese codigo--------------//
    const traerLaLugar = lugares.find(t => t.codigo === codigo)

    setModal(true)
    setEnviarDatosModal(traerLaLugar)


  }

  return (
    <div>
      <Table>
        <thead>
        </thead>
        <tbody>
          {
            lugares.map((p, index) => (
              <tr key={index}>
                <td>
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: p.foto
                    },
                    largeImage: {
                      src: p.foto,
                      width: 1200,
                      height: 1800
                    }
                  }} />
                </td>
                <td>{p.nombre}</td>
                <td>{p.codigo}</td>
                <td>{p.ubicacion}</td>
                <td>{p.precio}</td>
                <td>
                  <Button margin={10} onClick={() => dispatch(deleteAsync(p.codigo))}> <Image onClick={() => dispatch(deleteAsync(p.codigo))} width={20} src='https://res.cloudinary.com/dsocuaabs/image/upload/v1650321093/LowPriceApp/km9fp6fuzekmbgpddkjp.png' /> </Button>
                  <Button margin={10} onClick={() => editar(p.codigo)}> <Image onClick={() => editar(p.codigo)} width={20} src='https://res.cloudinary.com/dsocuaabs/image/upload/v1650321139/LowPriceApp/r3jxvhpvcp3hysnrpepp.png' /></Button>
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