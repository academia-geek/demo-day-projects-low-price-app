import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CrudForm from '../components/CrudForm';
import Favoritos from '../components/Favoritos';
import List from '../components/List';
import MapView from '../components/MapView';
import Profile from '../components/Profile';
import PruebaAddFavoritos from '../components/PruebaAddFavoritos';

const DashboardRoute = () => {
    return (
        <div>
            <>
                <Routes>
                    <Route path="/" element={<MapView />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/crudForm" element={<CrudForm />} />
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