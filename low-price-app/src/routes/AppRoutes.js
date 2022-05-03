import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Register } from '../components/Register';
import { Login } from '../components/Login';
import { guardarUsuarioStorage } from '../helpers/LocalStorage';
import PublicRouters from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import DashboardRoute from './DashboardRoute';
import MapView from '../components/MapView';
import { LandingPage } from '../components/LandingPage';

const AppRoutes = () => {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        guardarUsuarioStorage(user.displayName, user.email)
        console.log(user)
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setIsLoggedIn, setChecking])

  if (checking) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    )
  }
  return (
    <BrowserRouter>
      <Routes >
<<<<<<< HEAD
        <Route path="/landing" element={
            <PublicRouters isAut={isLoggedIn}>
              <LandingPage />
            </PublicRouters>} />
          
=======
>>>>>>> rr
        <Route path="/login" element={
          <PublicRouters isAut={isLoggedIn}>
            <Login />
          </PublicRouters>} />

        <Route path="/register" element={
          <PublicRouters isAut={isLoggedIn}>
            <Register />
          </PublicRouters>
        } />

<<<<<<< HEAD
        <Route path="/map" element={
          <PublicRouters >
            <MapView/>
          </PublicRouters>
        } />



=======
>>>>>>> rr
        <Route path="/*" element={<PrivateRoutes isAut={isLoggedIn}>
          <DashboardRoute />
        </PrivateRoutes>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes