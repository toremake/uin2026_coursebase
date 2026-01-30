import "../style/form.scss"
// Funksjonskomponent som tar imot props fra forelder
// todo: objekt som inneholder data (f.eks. title og content)
// setTodo: funksjon for å oppdatere todo-state
export default function AddToDo({ todo, setTodo, setTodoList}) {
    // Funksjon som kjøres hver gang brukeren skriver i input eller textarea
    const handleChange = (e) => {
        // Henter name og value fra input-feltet som trigget eventet
        // name tilsvarer attributtet "name" i input/textarea
        // value er det brukeren skriver inn
        const { name, value } = e.target
        
        // Oppdaterer todo-state
        // prev er forrige state
        // ...prev kopierer alle eksisterende verdier
        // [name]: value oppdaterer riktig felt (title eller content)
        setTodo((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClick = (e)=>{
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setTodoList((prev) => ([...prev, {id:uniqId,...todo}]))
        console.log(todo)
    }


    return (
        <form className="todoform" onSubmit={handleClick}>
            <label htmlFor="todotitle">Todo tittel:</label>

            {/* 
                Input-felt for tittel
                name="title" brukes i handleChange for å vite hvilket felt som oppdateres
                onChange kaller handleChange hver gang brukeren skriver
            */}
            <input
                name="title"
                type="text"
                id="todotitle"
                placeholder="Dra på butikken"
                onChange={handleChange}
            />

            <label htmlFor="todocontent">Beskrivelse:</label>

            {/* 
                Tekstområde for innhold/beskrivelse
                name="content" matcher key i todo-objektet
            */}
            <textarea
                name="content"
                id="todocontent"
                onChange={handleChange}
            />
            <button>Make todo</button>
        </form>
    )
}
