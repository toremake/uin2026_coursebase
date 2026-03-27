export default function TeamCard({t}){
    return(
        <article key={t.name} className="pokemon-card">
            <h3>{t.name}</h3>
            <img src={`/teams/Team_${t.name}.webp`} alt={t.name} />
        </article>
    )
}