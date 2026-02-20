import { useEffect, useState } from 'react'
import {Link, useOutletContext, useParams} from 'react-router-dom'
import CategoryCard from './CategoryCard'
export default function Categories(){
    const {slug} = useParams()
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState()
    
    const getData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data.results)
    }

    console.log("Denne kommer fra Categories",apiData)

    useEffect(()=>{
        getData()
    },[slug])

    
    return (
    <main>
        <h1>{slug}</h1>
        {apiData?.map((item) => <CategoryCard key={item.name + 'xt'} name={item.name} />)}

    </main>
    

)
}