export default function Todo({title, content, id, setTodoList}){
    const handleClick = ()=>{
        setTodoList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return (
        <article className="todo-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>Done</button>
        </article>
    )
}