import { useEffect } from "react"  // BUG: Missing useState import
import { useOutletContext } from "react-router-dom"
export default function SearchResults(){
    //I dette komponentet skal dere lagre verdiene som kommer fra søk og vise dem på siden. 
    //Dere skal gjennbruke pokemonkortene for å vise resultatene.
    
    const {searchQuery} = useOutletContext()
    const [searchResults, setSearchResults] = useState([])  // BUG: useState used but not imported

    const getSearchResults = async()=>{
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
            const data = await res.json()
            setSearchResults([data])  // BUG: Using setSearchResults but useState not imported
            console.log(data)
        
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getSearchResults();
    },[])  // BUG: Missing searchQuery dependency


    return (
        <h1>Search Results for: {searchQuery}</h1>
    )
}