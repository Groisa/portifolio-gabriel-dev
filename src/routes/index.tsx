


import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
// import { Container } from './styles';

const RoutesApp: React.FC = () => {
   
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

export default RoutesApp;