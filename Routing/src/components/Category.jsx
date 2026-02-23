// Importerer useParams-hooken fra react-router-dom
// useParams brukes for å hente URL-parametere (f.eks :slug)
import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Category(){
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])
    //Kommenterer ut staten under da den blir unødvendig siden vi allerede har en state som oppdateres og endres basert på hva vi er inne på og hva endepunktet fra api er
    //const [spritesImg, setSpritesImg] = useState()
    
    /* spritesImg regnes ut direkte fra apiData
    hver gang komponenten renderer.*/
    const spritesImg = apiData?.sprites
    ? Object.keys(apiData.sprites)
    : [];
    
    const { slug,cat } = useParams()

    console.log("Denne kommer fra Category", apiEndpoint)

    const getSingleData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug+"/"+cat)
        const data = await response.json()
        setApiData(data)
    }


    useEffect(()=>{
        getSingleData()
    },[cat, apiEndpoint])


    return (
        <main>
             <h1>{apiData?.name}</h1>
             <section>
                <h2>Bilder</h2>
                {spritesImg?.map((item) => (
                    apiData?.sprites?.[item] ?
                    /* Vi sjekker først om apiData finnes, deretter om sprites-objektet finnes,
                    og til slutt om det finnes en verdi i sprites-objektet med nøkkelen som tilsvarer "item".
                    apiData?.sprites?.[item] betyr:
                    "Gå inn i apiData → deretter i sprites → hent verdien som ligger på nøkkelen som heter det samme som item."
                    Vi bruker bracket notation [item] fordi item er dynamisk.
                    Dot notation (sprites.item) ville sett etter en nøkkel som bokstavelig heter "item", og det vil ikke fungere.
                    Optional chaining (?.) sørger for at koden ikke krasjeer hvis apiData eller sprites er undefined.
                    
                    Hvis det finnes en gyldig bilde-URL på denne nøkkelen,
                    renderer vi et <img>-element.*/
                        <img key={item} src={apiData?.sprites?.[item]} alt={apiData?.name} />
                            /* React krever en unik key når vi bruker map. Her bruker vi selve nøkkelen fra sprites-objektet
                            (f.eks. "front_default", "back_shiny", osv.) src får verdien som ligger i sprites[item] som typisk er en URL til et bilde.
                            alt-tekst settes til navnet på objektet (for eksempel Pokémon-navnet).*/
                        
                        /* Hvis verdien er null eller undefined (mange sprite-felter kan være null),renderer vi ingenting.*/
                        : null
                ))}
             </section>
        </main>
       
    )
}
