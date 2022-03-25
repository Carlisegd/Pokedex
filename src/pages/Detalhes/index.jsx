import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";

const Detalhes = () => {

    const detalhesPokemon =useContext(GlobalStateContext)

    const [info, setInfo]= useState([])
    const [foto, setFoto] = useState()
    const [type, setType] = useState()
    const [type2, setType2] = useState()
    const [habilidade, setHabilidade] = useState()
    const [habilidade2, setHabilidade2] = useState()

    
    const {name}= useParams ();
        //console.log(params)
    
    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) =>{
            console.log(response.data)
            setInfo(response.data)            
            setFoto(response.data.sprites.other.home.front_default)
            setType(response.data.types[0].type.name)
            setType2(response.data.types[1].type.name)
            setHabilidade(response.data.abilities[0].ability.name)
            setHabilidade2(response.data.abilities[1].ability.name)
        })
        .catch((error) => {
            console.log(error)
        })        
    }, []);

    console.log(info)

    

    return (

        <div>
            <h1>Página Detalhes dos Pokemons</h1>
            <Header />
            <img src={foto} alt="" style={{width: '50%'}}/>
            <h1>Nome: {info.name}</h1>
            <h2>Altura: {info.height} cm</h2>
            <h2>Peso: {info.weight} g</h2>
            <h2>Habilidades:</h2>
            <h3>{habilidade}</h3>
            <h3>{habilidade2}</h3>
            <h2>Tipos:</h2>
            <h3>{type}</h3>
            <h3>{type2}</h3>
        </div>
    )
}

export default Detalhes