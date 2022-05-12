import React, { useEffect } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listAsyn } from '../redux/actions/actionEstaciones';
import '../styles/_listaOcupacionEstaciones.scss';
import { deleteAsyncOcupacionEstacion, listAsynOcupacionEstaciones } from '../redux/actions/actionOcupacionEstaciones';

const ListOcupacionEstaciones = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { ocupacionEstaciones } = useSelector(store => store.ocupacionEstaciones)
  const { estaciones } = useSelector(store => store.estaciones)

  useEffect(() => {
    dispatch(listAsynOcupacionEstaciones())
    dispatch(listAsyn())
  },[])


  function obtenerEstacionDelId(idRecibido){
    const estacionEncontrada = estaciones.find(m=>m.id===idRecibido);
    if(idRecibido && estacionEncontrada){
        return `${estacionEncontrada.name}`;
    }
    return '';
}

  return (
    <div className='general1'>
    <div className='general'>
      <hr />
      <center><h1 >Listado de ocupaciones</h1></center>
            <hr />
      <Table>
        <thead>
          <tr >
            <td>Nombre estacion</td>
            <td>Ocupacion</td>
            <td>Fecha de registro</td>
            <td>
              Acción
            </td>

          </tr>
        </thead>
        <tbody>
          {
            ocupacionEstaciones && ocupacionEstaciones.map((p, index) => (
              <tr key={index}>
                
                <td>{obtenerEstacionDelId(p.estacion)}</td>
                <td>{p.ocupacion}</td>
                <td>{new Intl.DateTimeFormat('es-Co', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(p.fecha)}</td>
                <td>
                  <Button margin={10} onClick={() => dispatch(deleteAsyncOcupacionEstacion(p.codigo))}> 
                    <Image onClick={() => dispatch(deleteAsyncOcupacionEstacion(p.codigo))} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png' /> 
                  </Button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default ListOcupacionEstaciones;