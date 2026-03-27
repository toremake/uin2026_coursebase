import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}){
    return (
        <section className="flex">
            <h2>Pokemons</h2>
            {pokemons?.map((pokemon, i) => (<PokemonCard key={i} url={pokemon.url} />)
            )}
        </section>
    )
}