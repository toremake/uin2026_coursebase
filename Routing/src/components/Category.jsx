// Importerer useParams-hooken fra react-router-dom
// useParams brukes for å hente URL-parametere (f.eks :slug)
import { useParams } from 'react-router-dom'

export default function Category(){

    // useParams returnerer et objekt med alle parametere fra URL-en
    // Siden vi har definert path=':slug' i App.jsx, vil den hente verdien som står der
    // Eksempel: /categories/sko → slug = "sko"
    const { slug } = useParams()

    // Returnerer JSX
    // Viser verdien av slug inne i en <h1>-tag
    return <h1>{slug}</h1>
}
