import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
import "../styles/types.scss"

export default function Type(){
    const [typeInfo, setTypeInfo] = useState()
    const {type} = useParams()

    const getType = async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = await response.json()
        setTypeInfo(data.pokemon.slice(0,20))
    }

    useEffect(()=>{
        getType()
    },[])
    
    return(
        <main>  
            <h1>Type</h1>
            <section className="flex">
                {typeInfo?.map((pokemon) => (
                    <PokemonCard key={pokemon?.pokemon?.name} url={pokemon?.pokemon.url} classN={type} />
                ))}
            </section>
        </main>
)
}