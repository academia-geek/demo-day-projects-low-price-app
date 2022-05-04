import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import MapView from '../components/MapView';

const DashboardRoute = () => {
    return (
        <div>
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/map/:localizacion" element={<MapView />} />
                </Routes>
            </>
        </div>
    );
};

export default DashboardRoute;