import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import CarPage from "./pages/CarPage/CarPage";
import TransportationPage from "./pages/TransportationPage/TransportationPage";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<CarPage/>}/>
                <Route path="/transportation" element={<TransportationPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
