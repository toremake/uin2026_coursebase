export default function CharacterCard({char}){
    const {name, image, species, origin} = char
    return (
        <article>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{species}</p>
            <p>{origin.name}</p>
        </article>
    )
}