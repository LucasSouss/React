// App.jsx

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import "./App.css";
import {v4 as uuidv4} from 'uuid'


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Save")) || []
  )


  //Chama API
//   useEffect(() => {
//     const fetchTasks = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10', {
//       method: 'GET',
//     }
//   )
//     const data = await response.json()
//     setTasks(data)
//     }
//     fetchTasks()
// },[])


  useEffect(() => {
    localStorage.setItem("Save", JSON.stringify(tasks))
  }, [tasks])

  //Adiciona uma tarefa a lista
  function onAddTaskSubmit(title, description) {
    const adicionar = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, adicionar]);
  }

  // Marca a tarefa como concluída
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  // Exclui a tarefa
  function onDeleteTaskId(OutrotaskId) {
    const NovaTarefa = tasks.filter((task) => task.id != OutrotaskId);
    setTasks(NovaTarefa);
  }


  return (
    // Aplica a classe para o container principal
    <div className="container-principal">
      {/* Aplica a classe para o container interno */}
      <div className="container-interno">
        {/* Aplica a classe para o título */}
        <h1 className="titulo-principal">Gerenciador de Tarefas</h1>
        <div className="secao-adicionar-tarefa">
          <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        </div>
        <div className="secao-lista-tarefas">
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskId={onDeleteTaskId}
            
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
