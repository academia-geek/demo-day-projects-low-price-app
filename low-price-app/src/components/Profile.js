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
			
		</section>
	)
}


export default Profile