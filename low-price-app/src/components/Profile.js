import React from 'react'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'

const Profile = () => {
	return (
		<section id='profile'>
			<div>
				<h3>{obtenerUsuarioStorage('nombre')}</h3>
				<img src={obtenerUsuarioStorage('photo')} alt="" />
				<p>{obtenerUsuarioStorage('email')}</p>
			</div>

			<div>

			</div>

		</section>
	)
}


export default Profile