import React, {useContext} from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { Link, useNavigate } from "react-router-dom";
import {PageHome, DivButton, Div, Button, DivPokemon, FotoPokemon, DivButtonPokemon, DivContainer, ButtonPagina} from './styled';

const Pokedex = () => {
    const {pokemons, pokedex, lista, setLista, setPokemons, setPokedex}
    =useContext(GlobalStateContext)


    const onClickRemover = ((RemovePoke)=>{
        const novaLista = lista.filter((poke)=>{
            return poke.name !== RemovePoke.name
        })
        setLista(novaLista)

        const retornaPokemon = [RemovePoke, ...pokemons]
        setPokemons(retornaPokemon)
    })

    const navigate = useNavigate()

    const onClickPokemon = (name)=>{
        verDetalhes(navigate, name)
    }

    const verDetalhes =(navigate, name) => {
        navigate(`/detalhes/${name}`)
    }


    return (
        <div>
          <HeaderPokedex />
          <DivContainer>
                  <Div>
                      {lista.map (list =>(
                      <DivPokemon key={list.name}> 
                              <p className="nome">{list.name}</p>
                              <FotoPokemon src={list.image} alt={list.name}/>
                              <DivButton>
  
                              <DivButtonPokemon><Button onClick={()=>onClickRemover(list)} >Remover</Button></DivButtonPokemon>
  
                              <DivButtonPokemon><Button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</Button></DivButtonPokemon>
  
                              </DivButton>
                      </DivPokemon>
                      ))}
  
                  </Div>
              </DivContainer>
        </div>
          
      )
  }
  

export default Pokedex