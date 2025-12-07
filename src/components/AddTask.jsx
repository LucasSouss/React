import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


   
    //Função para enviar com ENTER. Também surge um aleta caso apenas um ou nenhum compo seja preenchido
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (!title.trim() || !description.trim()) {
          return alert('ATENÇÃO!!! Título e descrição precisam ser preenchidos.')
        }
        //Valida o titulo e descrição
        onAddTaskSubmit(title, description)
        //Limpa os campos
        setTitle('')
        setDescription('')
        }
      }

  return (
    <div className="container-Input-Add">
      <input
        type="text"
        placeholder="Digite sua tarefa"
        className="Input-Task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={handleKeyDown}   /* detecta a tecla ENTER  */
      />
      
      <input
        type="text"
        placeholder="Digita a descrição da sua tarefa"
        className="Input-Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        onKeyDown={handleKeyDown}  /* detecta a tecla ENTER  */
      />
      
      <button onClick={() => {
        //Verifica se os inputs estão preenchidos
        if (!title.trim() || !description.trim()) {
          return alert('ATENÇÃO!!! Título e descrição precisam ser preenchidos.')
        }
        
        onAddTaskSubmit(title, description) 
        setTitle('') 
        setDescription('')
        

      }} className="bttAdd">Adicionar</button>
    </div>
  );
}

export default AddTask;
