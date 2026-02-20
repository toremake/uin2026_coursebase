// Importerer useParams-hooken fra react-router-dom
// useParams brukes for å hente URL-parametere (f.eks :slug)
import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Category(){
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])
    const { slug } = useParams()

    console.log("Denne kommer fra Category", apiEndpoint)

    const getSingleData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data)
    }

    console.log("Cat",apiData, apiEndpoint)

    useEffect(()=>{
        getSingleData()
    },[slug, apiEndpoint])

    return (
        <main>
             <h1>{apiData?.name}</h1>
             <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
             </section>

        </main>
       
    )
}
