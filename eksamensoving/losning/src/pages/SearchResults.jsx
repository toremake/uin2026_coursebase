import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import PokemonCard from "../components/PokemonCard"
export default function SearchResults(){
    //I dette komponentet skal dere lagre verdiene som kommer fra søk og vise dem på siden. 
    //Dere skal gjennbruke pokemonkortene for å vise resultatene.
    
    const {searchQuery} = useOutletContext()
    const [searchResults, setSearchResults] = useState([])

    const getSearchResults = async()=>{
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
            const data = await res.json()
            setSearchResults(data)
            console.log(data)
        
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getSearchResults();
    },[searchQuery])

    const pokemonDef = {
        name: searchResults?.name,
        id: searchResults?.id,
        sprites: searchResults?.sprites
    }

    console.log("Sjekk",searchResults)


    return (
        <main>
            <h1>Search Results for: {searchQuery}</h1>
            <PokemonCard pokemonDef={pokemonDef} />

        </main>
        
    )
}