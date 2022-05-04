import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CrudForm from '../components/CrudForm';
import Favoritos from '../components/Favoritos';
import Home from '../components/Home';
import MapView from '../components/MapView';
import Profile from '../components/Profile';



const DashboardRoute = () => {
    return (
        <div>
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/map" element={<MapView />} />
                    <Route path="/crudForm" element={<CrudForm />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </>
        </div>
    );
};

export default DashboardRoute;