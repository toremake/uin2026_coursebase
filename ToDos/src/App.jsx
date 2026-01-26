import './App.css'
import './style/todocard.scss'
import Todos from './components/Todos'

function App() {
  
  return (
    <main>
      <h1>Todo app</h1>
        {/* 
        Her bruker vi Todos-komponentet.
        Dette komponentet har ansvar for å hente inn og vise
        alle enkeltstående todo-elementer, slik at App-komponentet
        holder seg enkel og oversiktlig.
      */}
      <Todos />
    </main>
  )
}

export default App
