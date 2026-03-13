import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}){
    return (
        <section className="flexs">
            <h2>Pokemons</h2>
            {pokemons?.map((pokemon) => (<PokemonCard key={pokemon.id} pokemonUrl={pokemon.url} />)
            )}
        </section>
    )
}