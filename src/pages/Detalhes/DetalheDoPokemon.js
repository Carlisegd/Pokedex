import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

const DetalhesDoPokemon= () => {
    const [info, setInfo]= useState([])
    const {id}= useParams();
    useEffect(() => pegarInfoDoPokemon(), []);

    const pegarInfoDoPokemon= async () => {
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result= await response.json();
        setInfo([result])
    }
    
    const informacoes= info.length === 0 ?"Carregando...": info.map(obj => {
        return(
            <div>
                <div>
                    <img src={obj.sprites.front_default}/>

                    <img src={obj.sprites.back_default}/>
                </div>

                <div>
                    <h1>Ataques</h1>

                    {obj.moves.map(ataques => {
                        return(
                            <h3>{ataques.move.name}</h3>
                        )
                    })}
                    
                </div>
            </div>
        )
    })
    
    return(
        <div>
            <Header titulo="" button={["Voltar", "Ir para Pokédex"]} path={["/", "/pokedex"]}/>
            {informacoes}
        </div>
    )
};

export default DetalhesDoPokemon;
