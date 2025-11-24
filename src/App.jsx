// App.jsx

import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { useState } from "react"
import './App.css' // Certifique-se que o CSS está sendo importado!

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
  ])

  return (
    // Aplica a classe para o container principal
    <div className="container-principal"> 
      
      {/* Aplica a classe para o container interno */}
      <div className="container-interno"> 

      {/* Aplica a classe para o título */}
      <h1 className="titulo-principal">Gerenciador de Tarefas</h1> 
      <AddTask/>
      <Tasks tasks={tasks}/>
      </div>

    </div>
  )
}

export default App