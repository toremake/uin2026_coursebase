import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}){
    return (
        <section className="flexs">  {/* BUG: Wrong CSS class name - should be "flex" */}
            <h2>Pokemons</h2>
            {pokemons?.map((pokemon) => (<PokemonCard key={pokemon.id} pokemonUrl={pokemon.url} />)  // BUG: Wrong prop name - should be "url" not "pokemonUrl"
            )}
        </section>
    )
}