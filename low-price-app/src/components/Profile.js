import React from 'react'
import { obtenerUsuarioStorage } from '../helpers/LocalStorage'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { logoutAsync } from '../redux/actions/actionLogin'
import logooutLogo from '../assets/cerrarSesion.png'

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
			<h1 onClick={() => navigate('/map')} className='lowPriceTitle'>Low Price</h1>
            <hr />
			<div>
				<h3>{obtenerUsuarioStorage('nombre')}</h3>
				<p>{obtenerUsuarioStorage('email')}</p>
				<img src={obtenerUsuarioStorage('photo')} alt="" />
			</div>
			<span>
				Las estaciones que se marcan como favoritas quedarán guardadas solo para este perfil
			</span>
			<div>
				<Link to='/favoritos'>Ir a mis Favoritos</Link>
			</div>
			<strong className='cerrarSesionTitle' onClick={handleLogout}>
				<img style={{width:'1rem'}} src={logooutLogo} alt="" />
				<h4>Cerrar Sesión</h4>
			</strong>
		</section>
	)
}


export default Profile