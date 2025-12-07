// App.jsx

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";
import "./App.css";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programação para ser bem sucedido!",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Aprender ingles para morar fora",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar para concurso",
      description: "Ser aprovado e dar uma boa condição para Dane",
      isCompleted: false,
    },
  ]);

  //Adiciona uma tarefa a lista
  function onAddTaskSubmit(title, description) {
    const adicionar = {
      id: uuidv4,
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
