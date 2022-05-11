import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AgregarOcupacionEstacion from '../components/AgregarOcupacionEstacion';
import CrudForm from '../components/CrudForm';
import Favoritos from '../components/Favoritos';
import Home from '../components/Home';
import List from '../components/List';
import ListOcupacionEstaciones from '../components/ListOcupacionEstaciones';
import MapView from '../components/MapView';
import Profile from '../components/Profile';
import PruebaAddFavoritos from '../components/PruebaAddFavoritos';

const DashboardRoute = () => {
    return (
        <div>
            <>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/crudForm" element={<CrudForm />} />
                    <Route path="/AgregarOcupacionEstacion" element={<AgregarOcupacionEstacion />} />
                    <Route path="/ListOcupacionEstaciones" element={<ListOcupacionEstaciones />} />
                    <Route path='/map' element={<MapView/>}/>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/prueba" element={<PruebaAddFavoritos />} />
                </Routes>
            </>
        </div>
    );
};

export default DashboardRoute;