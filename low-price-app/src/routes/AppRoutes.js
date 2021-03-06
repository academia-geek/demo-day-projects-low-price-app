import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from '../components/Register';
import { Login } from '../components/Login';
import { guardarUsuarioStorage } from '../helpers/LocalStorage';
import PublicRouters from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import DashboardRoute from './DashboardRoute';
import { LandingPage } from '../components/LandingPage';

export const AppRoutes = () => {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        guardarUsuarioStorage(user.displayName, user.email, user.photoURL)
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

        <Route path="/landing" element={
          <PublicRouters isAut={isLoggedIn}>
            <LandingPage />
          </PublicRouters>} />

        <Route path="/login" element={
          <PublicRouters isAut={isLoggedIn}>
            <Login />
          </PublicRouters>} />

        <Route path="/register" element={
          <PublicRouters isAut={isLoggedIn}>
            <Register />
          </PublicRouters>
        } />

        <Route path="/*" element={<PrivateRoutes isAut={isLoggedIn}>
          <DashboardRoute />
        </PrivateRoutes>} />

      </Routes>
    </BrowserRouter>
  )
}
