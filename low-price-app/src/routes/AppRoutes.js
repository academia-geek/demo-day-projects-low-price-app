import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import MapView from '../components/MapView'

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapView />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
