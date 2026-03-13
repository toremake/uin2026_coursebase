import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Layout({children}){
    const [searchQuery, setSearchQuery] = useState('')
    
    return (
        <>
        <header className="layout-header">
            <nav>
                <Link className="pokeball-logo" to="/"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="logo-ball" /> UIN POKEDEX</Link>
                <Link to="teams">Teams</Link>
            </nav>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuerry} />  {/* BUG: Typo in setSearchQuery -> setSearchQuerry */}
        </header>
        <Outlet context={{searchQuery}} />
        </>
    )
}