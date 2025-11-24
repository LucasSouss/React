// Tasks.jsx

import { ChevronRightIcon } from "lucide-react"; 

function Tasks (props) {
  return (
    // Aplica a classe para o <ul>
    <ul className="tasks-list"> 
      {props.tasks.map((task) => (
        // Aplica a classe para o <li>
        <li key={task.id} className="task-item"> 
          
          {/* O CSS Puro targeta este botão com ':first-child' */}
          <button> 
            {task.title}
          </button>
          
          {/* O CSS Puro targeta este botão com ':last-child' */}
          <button title="Ver Detalhes">
            <ChevronRightIcon className="w-5 h-5" /> 
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks


// function Tasks(props) {

//   return (

//     <div>
//       <h1>Minhas Tarefas:</h1>
//       {props.tasks.map(task => (
//         <ul key={task.id}>
//           <h2>{task.title}</h2>
//           <li>{task.description}</li>
//           <li>{task.isCompleted ? "Concluída" : "Pendente"}</li>

//         </ul>
//       ))}

//     </div>
//   )
// }

// export default Tasks