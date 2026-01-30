import Todo from "./Todo";

/*
  Todos-komponenten har ansvar for å håndtere
  og vise en samling med todo-oppgaver.
*/
export default function Todos({todoItems, setTodoList}){

    /*
      Dette er en liste med todo-objekter.
      Hvert objekt representerer én oppgave og inneholder:
      - id: unik identifikator (viktig når man renderer lister i React)
      - title: kort tittel på oppgaven
      - content: mer detaljert beskrivelse
      
      Vi bruker en array for å enkelt kunne jobbe med flere todos.
    */
    return (
        <section className="flex-r">
            <h2>Todos</h2>
            {/*
              Her renderer vi Todo-komponenten.
              Tanken er at Todo-komponenten skal brukes til
              å vise én enkelt todo.
              
              Senere kan vi bruke todoItems-arrayet sammen
              med map() for å sende data til Todo-komponenten
              via props og vise alle oppgavene dynamisk.
            */}
            {todoItems.map((item) => <Todo key={item.id} title={item.title} content={item.content} id={item.id} setTodoList={setTodoList} />)}
        </section>
    )
}
