import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState([])

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp])
    setTarefaTemp('')
  }

  return (
    <div>
      <input data-testid='campo-tarefa' required type="text" value={tarefaTemp} onChange={({target}) => setTarefaTemp(target.value)} />
      <button data-testid='btn-cadastrar' onClick={cadastrarTarefa} type="button">cadastrar</button>
      <ul>
        {tarefas.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
