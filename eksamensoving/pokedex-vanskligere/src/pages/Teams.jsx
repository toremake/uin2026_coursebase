import { useEffect } from "react"

export default function Teams(){
    const teams = [
        {
            name: "Instinct",
            color: "yellow",
            pokemons: [{
                name: "Pikachu",
                id: 25
            }, {
                name: "Charmander",
                id: 4
                }]
        },
        {
            name: "Mystic",
            color: "blue",
            pokemons: [{
                name: "Squirtle",
                id: 7
            }, {
                name: "Psyduck",
                id: 54
            }]  
        },
        {
            name: "Valor",
            color: "red",
            pokemons: [{
                name: "Charmander",
                id: 4
            }, {
                name: "Bulbasaur",
                id: 1
            }]    
        }
    ]

    useEffect(()=>{
        localStorage.setItem('teams', JSON.stringify(teams))
    },[])
    
    //TODO:Hent ut alle lagene og vis de som ulike kort, se skisse for referanse. 
    //TODO: Lag lagkortene som komponenter, pass på å bruk bildene baser på navn verdien dere henter fra lagene. (Se typekortene for referanse)

    return(<h1>Teams</h1>)
}