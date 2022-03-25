import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Pokedex from "../pages/Pokedex";


const Router = () => {
    return (      
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/detalhes/:name" element ={<Detalhes />} />
                <Route path="/pokedex" element ={<Pokedex />} />
                <Route path="*" element ={<h1>Página não encontrada!</h1>} />
            </Routes>
    )
}

export default Router