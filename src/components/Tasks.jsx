function Tasks(props) {
    console.log(props)
    
  return (
    <div>
      <h1>Minhas Tarefas:</h1>
      {props.tasks.map(task => (
        <div key={task.id}>
          <h2>{task.tittle}</h2>
          <p>{task.descripcion}</p>
          <p>Status: {task.isCompleted ? "Concluída" : "Pendente"}</p>
        </div>
      ))}
    </div>
  )
}
export default Tasks