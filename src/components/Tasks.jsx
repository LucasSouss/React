import { ChevronRightIcon, DeleteIcon, Trash2Icon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="tasks-list">
      {props.tasks.map((task) => (
        <li key={task.id} className="task-item">
          {/* Botao de marcar as tarefas como concluído */}
          <button onClick={() => props.onTaskClick(task.id)} 
          className={`task-button ${task.isCompleted ? 'line-through' : ''}`}>
            {task.title}
            {/* {task.isCompleted ? "Complete" : "InComplete"} */}
          </button>

          <button className="chevronIcon">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          {/* Botao delete de deletar tarefas */}
          <button onClick={() => props.onDeleteTaskId(task.id)} className="deleteIcon">
            <Trash2Icon className="in-deleteIcon"/>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

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
