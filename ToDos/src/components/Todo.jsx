export default function Todo({title, content}){
    return (
        <article className="todo-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button>Done</button>
        </article>
    )
}