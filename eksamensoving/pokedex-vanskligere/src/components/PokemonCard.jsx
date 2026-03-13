import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function PokemonCard({url, classN}){
    const [pokemon, setPokemon] = useState()
    const getPokemon = async() =>{
        const response = await fetch(url)
        const data = await response.json()
        setPokemon(data)
    }

    useEffect(()=>{
        getPokemon()
    },[])
    
    return (
       
        <article className={`pokemon-card type-${classN}`}>
            <Link to={`/pokemons/${pokemon?.id}`} className="pokemon-link">
            {/*Gjør om til en kompnen*/} 
            <h3>{pokemon?.name}</h3>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            <p>#00{pokemon?.id}</p>
            </Link>
        </article>

    )
}