import React from 'react';
import '../styles/_LandingPage.scss'
import logo from '../media/lowPricaApp 1.png'
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { registerAsync} from '../redux/actions/actionRegister';
import { Link } from 'react-router-dom';




//----------------Validacion de cada input -----------
const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'El nombre es muy corto')
        .max(50, 'excede el maximo')
        .required('Nombre Obligatorio'),

    email: Yup.string()
        .email('debe ser de tipo email, ex. ana@gmail.com')
        .min(5, 'El Correo es muy corto')
        .max(50, 'excede el maximo')
        .required('Correo Obligatorio'),

    pass: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .max(10, 'Máximo 10')
        .required('La contraseña obligatoria')
        .oneOf([Yup.ref('pass2')], 'Las contraseñas no coinciden'),

    pass2: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .max(10, 'Máximo 10')
        .required('La contraseña obligatoria')
        .oneOf([Yup.ref('pass')], 'Las contraseñas no coinciden')
});


export const LandingPage = () => {
    const dispatch = useDispatch()

    return (

        <div className='divGeneral'>
            <div >
            <div className='header'>
                <button>
                    <Link to="/login">Ir al login</Link>
                </button>
            </div>
            <div className='contenedorFormularioyDescripcion'>
                <div className='ancho50'>
                    <h1>Bienvenidos a Low Price</h1>
                    <div className='contenedor'>
                        <p>El tiempo y el dinero que gastamos en dirigirnos a una estación de gasolina y no
                            encontrar el producto indicado o el precio justo, pueden ser situaciones molestas
                            para quien tiene vehículo. Low Price es una aplicación que busca hacerte la vida más cómoda,
                            ya que te proporciona las estaciones de gasolina más cercanas a tu destino, los productos
                            que ofrecen cada una de éstas y los precios que se maneja. Todo ésto de forma rápidida, segura
                            y dinámica.
                        </p>
                    </div>
                </div>
                <div className='ancho50'>
                    <Formik
                        initialValues={
                            {
                                nombre: '',
                                email: '',
                                pass: '',
                                pass2: ''
                            }
                        }
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            console.log(values)
                            dispatch(registerAsync(values.email, values.pass, values.nombre))

                        }}
                    >
                        {({ errors, touched, handleSubmit, handleChange, handleReset }) => (
                            <Form
                                className='formularioRegistro'>

                                <h2>Registrarse</h2>
                                <Field name="nombre" placeholder="Nombre" type="text" style={{ margin: "2%" }} />
                                {errors.nombre && touched.nombre ?
                                    (<div>{errors.nombre}</div>) : null}

                                <Field name="email" placeholder="Correo Electronico" type="email" style={{ margin: "2%" }} />
                                {errors.email && touched.email ?
                                    (<div>{errors.email}</div>) : null}

                                <Field name="pass" placeholder="Contraseña" type="password" style={{ margin: "2%" }} />
                                {errors.pass && touched.pass ?
                                    (<div>{errors.pass}</div>) : null}


                                <Field name="pass2" placeholder="Confirmar contraseña" type="password" style={{ margin: "2%" }} />
                                {errors.pass2 && touched.pass2 ?
                                    (<div>{errors.pass2}</div>) : null}

                                <button type="submit" style={{ margin: "2%" }}>Registrarse</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            </div>
            <div className='footer'>
                <img src={logo} alt="" />
                <ul>
                    <h4>Nosotros</h4>
                    <li>3138683453</li>
                    <li>lowprice@gmail.com</li>
                </ul>
            </div>
        </div>
    );
} 
