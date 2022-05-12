import React from 'react';
import '../styles/_LandingPage.scss'
import imgMapa from '../assets/gift-marcadores.gif'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';
import tiempo from '../assets/ahorraTiempo.png'
import dinero from '../assets/ahorrar-dinero.png'
import relax from '../assets/relax.png'
import comparar from '../assets/compararP.png'
import registrate from '../assets/registrar.png'
import iniciaSesion from '../assets/iniciar.png'
import ubicacion from  '../assets/giftUbicacion.gif'
import click from '../assets/giftClick.gif'



export const LandingPage = () => {
    return (
        <div className='divGeneral'>
            <header>
                <div className='logos'>
                    <h2>Low Price App</h2>
                    <img alt='' src={logo} width="10%" />
                </div>
                <Link className='btnR' to="/register">Registrarse</Link>
                <Link className='btnI' to="/login">Iniciar Sesion</Link>
            </header>
            <main>
                <div className='flex'>
                    <img alt='' src={imgMapa} />
                    <div className='descripcion'>
                        <h3>Compara los precios de las estaciones de gasolina cercanas</h3>
                        <p>Fomentá la colaboración y el intercambio de ideas para mejorar la experiencia del usuario. Servicios reales enfocados en el rendimiento del tiempo y el dinero del usuario</p>
                    </div>
                </div>
                <p>Todo el mundo quiere ahorrar un poco de dinero a la hora de comprar un producto, nosotros te mostramos las diferentes opciones y tú eliges la mejor alternativa</p>
            </main>
            <section className='sect1'>
                <h3>¿Como funciona?</h3>
                <div className='contCards'>
                    <div className='card'>
                        <p>Registrate</p>
                        <img alt='' src={registrate} width="250px"/>
                    </div>
                    <div className='card'>
                        <p>Inicia Sesión</p>
                        <img alt='' src={iniciaSesion} width="250px"/>
                    </div>
                    <div className='card'>
                        <p>Accede a tu Ubicacion</p>
                        <img alt='' src={ubicacion} height="180px"/>
                    </div>
                    <div className='card'>
                        <p>Compara precios</p>
                        <img alt='' src={comparar} width="250px"/>
                    </div>
                    <div className='card'>
                        <p>Actualiza precios</p>
                        <img alt='' src={comparar} width="250px"/>
                    </div>
                    <div className='card'>
                        <p>Agrega una nueva estación</p>
                        <img alt='' src={comparar} width="250px"/>
                    </div>
                </div>
                <img alt='' src={click} width="100px"/>
            </section>
            <section className='sect2'>
                <h3>Beneficios de utilizar nuestra App</h3>
                <div className='flex'>
                    <p> <img alt='' src={relax} width="50px" />   Te estresas menos</p>
                    <p> <img alt='' src={dinero} width="55px" />   Ahorras dinero</p>
                    <p> <img alt='' src={tiempo} width="50px" />   Ahorras Tiempo</p>
                </div>
            </section>
            <footer></footer>
        </div>
    );
} 
