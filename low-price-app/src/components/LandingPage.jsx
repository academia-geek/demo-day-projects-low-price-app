import React from 'react';
import '../styles/_LandingPage.scss'
import imgMapa from '../assets/gift-marcadores.gif'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';
import tiempo from '../assets/ahorraTiempo.png'
import dinero from '../assets/ahorrar-dinero.png'
import relax from '../assets/relax.png'
import comparar from '../assets/compararP.png'
import ubicacion from '../assets/giftUbicacion.gif'
import click from '../assets/giftClick.gif'
import perfil1 from '../assets/usuario-icon.png'
import perfil2 from '../assets/usuario-icon.png'
import perfil3 from '../assets/usuario-icon.png'
import agregar from '../assets/agregarEstacion.png'
import like from '../assets/gipftEscribir.gif'
import actualizaP from '../assets/actualizarInfo.png'
import registrarse from '../assets/registro2.png'
import iniciarSesion from '../assets/inicioSesion2.png'


export const LandingPage = () => {
    return (
        <div className='divGeneral'>
            <header>
                <div className='logos'>
                    <h2>Low Price App</h2>
                    <img  className='logo' alt='' src={logo} width="10%" />
                </div>
                <Link className='btnR' to="/register">Registrarse</Link>
                <Link className='btnI' to="/login">Iniciar Sesión</Link>
            </header>
            <main>
                <div className='flex'>
                    <img className='mapa' alt='' src={imgMapa} />
                    <div className='descripcion'>
                        <h3 className='titleLanding'>Ayudamos a tomar buenas decisiones</h3>
                        <p>Fomenta la colaboración y el intercambio de ideas para mejorar la experiencia del usuario. Servicios reales enfocados en el rendimiento del tiempo y el dinero del usuario</p>
                    </div>
                </div>
                <p className='pLanding'>Todo el mundo quiere ahorrar un poco de dinero a la hora de comprar un producto, nosotros te mostramos las diferentes opciones y tú eliges la mejor alternativa</p>
            </main>
            <section className='sect1'>
                <h3>¿Como funciona?</h3>
                <div className='contCards'>
                    <div className='card'>
                        <p>Registrate</p>
                        <img alt='' src={registrarse} width="250px" />
                    </div>
                    <div className='card'>
                        <p>Inicia Sesión</p>
                        <img alt='' src={iniciarSesion} width="250px" />
                    </div>
                    <div className='card'>
                        <p>Accede a tu Ubicacion</p>
                        <img alt='' src={ubicacion} height="180px" />
                    </div>
                    <div className='card'>
                        <p>Compara precios</p>
                        <img alt='' src={comparar} width="250px" />
                    </div>
                    <div className='card'>
                        <p>Actualiza precios</p>
                        <img alt='' src={actualizaP} height="210px" />
                    </div>
                    <div className='card'>
                        <p>Agrega una nueva estación</p>
                        <img alt='' src={agregar} height="175px" />
                    </div>
                </div>
                <img alt='' src={click} width="100px" />
            </section>
            <section className='sect2'>
                <h3>Beneficios de utilizar nuestra App</h3>
                <div className='flex'>
                    <p> <img alt='' src={relax} width="65px" />   Te estresas menos</p>
                    <p> <img alt='' src={dinero} width="55px" />   Ahorras dinero</p>
                    <p> <img alt='' src={tiempo} width="50px" />   Ahorras Tiempo</p>
                </div>
            </section>

            <section className='sect2' >
                <h3>Reseñas de nuestros usuarios</h3>
                <div className='experiencias'>
                <div>
                    <div>
                        <img src={perfil1} alt="" />
                        <div>
                            <h4>Martha Hernández</h4>
                            <img alt='' src={like}/>
                        </div>
                    </div>
                    <p>"Me ha resultado muy útil esta aplicación para tener referencias de estaciones que no conocía."</p>
                </div>
                <div>
                    <div>
                        <img src={perfil2} alt="" />
                        <div>
                            <h4>Santiago Torres</h4>
                            <img alt='' src={like}/>
                        </div>
                    </div>
                    <p>"Ahora siempre que quiero tanquear mi carro pienso primero en Low Price."</p>
                </div>
                <div>
                    <div>
                        <img src={perfil3} alt="" />
                        <div>
                            <h4>Luisa García</h4>
                            <img alt='' src={like}/>
                        </div>
                    </div>
                    <p>"Me encanta el hecho de que seamos nosotros mismos los que damos informacion a la app, así hay referencias reales para no ser estafada."</p>
                </div>
                </div>
            </section>

            <footer></footer>
        </div>
    );
} 
