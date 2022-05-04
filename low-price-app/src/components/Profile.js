import React from 'react'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { logoutAsync } from '../redux/actions/actionLogin'


const Profile = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		Swal.fire({
			title: '¿Cerrar Sesión?',
			text: "¿Estás seguro que deseas salir?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3171ec',
			cancelButtonColor: '#E72F3E',
			confirmButtonText: 'Yes'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(logoutAsync())
				navigate("/login")
				Swal.fire(
					'Adios!',
					'Gracias!',
					'success'
				)
			}
		})
	}

	return (
		<section id='profile'>
			<h1 onClick={()=>navigate('/')} className='lowPriceTitle'>Low Price</h1>
			<hr />
			<div>
				<h3>{obtenerUsuarioStorage('nombre')}</h3>
				<p>{obtenerUsuarioStorage('email')}</p>
				<img src={obtenerUsuarioStorage('photo')} alt="" />
			</div>
			<div>
				<Link to='/favoritos'>Favoritos</Link>
			</div>
			<span className='cerrarSesionTitle' onClick={handleLogout}>
				<img src="" alt="" />
				<h4>Cerrar Sesión</h4>
			</span>
		</section>
	)
}


export default Profile