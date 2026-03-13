import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'   
// import { useState } from 'react'
import { redirect, useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SearchBar({searchQuery, setSearchQuery}){

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e)=>{
        setSearchInput(e.target.value)
        console.log(e.target.value)
    }
    const handleClick = ()=>{
        setSearchQuery(searchInput)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/searchresults?query=${searchQuery}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a pokemon..." onChange={handleChange} />
            <button type="submit" onClick={handleClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}