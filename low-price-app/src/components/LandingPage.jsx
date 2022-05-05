import React from 'react';
import '../styles/_LandingPage.scss'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



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
                <div className='ancho50'>
                    <h1>Bienvenidos a Low Price</h1>
                    <div className='contenedor'>
                        <p>
                        </p>
                    </div>    
            </div>
            </div>
        </div>
    );
} 
