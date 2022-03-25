import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
           <Link to="/">Voltar</Link>
           <Link to="/pokedex">Lista Pokedex</Link>
            
        </div>
    )
}

export default Header