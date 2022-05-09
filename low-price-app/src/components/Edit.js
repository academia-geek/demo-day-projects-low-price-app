import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { editAsync } from '../redux/actions/actionEstaciones';

const Edit = ({ modal }) => {

  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [values, handleInputChange, reset] = useForm({
    description: modal.description,
    name: modal.name,
    lat: modal.geometry[0],
    long: modal.geometry[1],
    gasolinaExtra: modal.precio.gasolinaExtraNumero,
    gasolinaCorriente: modal.precio.gasolinaCorrienteNumero,
    acpm: modal.precio.acpmNumero

  })
  const { description, name, gasolinaExtra, gasolinaCorriente, acpm, lat, long } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    const gasolinaExtraNumero = parseInt(gasolinaExtra)
    const gasolinaCorrienteNumero = parseInt(gasolinaCorriente)
    const acpmNumero = parseInt(acpm)
    const latitudNumero = parseInt(lat)
    const longitudNumero = parseInt(long)
    const estacionAGuardar = {
      id: modal.id,
      description: description,
      name: name,
      precio: { gasolinaExtraNumero, gasolinaCorrienteNumero, acpmNumero },
      geometry: [latitudNumero, longitudNumero]
    }
    dispatch(editAsync(modal.id, estacionAGuardar))
    console.log(values)
    reset()
    setShow(false)
  }
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar estación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={() => handleSubmit()}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de la estación</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter nombre" value={name} onChange={handleInputChange} />

                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter descripcion" value={description} onChange={handleInputChange} />

                <Form.Label>Latitud</Form.Label>
                <Form.Control type="number" name="lat" placeholder="latitud" value={lat} onChange={handleInputChange} />

                <Form.Label>Longitud</Form.Label>
                <Form.Control type="number" name="long" placeholder="longitud" value={long} onChange={handleInputChange} />

                <Form.Label>gasolinaExtra</Form.Label>
                <Form.Control type="number" name="gasolinaExtra" placeholder="latitud" value={gasolinaExtra} onChange={handleInputChange} />

                <Form.Label>gasolinaCorriente</Form.Label>
                <Form.Control type="number" name="gasolinaCorriente" placeholder="gasolinaCorriente" value={gasolinaCorriente} onChange={handleInputChange} />

                <Form.Label>acpm</Form.Label>
                <Form.Control type="number" name="acpm" placeholder="acpm" value={acpm} onChange={handleInputChange} />

              </Form.Group>

              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Save
              </Button>
            </Form>

          </Modal.Body>


        </Modal>
      </>
    </div>
  );
};

export default Edit;