import React from "react";
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {Div, Img, Nav,  Button} from './styled';
import {MdCatchingPokemon} from 'react-icons/md';



const HeaderHome = () => {

  const routes = useNavigate()

  const PageDaPokedex = () => {
    routes("/pokedex")
  }
    return (
      <Nav>
        <Img src="https://i.postimg.cc/KY9P2h0V/Logo-Est-tica.png"/>
        <Div>
          <div><Button onClick={() => PageDaPokedex()}><MdCatchingPokemon className="icon"/>Pokedex</Button></div>  
        </Div>       
      </Nav>
    )
}
export default HeaderHome