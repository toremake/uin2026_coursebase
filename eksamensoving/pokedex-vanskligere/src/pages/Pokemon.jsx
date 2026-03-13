import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import '../styles/types.scss'
export default function Pokemon(){

    const {pokemon} = useParams()
    const [pokemonInfo, setPokemonInfo] = useState()
    const getPokemon = async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        setPokemonInfo(data)
        console.log(data)
        console.log(pokemonData)
    }
    useEffect(()=>{
        getPokemon()
    },[pokemon])

    return (
        <main>
            <h1>{pokemonInfo?.name}</h1>
            <figure className={`type-${pokemonInfo?.types[0]?.type?.name} pokemon-image`}>
                <img src={pokemonInfo?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonInfo?.name} />
            </figure>
            <p>#00{pokemonInfo?.id}</p>
        </main>
    )
}