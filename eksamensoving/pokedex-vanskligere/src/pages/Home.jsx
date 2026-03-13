import { useEffect, useState } from "react"
import PokemonList from "../components/PokemonList"
import TypeList from "../components/TypeList"

export default function Home(){
    const [pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()

    const getData = (url, set)=>{
        const response = await fetch(url)
        const data = await response.json()
        set(data.results)
      
    }
    useEffect(()=>{
        getData('https://pokeapi.co/api/v2/type/', setTypes)
        getData('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', setPokemons)
    },[])

      
    
    return (
        <>
        <main>
            <PokemonList pokemons={pokemons} />
            <TypeList types={types} />
        </main>
    )
}