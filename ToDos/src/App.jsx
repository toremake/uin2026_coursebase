import './App.css'
import './style/todocard.scss'
import './style/layout.scss'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState()
  const [todo, setTodo] = useState()

      const todoItems = [
        {
            id: 0,
            title: "Gå på butikken",
            content: "Handle spagetthi og dorull"
        },
        {
            id: 1,
            title: "Skrive emnerapport",
            content: "Gå igjennom statestikk og skrive rapport basert på tall og tilbakemeldinger"
        },
        {
            id: 2,
            title: "Kjøpe kattemat",
            content: "Kjøpe nytt slankefor..."
        }
    ]
  
  return (
    <main>
      <h1>Todo app</h1>
        {/* 
        Her bruker vi Todos-komponentet.
        Dette komponentet har ansvar for å hente inn og vise
        alle enkeltstående todo-elementer, slik at App-komponentet
        holder seg enkel og oversiktlig.
      */}
      <AddToDo todo={todo} setTodo={setTodo} />
      <Todos todoItems={todoItems} />
    </main>
  )
}

export default App
