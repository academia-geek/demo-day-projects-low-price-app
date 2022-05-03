import React from 'react'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'

const Profile = () => {
	return (
		<section id='profile'>
			<h1>Low Price</h1>
			<hr />
			<div>
				<h3>{obtenerUsuarioStorage('nombre')}</h3>
				<p>{obtenerUsuarioStorage('email')}</p>
				<img src={obtenerUsuarioStorage('photo')} alt="" />
			</div>

			<div className='profileContent'>
				<div>
					<h4>Favoritos</h4>
					<ul>
						<li>Estacion de ejemplo</li>
						<li>Estacion de ejemplo</li>
					</ul>
				</div>
				<hr />
				<div>
					<h4>Estaciones Agregadas</h4>
					<ul>
						<li>Estacion de ejemplo</li>
						<li>Estacion de ejemplo</li>
					</ul>
				</div>

			</div>



		</section>
	)
}


export default Profile