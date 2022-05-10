import React from 'react';
import '../styles/_LandingPage.scss'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import product from '../assets/PhoneMaps.png'
import conectividad from '../assets/conectividad.png'
import permisos from '../assets/permisos.png'
import eleccion from '../assets/eleccion.png'
import tiempo from '../assets/ahorraTiempo.png'
import dinero from '../assets/ahorrar-dinero.png'
import idea from '../assets/innovacion.png'
import reseña from '../assets/reseña.png'
import { Carousel } from 'react-bootstrap';
import product2 from '../assets/mapsApp.png'
import product3 from '../assets/product30.png'

export const LandingPage = () => {
    return (
        <div className='divGeneral'>
            <header>
                <img alt='' src={logo} width="14%" />
                <div className='flex'>
                    <h5>Product</h5>
                    <h5>Features</h5>
                    <h5>Reviews</h5>
                    <h5>Contact</h5>
                    <button><Link to="/login">Iniciar Sesion</Link></button>
                    <button><Link to="/register">Registrarse</Link></button>
                </div>
            </header>
            <section className='section1'>
                <h2>The future of tech is here</h2>
                <p>Encourage collaboration and the exchange of ideas to improve the user experience. Real services focused on the performance of time and money.</p>
                <img alt='' src="https://s03.s3c.es/imag/_v0/770x420/6/4/2/Google-maps-nueva-york.jpg" width="30%" />
            </section>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50 m-auto"
      src={product}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-30 m-auto"
      src={product2}
      alt="Second slide"
      height="446vh"    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-30 m-auto"
      src={product3}
      alt="Third slide"
      height="446vh"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <section className='section3'>
                <h2>HOW DOES IT WORK</h2>
                <p>Everyone wants to save a little money when buying a product, we show you the different options and you choose the best alternative</p>
                <div className='flex'>
                    <div className='colum'>
                        <img alt='' src={conectividad} />
                        <p>Register in the application</p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum ratione nesciunt iure reiciendis? Quod ut ullam iste labore similique pariatur commodi velit, deleniti enim alias eius iure esse reiciendis.</small>
                    </div>
                    <div className='colum'>
                        <img alt='' src={permisos} />
                        <p>Accept location permissions</p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque culpa inventore quidem, quisquam est consectetur tempore deserunt soluta ipsam optio omnis ipsum natus ullam voluptatem ipsa ea, sit sunt!</small>
                    </div>
                    <div className='colum'>
                        <img alt='' src={eleccion} />
                        <p>Yay! Done. Choose your best option</p>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi molestiae fugit non saepe molestias facilis suscipit repellendus amet veritatis deserunt, asperiores sint nemo itaque voluptatibus expedita fuga. Ipsa, assumenda quam.</small>
                    </div>
                </div>
            </section>
            <section className='section4'>
                <h2>THE BENEFITS</h2>
                <div className='flex'>
                    <p> <img alt='' src={idea} width="50px" />   Innovative idea</p>
                    <p> <img alt='' src={dinero} width="55px" />   Save money</p>
                    <p> <img alt='' src={tiempo} width="50px" />   Save Time</p>
                </div>
            </section>
            <section className='section5'>
                <h2>REVIEWS</h2>
                <p>Don’t take our word,. See what our experts says about the watch. We have got over 1000s of positive reviews.</p>
                <div className='flex'>
                    <div className='column'>
                        <img alt='' src={reseña} />
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel magni aut blanditiis voluptatum? Delectus enim perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum voluptatem nulla fuga. Consectetur error quod minima sequi ex a perspiciatis veritatis blanditiis, quo maiores iusto, praesentium quasi dicta architecto.</small>
                    </div>
                    <div className='column'>
                        <img alt='' src={reseña} />
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum, dolorem fuga quas quibusdam eum tenetur a id eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit aut tenetur quo iste eligendi libero. Fugit, id voluptates alias ipsam eum sint? Quia maiores, numquam voluptate aperiam quasi corrupti.</small>
                    </div>
                    <div className='column'>
                        <img alt='' src={reseña} />
                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam odio sunt illum ex quam, exercitationem illo consectetur laborum nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos, consectetur minima culpa incidunt sit, esse illo in maiores dolores ipsa impedit omnis voluptates dolor cumque eaque vitae dolorem nobis!</small>
                    </div>
                </div>
            </section>
            <section className='section6'>
                <p>We are a group of frontend developers graduated from geek academy</p>
                <div className='flex'>
                    <div className='cards'>
                        <p>Lizeth Paola Delgadillo</p>
                        <small>lizdelga001@gmail.com</small>
                        <small><a href="https://github.com/LPDelgadillo" target='_blank' rel="noreferrer">
					<img width="50px"src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1652120654/samples/redes/img_326384_ep8nnv.png" alt="" />
				</a></small>
                    </div>
                    <div className='cards'>
                        <p>Daniel Jose Correa</p>
                        <small>danielcorrea3131@gmail.com</small>
                        <small><a href="https://github.com/Daniel3132" target='_blank' rel="noreferrer">
					<img width="50px"src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1652120654/samples/redes/img_326384_ep8nnv.png" alt="" />
				</a></small>
                    </div>
                    <div className='cards'>
                        <p>Yineth Paola Duarte</p>
                        <small>Yineth@gmail.com</small>
                        <small><a href="https://github.com/" target='_blank' rel="noreferrer">
					<img width="50px"src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1652120654/samples/redes/img_326384_ep8nnv.png" alt="" />
				</a></small>
                    </div>
                </div>
            </section>
        </div>
    );
} 
