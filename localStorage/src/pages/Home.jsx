import { useEffect, useState } from "react"

export default function Home(){
    const [search, setSearch] = useState()
    const storedHistory = localStorage.getItem("search")
    
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])

    console.log("Denne kommer fra storage", storedHistory)

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    //GJØR SÅNN!!!!!
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    },[history])

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            
            console.log(data)

        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

        setHistory((prev) => [...prev, search])

        

    }
    console.log(history)

    return (
    <main>
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Søk etter film
                <input type="search" placeholder="Harry Potter" onChange={handleChange}></input>
            </label>
            <button onClick={getMovies}>Søk</button>
        </form>  
    </main>
        
    )

    
}