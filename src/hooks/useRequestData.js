import { useState, useEffect } from "react"
import axios from "axios"

const useRequestData = (initial, url)=>{
    const [pokemon, setPokemon] = useState(initial)
    
    // const [error, setError] = useState("");

    useEffect(() => {
      // setLogin(true);
      //const headers = {Authorization: localStorage.getItem("token"),};
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.results)
          
          setPokemon(response.data.results);
        })
        .catch((error) => {
          
          console.log(error)
        });
    }, [url]);
    
    return (pokemon);
}

export default useRequestData