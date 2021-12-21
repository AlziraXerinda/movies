import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from './pages/details'
import HomePage from './pages/home'


const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/login" element={<HomePage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
            </Routes>
        </HashRouter>
    )
}

export default Routing;
