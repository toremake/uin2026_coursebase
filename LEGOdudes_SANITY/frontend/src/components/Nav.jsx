import { Link } from "react-router-dom";

  export default function Nav(){
    return(
       <nav>
          <Link to="city">City</Link>
          <Link to="ninjago">Ninjago</Link>
          <Link to="castles-and-knights">Castles & Knights</Link>
          <Link to="marine-and-pirates">Marine & Pirates</Link>
          <Link to="movie-characters">Movie characters</Link>
        </nav>
    )
  }