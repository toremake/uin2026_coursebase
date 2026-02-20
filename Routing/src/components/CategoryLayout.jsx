// Importerer Link og Outlet fra react-router-dom
// Link brukes til navigasjon uten at siden lastes på nytt
// Outlet brukes til å vise nested routes (child routes)
import { Link, Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CategoryLayout(){
    
    const {slug} = useParams()
    const [apiData, setApiData] = useState([])
    const [apiEndpoint, setApiEndpoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'
    
    const getData = async()=>{
        const response = await fetch(defaultApiUrl)
        const data = await response.json()
        const {type, pokemon, item} = data
        
        setApiData({type, pokemon, item})
        
    }

    console.log("Sjekk",apiData)
    console.log("Denne kommer fra Layout",apiEndpoint) 

    useEffect(()=>{
        getData()
    },[slug])
    return (
     <>
        {/* Navigasjonsmeny for kategoriene */}
        <nav className='main-nav'>
            {Object.keys(apiData)?.map((item) => <Link key={item+'-saj'} to={item} onClick={()=>setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}
            {/*apiData?.map((item) => <Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndpoint(item.url)}>{item.name}</Link>)*/}
        </nav>

        {/* 
          Outlet er plassen hvor child-routes rendres.
          
          Når vi er på:
          /categories      -> <Categories /> vises her
          /categories/sko  -> <Category /> vises her
          
          Det bestemmes av routene definert i App.jsx
        */}
        <Outlet context={{apiEndpoint, defaultApiUrl}} />
    </>
    )
}
