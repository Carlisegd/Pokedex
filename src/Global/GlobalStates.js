import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"
const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(true)
    const [paginacao, setPaginacao] = useState(0) //mudar páginas

    useEffect(() => {
           axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${paginacao}`)
           .then(response =>
            pokemonData(response.data.results),
            )
            .catch((error) => {
                console.log(error.response.message)
            })
            setLoading(false)
    }, [paginacao]);
    const pokemonData = async (data) => {
        const loadingPokemon = await Promise.all(
            data.map(async(pokemon) => {
                const pokemonRecord = await axios.get(pokemon.url)
                .then((response) => response.data
                )
                .catch((error) => {
                    console.log(error)
                })
                const image = `https://professorlotus.com/Sprites/${pokemon.name}.gif`
                return {
                    ...pokemonRecord,
                    image
                }}),
        );
        setPokemons(loadingPokemon);
    }

   
    return (
        <GlobalStateContext.Provider value={{pokemons, pokedex, lista, paginacao, setPaginacao, setLista, setPokemons, setPokedex}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState