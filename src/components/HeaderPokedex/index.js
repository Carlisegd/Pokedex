import React from "react";
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {Div, Img, Nav,  Button} from './styled';
import {FaHome} from 'react-icons/fa';


const HeaderPokedex = () => {

  const routes = useNavigate()

  const PageDaHome = () => {
    routes("/")
  }
    return (
      <Nav>
        <Img src="https://i.postimg.cc/KY9P2h0V/Logo-Est-tica.png"/>
        <Div>
          <div><Button onClick={() => PageDaHome()}><FaHome className="icon"/>Home</Button></div>  
        </Div>       
      </Nav>
    )
}
export default HeaderPokedex