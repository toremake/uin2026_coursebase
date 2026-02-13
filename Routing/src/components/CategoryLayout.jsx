// Importerer Link og Outlet fra react-router-dom
// Link brukes til navigasjon uten at siden lastes på nytt
// Outlet brukes til å vise nested routes (child routes)
import { Link, Outlet } from 'react-router-dom'

export default function CategoryLayout(){
    return (
     <>
        {/* Navigasjonsmeny for kategoriene */}
        <nav>

            {/* 
              to="sko" er en RELATIV link.
              Siden denne komponenten ligger på /categories,
              vil denne lenken gå til:
              /categories/sko
            */}
            <Link to="sko">Sko</Link>

            {/* Går til /categories/bukse */}
            <Link to="bukse">Bukse</Link>

            {/* Går til /categories/topp */}
            <Link to="topp">Topp</Link>

            {/* Går til /categories/kjole */}
            <Link to="kjole">Kjole</Link>

            {/* Går til /categories/skjorter */}
            <Link to="skjorter">Skjorter</Link>
        </nav>

        {/* 
          Outlet er plassen hvor child-routes rendres.
          
          Når vi er på:
          /categories      -> <Categories /> vises her
          /categories/sko  -> <Category /> vises her
          
          Det bestemmes av routene definert i App.jsx
        */}
        <Outlet />
    </>
    )
}
