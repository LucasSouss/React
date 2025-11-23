import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import './App.css'
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estuda Programação",
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
  ])

  return (
    <div className="container-principal">
      <div className="container-interno">

      <h1 className="titulo-principal">Gerenciador de Tarefas</h1>
      <AddTask/>
      <Tasks tasks={tasks}/>
      </div>

    </div>
      )
}

export default App