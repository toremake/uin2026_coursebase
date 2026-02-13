// Importerer Link fra react-router-dom
// Link brukes for navigasjon uten at siden lastes på nytt
import { Link } from 'react-router-dom'

// Layout tar imot children som prop
// children er det som ligger inni <Layout> ... </Layout> i App.jsx
export default function Layout({ children }){
    return (
        <>
        {/* Hovednavigasjon */}
        <nav className="main-nav">

            {/* 
              Går til startsiden "/"
              Dette er en absolutt path fordi den starter med /
            */}
            <Link to="/">Hjem</Link>

            {/* 
              Relativ path: "categories"
              Siden Layout ligger rundt hele <Routes>,
              vil denne fungere som "/categories"
            */}
            <Link to="categories">Kategorier</Link>

            {/* Går til "/about" */}
            <Link to="about">Om oss</Link>
        </nav>

        {/* 
          Her rendres alt som ligger inni Layout i App.jsx
          
          I ditt tilfelle:
          <Layout>
              <Routes> ... </Routes>
          </Layout>

          Det betyr at alle routene vises her.
        */}
        {children}

        {/* Footer som vises på alle sider */}
        <footer>
            <p>2026 Utvikling av interaktive nettsteder - React router</p>
        </footer>
        </>
    )
}
