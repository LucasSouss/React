import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
  return (
    <div className="container-Input-Add">
      <input
        type="text"
        placeholder="Digite sua tarefa"
        className="Input-Task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digita a descrição da sua tarefa"
        className="Input-Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={() => onAddTaskSubmit(title, description)} className="bttAdd">Adicionar</button>
    </div>
  );
}

export default AddTask;
