import { useState } from "react"

function App() {
const [message, setMessage] = useState('Hello World')

  return (

    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage ('Fui Clicado!')
      }}>Mudar Mensagem</button>
    </div>
  );
}

export default App;