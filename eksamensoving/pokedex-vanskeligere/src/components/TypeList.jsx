import { Link } from "react-router-dom"
import "../styles/type.scss"
export default function TypeList({types}){

    //Her skal dere lage et ekstra koponent for hver type, og så mappe over types her og sende inn dataen som props til den komponenten. Det vil gjøre det mye enklere å style og holde koden ryddig.
    //Se pokemonkortene for inspirasjon til hvordan dere kan gjøre dette.

    const typesToUse = types?.filter((type) => type.name !== "unknown" && type.name !== "stellar")   

    console.log(typesToUse?.map((type) => type.name))
    return (
        <section className="flex">
            <h2>Types</h2>
            {typesToUse?.map((type) => (
            <article className={`type-${type.name} type-card`}>
                <Link to={`/types/${type.name}`} className="type-link">
                {/*Gjør om til en kompnent*/} 
                <p>{type.name}</p>
                <img src={`type_img/${type.name}.png`} alt={type.name} />
                </Link>
            </article>)
            )}
        </section>
    )
}