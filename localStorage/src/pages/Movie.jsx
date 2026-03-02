import { useParams } from "react-router-dom"

export default function Movie(){
    const {movie} = useParams()
    return <h1>{movie}</h1>
}